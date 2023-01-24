import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { countries } from '../utils/countries'
import {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
} from '../actions/cartAction'
import { createOrder } from '../actions/orderAction'
import CreditCardInput from 'react-credit-card-input'

import DatePicker from 'react-datepicker'
import api, { baseURL, imageURL } from '../utils/api'
import Toasty from '../utils/toast'
import InputNumber from '../components/InputNumber'
import InputPhone from '../components/InputPhone'
import { validateEmail } from '../utils/ValidateEmail'
import axios from 'axios'
import moment from 'moment'
import USStates from '../components/USStates'
import { Signature } from '../components/Signature'
import AllHerbs from '../components/AllHerbs'
import ToggleBack from '../components/ToggleBack'
import ImageLazyLoad from '../components/ImageLazyLoad'
import { userPaymentInfos } from '../actions/userAction'

const Checkout = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress, cartItems, paymentInfo } = cart
  console.log('shippingAddress', shippingAddress)
  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Order Completed Successfully',
        showConfirmButton: false,
        timer: 1500,
      })
      history.push(`/OrderLogDetail/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])
  const dispatch = useDispatch()
  const [taxofstate, settaxofstate] = useState(0)
  const [cartpricedummy, setcartpricedummy] = useState()
  const [togglecheckout, settogglecheckout] = useState(0)

  const [hidebton, sethidebton] = useState(false)
  const [showhipp, setshowhipp] = useState(false)

  const [loading, setloading] = useState(false)
  const [promocode, setpromocode] = useState('')
  const [showmodal, setshowmodal] = useState(0)

  const [allValues, setAllValues] = useState({
    email: shippingAddress?.email,
    phone: shippingAddress?.phone,
    signature: shippingAddress?.signature,
    billingfirstname: shippingAddress?.billingfirstname,
    billinglastname: shippingAddress?.billinglastname,
    billingaddress: shippingAddress?.billingaddress,
    billingcity: shippingAddress?.billingcity,
    billingzipcode: shippingAddress?.billingzipcode,
    billingcountry: shippingAddress?.billingcountry,
    billingstate: shippingAddress?.billingstate,
    shippingfirstname: shippingAddress?.shippingfirstname,
    shippinglastname: shippingAddress?.shippinglastname,
    shippingaddress: shippingAddress?.shippingaddress,
    shippingcity: shippingAddress?.shippingcity,
    shippingzipcode: shippingAddress?.shippingzipcode,
    shippingcountry: shippingAddress?.shippingcountry,
    shippingstate: shippingAddress?.shippingstate,
    paymentmethod: userInfo?.paymentinfo?.paymentmethod,
    cardholdername: userInfo?.paymentinfo?.cardholdername,
    cardnumber: userInfo?.paymentinfo?.cardnumber,
    cvvnumber: userInfo?.paymentinfo?.cvvnumber,
    expirydate: userInfo?.paymentinfo?.expirydate,
  })

  const togglecheckoutHandler = async () => {
    console.log('togglecheckoutHandler')
    settogglecheckout(togglecheckout + 1)
  }
  const saveShippingHandler = async (e) => {
    setshowmodal(2)
    const emailvalidation = validateEmail(allValues?.email)
    console.log('emmmm', emailvalidation)
    console.log('addEmployeeHandler')
    if (emailvalidation == true) {
      console.log('saveShippingHandler')
      settogglecheckout(togglecheckout + 1)
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const res = await axios.post(
        `${baseURL}/tax/gettaxdetails`,
        {
          state: allValues?.shippingstate
            ? allValues?.shippingstate
            : allValues?.billingstate,
        },
        config
      )

      console.log('ress', res)
      if (res?.data?.tax == null) {
        settaxofstate(0)
      } else {
        settaxofstate(res?.data?.tax?.percent)
      }
      cart.itemsPrice = cart.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      )
      cart.shippingPrice = Number(0)
      cart.taxPrice =
        Number(res?.data?.tax == null ? 0 : res?.data?.tax?.percent / 100) *
        Number(cart.itemsPrice)
      cart.taxPrice = cart.taxPrice.toFixed(0)
      cart.totalPrice = Number(cart.itemsPrice) + Number(cart.taxPrice)
      dispatch(
        saveShippingAddress({
          email: allValues?.email,
          phone: allValues?.phone,
          signature: shippingAddress?.signature,
          billingfirstname: allValues?.billingfirstname,
          billinglastname: allValues?.billinglastname,
          billingaddress: allValues?.billingaddress,
          billingcity: allValues?.billingcity,
          billingzipcode: allValues?.billingzipcode,
          billingcountry: allValues?.billingcountry,
          billingstate: allValues?.billingstate,
          shippingfirstname: allValues?.shippingfirstname,
          shippinglastname: allValues?.shippinglastname,
          shippingaddress: allValues?.shippingaddress,
          shippingcity: allValues?.shippingcity,
          shippingzipcode: allValues?.shippingzipcode,
          shippingcountry: allValues?.shippingcountry,
          shippingstate: allValues?.shippingstate,
        })
      )
    } else {
      Toasty('error', `Please enter a valid email`)
    }
  }
  const savePaymentMethodHandler = async (e) => {
    console.log('savePaymentMethodHandler')
    settogglecheckout(togglecheckout + 1)
    const body = {
      paymentmethod: allValues?.paymentmethod,
      cardholdername: allValues?.cardholdername,
      cardnumber: allValues?.cardnumber,
      cvvnumber: allValues?.cvvnumber,
      expirydate: allValues?.expirydate,
    }
    await dispatch(userPaymentInfos(body))

    // dispatch(
    //   savePaymentMethod({
    //     paymentmethod: allValues?.paymentmethod,
    //      cardholdername: allValues?.cardholdername,
    //      cardnumber: allValues?.cardnumber,
    //      cvvnumber: allValues?.cvvnumber,
    //      expirydate: allValues?.expirydate,
    //   })
    // )
  }
  const removeFromCartHandler = (id) => {
    console.log('removeFromCartHandler', removeFromCartHandler)
    dispatch(removeFromCart(id))
  }
  cart.itemsPrice = cart?.cartItems?.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  )
  cart.shippingPrice = Number(0)
  cart.taxPrice = Number(taxofstate / 100) * Number(cart?.itemsPrice)
  cart.taxPrice = cart.taxPrice.toFixed(0)
  cart.totalPrice = Number(cart?.itemsPrice) + Number(cart?.taxPrice)

  const placeOrderHandler = async () => {
    await setcartpricedummy(cartpricedummy ? cartpricedummy : cart?.totalPrice)
    cart.cartItems = cart?.cartItems?.filter(
      (cartt) => cartt?.qty !== 0 && cart
    )
    setloading(true)
    try {
      const paymentMethod = {
        paymentmethod: allValues?.paymentmethod,
        cardholdername: allValues?.cardholdername,
        cardnumber: allValues?.cardnumber,
        cvvnumber: allValues?.cvvnumber,
        expirydate: allValues?.expirydate,
      }
      console.log('cart.cartItems', cart?.cartItems, cart?.totalPrice)
      console.log('cartpricedummy', cartpricedummy)
      dispatch(
        createOrder({
          userid: userInfo?._id,
          orderItems: cart?.cartItems,
          shippingAddress: cart?.shippingAddress,
          paymentMethod: paymentMethod,
          itemsPrice: cart?.itemsPrice,
          shippingPrice: cart?.shippingPrice,
          taxPrice: cart?.taxPrice,
          totalPrice: cartpricedummy ? cartpricedummy : cart?.totalPrice,
          taxperproduct: Number(taxofstate),
        })
      )

      setloading(false)
    } catch (error) {
      Toasty('error', `Order not created`)
    }
    setloading(false)
  }
  const subQuantity = async (prod, qty) => {
    console.log('cart?.product', prod, qty)
    qty == 0 || qty <= 0
      ? dispatch(addToCart(prod, Number(qty + 0)))
      : dispatch(addToCart(prod, Number(qty - 1)))
  }

  const changeHandler = (e, namee) => {
    setAllValues({
      ...allValues,
      [namee ? namee : e.target.name]: namee ? e : e.target.value,
    })
  }

  const applyPromoCodeHandler = async () => {
    setloading(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
      const response = await axios.post(
        `${baseURL}/promo/applypromocode`,
        { promocode },
        config
      )
      console.log('resssssssss', response)
      if (response?.status === 201) {
        await Swal.fire({
          icon: 'success',
          title: '',
          text: 'PromoCode Successfully Activated',
          showConfirmButton: false,
          timer: 1500,
        })
        sethidebton(true)
        setcartpricedummy(
          Number(
            cart?.totalPrice / response?.data?.promocode?.discount
          ).toFixed(0)
        )
      } else if (response?.status === 208) {
        await Swal.fire({
          icon: 'info',
          title: '',
          text: 'Invalid PromoCode',
          showConfirmButton: false,
          timer: 1500,
        })
      }
    } catch (error) {
      setloading(false)
    }
    setpromocode('')
    setloading(false)
  }

  return (
    <>
      <section className='about-page'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-11 mx-auto'>
              <ToggleBack name={'Checkout'} />
              {/* Step form */}
              <div className='row'>
                <div className='col-12 mb-xl-0 mb-5'>
                  <form>
                    {/* Circles which indicates the steps of the form: */}
                    <div className='row mb-5'>
                      {togglecheckout == 0 && (
                        <div className='col-12'>
                          {/* One "tab" for each step in the form: */}
                          {/* ADDRESS TAB  */}
                          <div className=''>
                            <div className='row'>
                              <div className='col-xl-8 col-lg-8 col-md-10'>
                                <div className='d-flex justify-content-between text-center w-70 mb-5 mt-4'>
                                  <span className='step'>
                                    <div className='step-icon'>
                                      <i className='fas fa-address-card' />
                                    </div>
                                    <p className='mt-4'>Address</p>
                                  </span>
                                  <span className='step'>
                                    <div className='step-icon'>
                                      <i className='fas fa-credit-card' />
                                    </div>
                                    <p className='mt-4'>Payment</p>
                                  </span>
                                  <span className='step'>
                                    <div className='step-icon'>
                                      <i className='fas fa-check-square' />
                                    </div>
                                    <p className='mt-4'>Confirm</p>
                                  </span>
                                </div>
                                <div className='checkout-form'>
                                  <h3> ADDRESS</h3>
                                  {/* Personal info */}
                                  <div className='row mb-4'>
                                    <div className='col-12'>
                                      <h4>PERSONAL INFORMATION</h4>
                                    </div>
                                    <div className='col mb-4'>
                                      <label>Email Address*</label>
                                      <input
                                        type='email'
                                        className='form-control'
                                        placeholder='abs@email.com'
                                        name='email'
                                        value={allValues?.email}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col mb-4'>
                                      <label>Phone Number</label>
                                      <InputPhone
                                        unique={true}
                                        uniquevalue={allValues}
                                        name={'phone'}
                                        value={allValues?.phone}
                                        onChange={setAllValues}
                                      />
                                    </div>
                                  </div>
                                  {/* Billing Address */}
                                  <div className='row mb-4'>
                                    <div className='col-12 mb-4'>
                                      <h4>Billing Information</h4>
                                    </div>
                                    <div className='col-12 mb-4'>
                                      <label>First Name*</label>
                                      <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter First Name'
                                        name='billingfirstname'
                                        value={allValues?.billingfirstname}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col-12 mb-4'>
                                      <label>Last Name*</label>
                                      <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Last Name'
                                        name='billinglastname'
                                        value={allValues?.billinglastname}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col-12 mb-4'>
                                      <label>Address*</label>
                                      <textarea
                                        className='form-control'
                                        id='exampleFormControlTextarea1'
                                        placeholder='Enter Address'
                                        rows={5}
                                        value={allValues?.billingaddress}
                                        name='billingaddress'
                                        onChange={changeHandler}
                                      />
                                    </div>
                                  </div>
                                  <div className='row mb-4'>
                                    <div className='col-6 mb-4'>
                                      <label>City*</label>
                                      <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter City'
                                        name='billingcity'
                                        value={allValues?.billingcity}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col-6 mb-4'>
                                      <label>Zip Code*</label>
                                      <InputNumber
                                        unique={true}
                                        uniquevalue={allValues}
                                        name={'billingzipcode'}
                                        onChange={setAllValues}
                                        value={allValues?.billingzipcode}
                                        max={5}
                                        className='form-control'
                                      />
                                    </div>
                                    <div className='col-6 mb-4'>
                                      <label>Country*</label>
                                      {/* <input
                                      type='text'
                                      className='form-control'
                                      placeholder='Enter Country'
                                      value={allValues?.billingcountry}
                                      name='billingcountry'
                                      onChange={changeHandler}
                                    /> */}
                                      <select
                                        className='form-control'
                                        name='billingcountry'
                                        onChange={changeHandler}
                                        value={allValues?.billingcountry}
                                      >
                                        <option value disabled={true}>
                                          Select
                                        </option>
                                        {countries?.map((count) => (
                                          <option value={count}>{count}</option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className='col-6 mb-4'>
                                      <label>State*</label>
                                      <select
                                        className='form-control'
                                        name='billingstate'
                                        onChange={changeHandler}
                                        value={allValues?.billingstate}
                                      >
                                        <option value disabled={true}>
                                          Select
                                        </option>{' '}
                                        <USStates />
                                      </select>
                                      {/* <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter State"
                                      value={billingstate}
                                      onChange={(e) => {
                                        setbillingstate(e.target.value);
                                      }}
                                    /> */}
                                    </div>
                                    <div className='col-12'>
                                      <div className='ship-to-different'>
                                        <div className='checkbox-group'>
                                          <input
                                            type='checkbox'
                                            id='html'
                                            value={showhipp}
                                            checked={showhipp == true}
                                            onClick={() =>
                                              setshowhipp(!showhipp)
                                            }
                                          />
                                          <label htmlFor='html'>
                                            Ship To A Different Location{' '}
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Shipping Address */}
                                  {showhipp && (
                                    <div className='row mb-4'>
                                      <div className='col-12 mb-4'>
                                        <h4>Shipping Information</h4>
                                      </div>
                                      <div className='col-12 mb-4'>
                                        <label>First Name*</label>
                                        <input
                                          type='text'
                                          className='form-control'
                                          placeholder='Enter First Name'
                                          name='shippingfirstname'
                                          value={allValues?.shippingfirstname}
                                          onChange={changeHandler}
                                        />
                                      </div>
                                      <div className='col-12 mb-4'>
                                        <label>Last Name*</label>
                                        <input
                                          type='text'
                                          className='form-control'
                                          placeholder='Enter Last Name'
                                          name='shippinglastname'
                                          value={allValues?.shippinglastname}
                                          onChange={changeHandler}
                                        />
                                      </div>
                                      <div className='col-12 mb-4'>
                                        <label>Address*</label>
                                        <textarea
                                          className='form-control'
                                          id='exampleFormControlTextarea1'
                                          placeholder='Enter Address'
                                          rows={5}
                                          name='shippingaddress'
                                          value={allValues?.shippingaddress}
                                          onChange={changeHandler}
                                        />
                                      </div>
                                      <div className='col-6 mb-4'>
                                        <label>City*</label>
                                        <input
                                          type='text'
                                          className='form-control'
                                          placeholder='Enter City'
                                          name='shippingcity'
                                          value={allValues?.shippingcity}
                                          onChange={changeHandler}
                                        />
                                      </div>
                                      <div className='col-6 mb-4'>
                                        <label>Zip Code*</label>
                                        <InputNumber
                                          unique={true}
                                          uniquevalue={allValues}
                                          name={'shippingzipcode'}
                                          onChange={setAllValues}
                                          value={allValues?.shippingzipcode}
                                          max={5}
                                          className='form-control'
                                        />
                                      </div>
                                      <div className='col-6 mb-4'>
                                        <label>Country*</label>
                                        {/* <input 
                                       type='text'
                                       className='form-control'
                                       placeholder='Enter Country'
                                       name='shippingcountry'
                                       onChange={changeHandler}
                                       value={allValues?.shippingcountry}
                                     /> */}
                                        <select
                                          className='form-control'
                                          name='shippingcountry'
                                          onChange={changeHandler}
                                          value={allValues?.shippingcountry}
                                        >
                                          <option value disabled={true}>
                                            Select
                                          </option>
                                          {countries?.map((count) => (
                                            <option value={count}>
                                              {count}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                      <div className='col-6 mb-4'>
                                        <label>State*</label>
                                        <select
                                          className='form-control'
                                          name='shippingstate'
                                          onChange={changeHandler}
                                          value={allValues?.shippingstate}
                                        >
                                          <option value disabled={true}>
                                            Select
                                          </option>{' '}
                                          <USStates />
                                        </select>
                                      </div>
                                    </div>
                                  )}
                                  <label>E Signature*</label>
                                  <Signature
                                    allValues={allValues}
                                    setAllValues={setAllValues}
                                  />
                                </div>
                              </div>
                              <div className='col-xl-4 col-lg-4 col-md-7'>
                                <div className='order-summary has-margin'>
                                  <div className='order-summary-head'>
                                    <p>Order Summary</p>
                                  </div>
                                  <div className='summary-details'>
                                    <div className='product-cart-summary'>
                                      <div className='row align-items-center justify-content-center'>
                                        {/* <div className="col-4 mb-3">
                                      <img
                                        src="images/summary-product-image.png"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="col-8 mb-3">
                                      <h4>Abc Product</h4>
                                      <p>$100.00</p>
                                    </div> */}
                                        {cartItems?.length > 0 &&
                                          cartItems?.map((cart) => (
                                            <>
                                              <div className='col-4 mb-3'>
                                                <ImageLazyLoad
                                                  src={`${imageURL}${cart?.image[0]}`}
                                                  alt=''
                                                  classname='img-fluid'
                                                />
                                              </div>
                                              <div className='col-8 mb-3'>
                                                <td>{cart?.name}</td>
                                                <p>${cart?.price}</p>
                                              </div>
                                            </>
                                          ))}
                                      </div>
                                    </div>

                                    <div className='row justify-content-between align-items-start'>
                                      <div className='col-12 border-top border-grey mt-4 pb-4' />
                                      {/* sub total */}
                                      <div className='col-7 mb-3'>
                                        <p className='summary-title'>
                                          Subtotal
                                        </p>
                                      </div>
                                      <div className='col-5 mb-3 text-right'>
                                        <p className='summary-value'>
                                          {' '}
                                          $
                                          {cartItems
                                            .reduce(
                                              (acc, item) =>
                                                acc + item.qty * item.price,
                                              0
                                            )
                                            .toFixed(2)}
                                        </p>
                                      </div>
                                      {/* tax */}
                                      <div className='col-7 mb-3'>
                                        <p className='summary-title'>
                                          Tax {taxofstate}%
                                        </p>
                                      </div>
                                      <div className='col-5 mb-3 text-right'>
                                        <p className='summary-value'>
                                          ${cart?.taxPrice}
                                        </p>
                                      </div>
                                      {/* Shipping rates */}
                                      <div className='col-7 mb-3'>
                                        <p className='summary-title'>
                                          Shipping rates
                                        </p>
                                      </div>
                                      <div className='col-5 mb-3 text-right'>
                                        <p className='summary-value'>
                                          ${cart?.shippingPrice}
                                        </p>
                                      </div>
                                      <div className='col-12 border-top border-grey mb-2' />
                                      {/* grand total */}
                                      <div className='col-7 mb-3'>
                                        <p className='grand-total'>
                                          Grand Total
                                        </p>
                                      </div>
                                      <div className='col-5 mb-3 text-right'>
                                        <p className='grand-total-value'>
                                          {' '}
                                          ${cart?.totalPrice.toFixed(0)}
                                        </p>
                                      </div>
                                    </div>
                                    {/* <div className="row mt-4">
                                  <div className="col-12 text-center">
                                    <a
                                      href="#"
                                      className="btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize"
                                      data-toggle="modal"
                                      data-target="#confirmOrder"
                                    >
                                      Place Order
                                    </a>
                                  </div>
                                </div> */}
                                  </div>
                                  {/* <div className="ship-to-different mt-4 text-center">
                                <div className="checkbox-group">
                                  <input type="checkbox" id="html" />
                                  <label htmlFor="html">
                                    I Agree To The Terms And Conditions{" "}
                                  </label>
                                </div>
                              </div> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* PAYMENT TAB */}
                      {togglecheckout == 1 && (
                        <div className='col-12'>
                          <div className='row'>
                            <div className='col-xl-7 col-lg-7 col-md-10'>
                              <div className='checkout-form'>
                                <h3 className='mt-3'>SELECT PAYMENT METHOD</h3>
                                <form>
                                  <div className='row my-4'>
                                    <div className='col-md-12'>
                                      <div className='d-flex justify-content-between'>
                                        <div className=''>
                                          <div className='payment-method'>
                                            <input
                                              type='radio'
                                              id='paypal'
                                              className='input-hidden'
                                              value={allValues?.paymentmethod}
                                              name='paypal'
                                              onChange={(e) => {
                                                changeHandler(
                                                  'paypal',
                                                  'paymentmethod'
                                                )
                                              }}
                                            />
                                            <label htmlFor='paypal'>
                                              <img
                                                src='images/paypal.png'
                                                alt=''
                                                className='img-fluid'
                                              />
                                            </label>
                                          </div>
                                        </div>
                                        <div className=''>
                                          <div className='payment-method'>
                                            <input
                                              type='radio'
                                              id='Authorize.net'
                                              className='input-hidden'
                                              name='Authorize.net'
                                              value={allValues?.paymentmethod}
                                              onChange={(e) => {
                                                changeHandler(
                                                  'Authorize.net',
                                                  'paymentmethod'
                                                )
                                              }}
                                            />
                                            <label htmlFor='Authorize.net'>
                                              <img
                                                src='images/Authorize.net.png'
                                                alt=''
                                                style={{
                                                  maxWidth: 110,
                                                  maxHeight: 110,
                                                }}
                                                className='img-fluid'
                                              />
                                            </label>
                                          </div>
                                        </div>
                                        <div className=''>
                                          <div className='payment-method'>
                                            <input
                                              type='radio'
                                              id='sezzle'
                                              className='input-hidden'
                                              value={allValues?.paymentmethod}
                                              name='sezzle'
                                              onChange={(e) => {
                                                changeHandler(
                                                  'sezzle',
                                                  'paymentmethod'
                                                )
                                              }}
                                            />
                                            <label htmlFor='sezzle'>
                                              <img
                                                src='images/logo-sezzle.png'
                                                alt=''
                                                style={{
                                                  maxWidth: 93,
                                                  maxHeight: 93,
                                                }}
                                                className='img-fluid'
                                              />
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className='col-12 mt-1'>
                                      <h4>Payment</h4>
                                    </div>
                                    <div className='col-12 mb-4'>
                                      <label>Card Holder Name*</label>
                                      <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter Card Holder Name'
                                        name='cardholdername'
                                        value={allValues?.cardholdername}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col-12 mb-4'>
                                      <label>Payment Information*</label>
                                      <CreditCardInput
                                        cardNumberInputProps={{
                                          value: allValues?.cardnumber,
                                          onChange: (e) => {
                                            setAllValues({
                                              ...allValues,
                                              ['cardnumber']: e.target.value,
                                            })
                                          },
                                        }}
                                        cardExpiryInputProps={{
                                          value: allValues?.expirydate,
                                          onChange: (e) => {
                                            setAllValues({
                                              ...allValues,
                                              ['expirydate']: e.target.value,
                                            })
                                          },
                                        }}
                                        cardCVCInputProps={{
                                          value: allValues?.cvvnumber,
                                          onChange: (e) => {
                                            setAllValues({
                                              ...allValues,
                                              ['cvvnumber']: e.target.value,
                                            })
                                          },
                                        }}
                                        fieldClassName='input'
                                      />{' '}
                                    </div>

                                    {/* <div className='col-6 mb-4'>
                                      <label>Card Number*</label>
                                      <input
                                        type='tel'
                                        className='form-control'
                                        inputmode='numeric'
                                        pattern='[0-9\s]{13,19}'
                                        autocomplete='cc-number'
                                        maxlength='19'
                                        placeholder='xxxx xxxx xxxx xxxx'
                                        name='cardnumber'
                                        value={allValues?.cardnumber}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col-6 mb-4'>
                                      <label>CVV Number*</label>
                                      <input
                                        type='tel'
                                        className='form-control'
                                        maxlength='11'
                                        placeholder='Enter CVV'
                                        name='cvvnumber'
                                        value={allValues?.cvvnumber}
                                        onChange={changeHandler}
                                      />
                                    </div>
                                    <div className='col-6 mb-4'>
                                      <label>Expiry date*</label>
                                      <DatePicker
                                        minDate={moment().toDate()}
                                        selected={
                                          new Date(
                                            allValues?.expirydate
                                              ? allValues?.expirydate
                                              : moment().toDate()
                                          )
                                        }
                                        name='expirydate'
                                        value={
                                          new Date(
                                            allValues?.expirydate
                                              ? allValues?.expirydate
                                              : moment().toDate()
                                          )
                                        }
                                        onChange={(e) => {
                                          changeHandler(e, 'expirydate')
                                        }}
                                        className='sort-date customdate form-control'
                                      />{' '}
                                    </div> */}
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className='col-lg-3 col-lg-4 col-md-7 offset-lg-1'>
                              <div className='order-summary has-margin'>
                                <div className='order-summary-head'>
                                  <p>Order Summary</p>
                                </div>
                                <div className='summary-details'>
                                  <div className='product-cart-summary'>
                                    <div className='row align-items-center justify-content-center'>
                                      {/* <div className="col-4 mb-3">
                                      <img
                                        src="images/summary-product-image.png"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="col-8 mb-3">
                                      <h4>Abc Product</h4>
                                      <p>$100.00</p>
                                    </div> */}
                                      {cartItems?.length > 0 &&
                                        cartItems?.map((cart) => (
                                          <>
                                            <div className='col-4 mb-3'>
                                              <ImageLazyLoad
                                                src={`${imageURL}${cart?.image[0]}`}
                                                alt=''
                                                classname='img-fluid'
                                              />
                                            </div>
                                            <div className='col-8 mb-3'>
                                              <td>{cart?.name}</td>
                                              <p>${cart?.price}</p>
                                            </div>
                                          </>
                                        ))}
                                    </div>
                                  </div>

                                  <div className='row justify-content-between align-items-start'>
                                    <div className='col-12 border-top border-grey mt-4 pb-4' />
                                    {/* sub total */}
                                    <div className='col-7 mb-3'>
                                      <p className='summary-title'>Subtotal</p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='summary-value'>
                                        {' '}
                                        $
                                        {cartItems
                                          .reduce(
                                            (acc, item) =>
                                              acc + item.qty * item.price,
                                            0
                                          )
                                          .toFixed(2)}
                                      </p>
                                    </div>
                                    {/* tax */}
                                    <div className='col-7 mb-3'>
                                      <p className='summary-title'>
                                        Tax {taxofstate}%
                                      </p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='summary-value'>
                                        ${cart?.taxPrice}
                                      </p>
                                    </div>
                                    {/* Shipping rates */}
                                    <div className='col-7 mb-3'>
                                      <p className='summary-title'>
                                        Shipping rates
                                      </p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='summary-value'>
                                        ${cart?.shippingPrice}
                                      </p>
                                    </div>
                                    <div className='col-12 border-top border-grey mb-2' />
                                    {/* grand total */}
                                    <div className='col-7 mb-3'>
                                      <p className='grand-total'>Grand Total</p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='grand-total-value'>
                                        {' '}
                                        ${cart?.totalPrice.toFixed(0)}
                                      </p>
                                    </div>
                                  </div>
                                  {/* <div className="row mt-4">
                                  <div className="col-12 text-center">
                                    <a
                                      href="#"
                                      className="btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize"
                                      data-toggle="modal"
                                      data-target="#confirmOrder"
                                    >
                                      Place Order
                                    </a>
                                  </div>
                                </div> */}
                                </div>
                                {/* <div className="ship-to-different mt-4 text-center">
                                <div className="checkbox-group">
                                  <input type="checkbox" id="html" />
                                  <label htmlFor="html">
                                    I Agree To The Terms And Conditions{" "}
                                  </label>
                                </div>
                              </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* CONFIRMATION TAB */}
                      {togglecheckout == 2 && (
                        <div className='col-12'>
                          <div className='row'>
                            <div className='col-xl-7 col-lg-7 col-md-10'>
                              <div className='checkout-form'>
                                <div className='table-responsive mb-5'>
                                  <table
                                    className='table table-borderless text-center'
                                    id='cart-table'
                                  >
                                    <thead>
                                      <tr>
                                        <th>IMAGE</th>
                                        <th>PRODUCT</th>
                                        <th>QUANTITY</th>
                                        <th>UNIT PRICE</th>
                                        <th>Sub Total</th>
                                        <th>TAX</th>
                                        <th> </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {cartItems?.length > 0 &&
                                        cartItems?.map((cart) => (
                                          <tr>
                                            <td>
                                              <div className='cart-product'>
                                                <ImageLazyLoad
                                                  src={`${imageURL}${cart?.image[0]}`}
                                                  alt=''
                                                  classname='img-fluid mx-auto'
                                                />
                                              </div>
                                            </td>
                                            <td>{cart?.name}</td>
                                            <td>
                                              <div id='field1'>
                                                <div className='quantifier ml-0'>
                                                  <button
                                                    type='button'
                                                    id='sub'
                                                    className='minus'
                                                    value={cart?.qty}
                                                    onClick={() =>
                                                      // dispatch(
                                                      //   addToCart(
                                                      //     cart?.product,
                                                      //     Number(cart?.qty-1)
                                                      //   )
                                                      // )
                                                      subQuantity(
                                                        cart?.product,
                                                        cart?.qty
                                                      )
                                                    }
                                                  >
                                                    <i className='fas fa-minus' />
                                                  </button>
                                                  <input
                                                    type='number'
                                                    id={1}
                                                    defaultValue={1}
                                                    min={1}
                                                    value={cart?.qty}
                                                    onChange={(e) =>
                                                      dispatch(
                                                        addToCart(
                                                          cart?.product,
                                                          Number(e.target.value)
                                                        )
                                                      )
                                                    }
                                                    className='quantity p-md-2 p-0'
                                                    max={cart?.countInStock}
                                                  />
                                                  <button
                                                    type='button'
                                                    id='add'
                                                    className='plus'
                                                    value={cart?.qty}
                                                    onClick={() =>
                                                      dispatch(
                                                        addToCart(
                                                          cart?.product,
                                                          Number(cart?.qty + 1)
                                                        )
                                                      )
                                                    }
                                                  >
                                                    <i className='fas fa-plus' />
                                                  </button>
                                                </div>
                                              </div>
                                            </td>
                                            <td>${cart?.price}</td>
                                            <td>${cart?.qty * cart?.price}</td>
                                            <td>{taxofstate}%</td>
                                            <td>
                                              <button
                                                type='button'
                                                className='btn trash-btn'
                                                onClick={() =>
                                                  removeFromCartHandler(
                                                    cart?.product
                                                  )
                                                }
                                              >
                                                <i className='far fa-trash-alt' />
                                              </button>
                                            </td>
                                          </tr>
                                        ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className='col-lg-3 col-lg-4 col-md-7 offset-lg-1'>
                              <div className='order-summary has-margin'>
                                <div className='order-summary-head'>
                                  <p>Order Summary</p>
                                </div>
                                <div className='summary-details'>
                                  <div className='product-cart-summary'>
                                    <div className='row align-items-center justify-content-center'>
                                      {/* <div className="col-4 mb-3">
                                      <img
                                        src="images/summary-product-image.png"
                                        alt=""
                                        className="img-fluid"
                                      />
                                    </div>
                                    <div className="col-8 mb-3">
                                      <h4>Abc Product</h4>
                                      <p>$100.00</p>
                                    </div> */}
                                      {cartItems?.length > 0 &&
                                        cartItems?.map((cart) => (
                                          <>
                                            <div className='col-4 mb-3'>
                                              <ImageLazyLoad
                                                src={`${imageURL}${cart?.image[0]}`}
                                                alt=''
                                                classname='img-fluid'
                                              />
                                            </div>
                                            <div className='col-8 mb-3'>
                                              <td>{cart?.name}</td>
                                              <p>${cart?.price}</p>
                                            </div>
                                          </>
                                        ))}
                                    </div>
                                  </div>

                                  <div className='row justify-content-between align-items-start'>
                                    <div className='col-12 border-top border-grey mt-4 pb-4' />
                                    {/* sub total */}
                                    <div className='col-7 mb-3'>
                                      <p className='summary-title'>Subtotal</p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='summary-value'>
                                        {' '}
                                        $
                                        {cartItems
                                          .reduce(
                                            (acc, item) =>
                                              acc + item.qty * item.price,
                                            0
                                          )
                                          .toFixed(2)}
                                      </p>
                                    </div>
                                    {/* tax */}
                                    <div className='col-7 mb-3'>
                                      <p className='summary-title'>
                                        Tax {taxofstate}%
                                      </p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='summary-value'>
                                        ${cart?.taxPrice}
                                      </p>
                                    </div>
                                    {/* Shipping rates */}
                                    <div className='col-7 mb-3'>
                                      <p className='summary-title'>
                                        Shipping rates
                                      </p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='summary-value'>
                                        ${cart?.shippingPrice}
                                      </p>
                                    </div>
                                    <div className='col-12 border-top border-grey mb-2' />
                                    {/* grand total */}
                                    <div className='col-7 mb-3'>
                                      <p className='grand-total'>Grand Total</p>
                                    </div>
                                    <div className='col-5 mb-3 text-right'>
                                      <p className='grand-total-value'>
                                        {' '}
                                        $
                                        {cartpricedummy
                                          ? cartpricedummy
                                          : cart?.totalPrice.toFixed(0)}
                                      </p>
                                    </div>
                                    {!hidebton && (
                                      <>
                                        <div className='col-md-7 col-sm-12 mb-3'>
                                          <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Enter PromoCode'
                                            value={promocode}
                                            onChange={(e) => {
                                              setpromocode(e.target.value)
                                            }}
                                          />
                                        </div>

                                        <div className='col-md-5 col-sm-12 mb-3'>
                                          <Link
                                            onClick={() => {
                                              promocode?.length > 0
                                                ? applyPromoCodeHandler()
                                                : Toasty(
                                                    'error',
                                                    `Please fill out all the required fields`
                                                  )
                                            }}
                                            to='#'
                                            className='btn red-btn-solid  mx-auto text-capitalize check-btn'
                                          >
                                            Apply PromoCode
                                          </Link>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  <div className='col-12 border-top border-grey mb-2' />

                                  <div className='row mt-4'>
                                    <div className='col-12 text-center'>
                                      <Link
                                        to='#'
                                        className='btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize'
                                        data-toggle='modal'
                                        data-target='#confirmOrder'
                                        onClick={
                                          cart.cartItems === 0
                                            ? null
                                            : placeOrderHandler
                                        }
                                      >
                                        Place Order
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="ship-to-different mt-4 text-center">
                                <div className="checkbox-group">
                                  <input type="checkbox" id="html" />
                                  <label htmlFor="html">
                                    I Agree To The Terms And Conditions{" "}
                                  </label>
                                </div>
                              </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* <div className="text-left ml-3 ml-lg-0">
                      <button
                        type="button"
                        className="red-btn-outline"
                        id="prevBtn"
                        onClick={togglecheckoutHandler}
                      >
                        Continue
                      </button>
                      <button
                        type="button"
                        className="red-btn-solid"
                        id="nextBtn"
                      >
                        <Link
                          to="#"
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                          onClick={togglecheckoutHandler}

                        >
                          Continue
                        </Link>
                      </button>
                    </div> */}
                    </div>
                    {togglecheckout == 2 ? null : (
                      <div>
                        <button
                          data-target='#checkoutModal'
                          data-toggle='modal'
                          type='button'
                          className='btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0 mb-2'
                          onClick={() => {
                            togglecheckout == 0 && showmodal == 0
                              ? setshowmodal(1)
                              : togglecheckout == 0 &&
                                allValues?.email &&
                                allValues?.phone &&
                                allValues?.billingfirstname &&
                                allValues?.billinglastname &&
                                allValues?.billingaddress &&
                                allValues?.billingcity &&
                                allValues?.billingzipcode &&
                                allValues?.billingcountry &&
                                allValues?.billingstate
                              ? // allValues?.shippingfirstname &&
                                // allValues?.shippinglastname &&
                                // allValues?.shippingaddress &&
                                // allValues?.shippingcity &&
                                // allValues?.shippingzipcode &&
                                // allValues?.shippingcountry &&
                                // allValues?.shippingstate
                                saveShippingHandler()
                              : togglecheckout == 1 &&
                                allValues?.paymentmethod &&
                                allValues?.cardholdername &&
                                allValues?.cardnumber &&
                                allValues?.cvvnumber
                              ? savePaymentMethodHandler()
                              : togglecheckout == 2
                              ? togglecheckoutHandler()
                              : Toasty(
                                  'error',
                                  `Please fill out all the required fields`
                                )
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AllHerbs />
      {showmodal == 1 && (
        <div
          className='modal fade'
          id='checkoutModal'
          tabIndex={-1}
          aria-labelledby='exampleModalCenterTitle'
          style={{ display: 'none' }}
          aria-hidden='true'
        >
          <div
            className='modal-dialog modal-md modal-dialog-centered '
            role='document'
          >
            <div className='modal-content py-5'>
              {/* <button type="button" class="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&#10006;</span>
      </button> */}
              <div className='px-sm-5 px-1'>
                <div className='text-center'>
                  <h2 className=' mt-2'>
                    Please recheck your address, the address will not be changed
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout

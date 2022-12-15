import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { countries } from '../utils/countries'

import { saveShippingAddress, savePaymentMethod } from '../actions/cartAction'
import { createGeoGeneticsOrder } from '../actions/orderAction'
import DatePicker from 'react-datepicker'
import { baseURL, imageURL } from '../utils/api'
import Toasty from '../utils/toast'
import InputNumber from '../components/InputNumber'
import InputPhone from '../components/InputPhone'
import { validateEmail } from '../utils/ValidateEmail'
import axios from 'axios'
import moment from 'moment'
import USStates from '../components/USStates'
import { Signature } from '../components/Signature'
import AllHerbs from '../components/AllHerbs'

const GeoGeneticsCheckout = ({ history, location, match }) => {
  const [totalPrice, settotalPrice] = useState(0)
  const [quantity, setquantity] = useState(
    location?.search ? Number(location?.search?.split('=')[1]) : 1
  )

  const cart = useSelector((state) => state.cart)
  const { shippingAddress, paymentInfo } = cart
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    getSingleProduct()
  }, [])

  const getSingleProduct = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getProductDetails/${match?.params?.id}`,
        method: 'GET',
      })
      // const ress = await axios({
      //   url: `${baseURL}/product/getProductDetailsByName/${match?.params?.id}`,
      //   method: "GET"
      // });

      console.log('res', res?.data?.product)
      setproduct(res?.data?.product)
      settotalPrice(Number(res?.data?.product?.price * quantity))
    } catch (err) {
      console.log(err)
    }
  }

  const [taxofstate, settaxofstate] = useState(0)
  const [product, setproduct] = useState()

  const [allValues, setAllValues] = useState({
    yourinfofirstName: shippingAddress?.yourinfofirstName,
    yourinfolastName: shippingAddress?.yourinfolastName,
    yourinfoemail: shippingAddress?.yourinfoemail,
    yourinfophone: shippingAddress?.yourinfophone,
    yourinfoage: shippingAddress?.yourinfoage,
    yourinfoheight: shippingAddress?.yourinfoheight,
    yourinfoweight: shippingAddress?.yourinfoweight,
    yourinfoethnicity: shippingAddress?.yourinfoethnicity,
    yourinfoconsultaionfor: shippingAddress?.yourinfoconsultaionfor,
    yourinfosetcurrentmedication: shippingAddress?.yourinfosetcurrentmedication,
    yourinforeason: shippingAddress?.yourinforeason,
    yourinfodiagnosis: shippingAddress?.yourinfodiagnosis,
    yourinfodoc_schedule: shippingAddress?.yourinfodoc_schedule,

    email: shippingAddress?.email,
    phone: shippingAddress?.phone,

    firstName: shippingAddress?.firstName,
    reasonformedic: shippingAddress?.reasonformedic,
    currentmedic: shippingAddress?.currentmedic,
    allergics: shippingAddress?.allergics,

    age: shippingAddress?.age,
    weight: shippingAddress?.weight,
    height: shippingAddress?.height,
    // govtid: shippingAddress?.govtid,

    doc_schedule: shippingAddress?.doc_schedule,
    disclaimer: shippingAddress?.disclaimer,
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
    paymentmethod: paymentInfo?.paymentmethod,
    cardholdername: paymentInfo?.cardholdername,
    cardnumber: paymentInfo?.cardnumber,
    cvvnumber: paymentInfo?.cvvnumber,
    expirydate: paymentInfo?.expirydate,
  })

  const [togglecheckout, settogglecheckout] = useState(0)
  const [taxPrice, settaxPrice] = useState(0)
  const [shippingPrice, setshippingPrice] = useState(0)

  const togglecheckoutHandler = async () => {
    console.log('togglecheckoutHandler')
    settogglecheckout(togglecheckout + 1)
  }

  const inctogglehandler = () => {
    settogglecheckout(togglecheckout + 1)
  }

  const saveShippingHandler = async (e) => {
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
        { state: allValues?.shippingstate },
        config
      )
      console.log('ress', res)
      if (res?.data?.tax == null) {
        settaxofstate(0)
      } else {
        settaxofstate(res?.data?.tax?.percent)
      }

      setshippingPrice(0)
      settaxPrice(
        Number(res?.data?.tax == null ? 0 : res?.data?.tax?.percent / 100) *
          Number(product?.price * quantity)
      )
      settotalPrice(Number(product?.price * quantity) + Number(taxPrice))
      dispatch(
        saveShippingAddress({
          yourinfofirstName: allValues?.yourinfofirstName,
          yourinfolastName: allValues?.yourinfolastName,
          yourinfoemail: allValues?.yourinfoemail,
          yourinfophone: allValues?.yourinfophone,
          yourinfoage: allValues?.yourinfoage,
          yourinfoheight: allValues?.yourinfoheight,
          yourinfoweight: allValues?.yourinfoweight,
          yourinfoethnicity: allValues?.yourinfoethnicity,
          yourinfoconsultaionfor: allValues?.yourinfoconsultaionfor,
          yourinfosetcurrentmedication: allValues?.yourinfosetcurrentmedication,
          yourinforeason: allValues?.yourinforeason,
          yourinfodiagnosis: allValues?.yourinfodiagnosis,
          yourinfodoc_schedule: allValues?.yourinfodoc_schedule?.name,

          email: allValues?.email,
          doc_schedule: allValues?.doc_schedule?.name,
          signature: shippingAddress?.signature,
          disclaimer: allValues?.disclaimer,
          phone: allValues?.phone,
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
      Swal.fire({
        icon: 'info',
        title: '',
        text: 'Please recheck your address, the address will not be changed',
        showConfirmButton: false,
        timer: 1500,
      })
    } else {
      Toasty('error', `Please enter a valid email`)
    }
  }
  const savePaymentMethodHandler = (e) => {
    console.log('savePaymentMethodHandler')
    settogglecheckout(togglecheckout + 1)
    dispatch(
      savePaymentMethod({
        paymentmethod: 'Card',
        cardholdername: allValues?.cardholdername,
        cardnumber: allValues?.cardnumber,
        cvvnumber: allValues?.cvvnumber,
        expirydate: allValues?.expirydate,
      })
    )
  }

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

  const placeOrderHandler = async () => {
    if (quantity == 0) {
      Toasty('error', `Quantity must be greater than 0`)
    } else {
      const orderItems = [
        {
          ...product,
          product: product?._id,
          qty: quantity,
          image: product?.productimage,
        },
      ]
      const totalpricee = Number(product?.price * quantity) + Number(taxPrice)
      const formData = new FormData()

      formData.append('doc_schedule', allValues?.doc_schedule)
      formData.append('orderItems', JSON.stringify(orderItems))

      formData.append('userid', userInfo?._id)
      formData.append('shippingAddress', JSON.stringify(cart?.shippingAddress))
      formData.append('paymentMethod', JSON.stringify(paymentInfo))
      formData.append('itemsPrice', product?.price)
      formData.append('shippingPrice', shippingPrice)
      formData.append('taxPrice', taxPrice)
      formData.append('totalPrice', totalpricee)
      formData.append('taxperproduct', taxofstate)

      const body = formData
      dispatch(createGeoGeneticsOrder(body))
    }
  }
  const subQuantity = async () => {
    console.log('cart?.product', quantity)
    quantity == 0 || quantity <= 0
      ? setquantity(Number(quantity + 0))
      : setquantity(Number(quantity - 1))
  }

  const filedocsHandler = (e) => {
    setAllValues({
      ...allValues,

      ['doc_schedule']: e?.target?.files[0],
    })
  }
  const filedocsHandler2 = (e) => {
    setAllValues({
      ...allValues,

      ['yourinfodoc_schedule']: e?.target?.files[0],
    })
  }

  useEffect(() => {
    settaxPrice(Number(taxofstate / 100) * Number(product?.price * quantity))
    settotalPrice(Number(product?.price * quantity) + Number(taxPrice))
  }, [quantity])
  const changeHandler = (e, namee) => {
    setAllValues({
      ...allValues,
      [namee ? namee : e.target.name]: namee ? e : e.target.value,
    })
  }
  useEffect(() => {
    console.log('allValues', allValues)
  }, [allValues])
  return (
    <>
      <section className='about-page'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-11 mx-auto'>
              {/* Step form */}
              <div className='row'>
                <div className='col-12 mb-xl-0 mb-5'>
                  .{' '}
                  <form>
                    {/* Circles which indicates the steps of the form: */}
                    <div className='row mb-5'>
                      <div className='col-12'>
                        <div className='d-flex justify-content-between text-center w-70 mb-5'>
                          <span
                            className={
                              togglecheckout == 0
                                ? 'step active'
                                : 'step finish'
                            }
                          >
                            <div className='step-icon'>
                              <i className='fas fa-address-card' />
                            </div>
                            <p className='mt-4'>Your Information</p>
                          </span>
                          <span
                            className={
                              togglecheckout == 1
                                ? 'step active'
                                : togglecheckout > 1
                                ? 'step finish'
                                : null
                            }
                          >
                            <div className='step-icon'>
                              <i className='fas fa-address-card' />
                            </div>
                            <p className='mt-4'>Address</p>
                          </span>
                          <span
                            className={
                              togglecheckout == 2
                                ? 'step active'
                                : togglecheckout > 2
                                ? 'step finish'
                                : null
                            }
                          >
                            <div className='step-icon'>
                              <i className='fas fa-credit-card' />
                            </div>
                            <p className='mt-4'>Payment</p>
                          </span>
                          <span
                            className={
                              togglecheckout == 3 ? 'step active' : null
                            }
                          >
                            <div className='step-icon'>
                              <i className='fas fa-check-square' />
                            </div>
                            <p className='mt-4'>Confirm</p>
                          </span>
                        </div>
                        <h3 className='mb-2'> Geo’Genetic Packages Form</h3>
                        <div style={{ height: 5 }}></div>
                        <p className='summary-value mb-4'>
                          It is highly recommended that you book a consultation
                          before purchasing. A government ID and client form is
                          required before purchasing a Geo’Genetic Package.
                        </p>
                        {togglecheckout == 0 && (
                          <div className=''>
                            <div className='row'>
                              <div className='col-xl-7 col-lg-7 col-md-10'>
                                <div className='consultation-form'>
                                  <div className='form-group'>
                                    <div className='form-row'>
                                      <div className='col-md-6'>
                                        <label>
                                          First Name{' '}
                                          <span className='red'>*</span>
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Enter First Name'
                                          type='text'
                                          value={allValues?.yourinfofirstName}
                                          onChange={changeHandler}
                                          name='yourinfofirstName'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Last Name{' '}
                                          <span className='red'>*</span>
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Enter Last Name'
                                          type='text'
                                          value={allValues?.yourinfolastName}
                                          onChange={changeHandler}
                                          name='yourinfolastName'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Phone <span className='red'>*</span>
                                        </label>
                                        <InputPhone
                                          unique={true}
                                          uniquevalue={allValues}
                                          name={'yourinfophone'}
                                          value={allValues?.yourinfophone}
                                          onChange={setAllValues}
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Email <span className='red'>*</span>
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Enter Email'
                                          type='email'
                                          value={allValues?.yourinfoemail}
                                          onChange={changeHandler}
                                          name='yourinfoemail'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Age <span className='red'>*</span>
                                        </label>
                                        <InputNumber
                                          unique={true}
                                          uniquevalue={allValues}
                                          name={'yourinfoage'}
                                          onChange={setAllValues}
                                          value={allValues?.yourinfoage}
                                          max={105}
                                          className='form-control'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Height in meters
                                          <span className='red'>*</span>
                                        </label>
                                        <InputNumber
                                          unique={true}
                                          uniquevalue={allValues}
                                          name={'yourinfoheight'}
                                          onChange={setAllValues}
                                          value={allValues?.yourinfoheight}
                                          max={1005}
                                          className='form-control'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Weight in lbs
                                          <span className='red'>*</span>
                                        </label>
                                        <InputNumber
                                          unique={true}
                                          uniquevalue={allValues}
                                          name={'yourinfoweight'}
                                          onChange={setAllValues}
                                          value={allValues?.yourinfoweight}
                                          max={1005}
                                          className='form-control'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Ethnicity{' '}
                                          <span className='red'>*</span>
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Enter Ethnicity'
                                          type='text'
                                          value={allValues?.yourinfoethnicity}
                                          onChange={changeHandler}
                                          name='yourinfoethnicity'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Consultation For
                                          <span className='red'>*</span>
                                        </label>
                                        <select
                                          className='form-control text-left'
                                          id='timeZone'
                                          value={
                                            allValues?.yourinfoconsultaionfor
                                          }
                                          onChange={changeHandler}
                                          name='yourinfoconsultaionfor'
                                        >
                                          <option disabled={true} value={''}>
                                            Select
                                          </option>
                                          <option value={'General cleanse'}>
                                            General cleanse
                                          </option>
                                          <option value={'HSV & HPV'}>
                                            HSV &amp; HPV
                                          </option>
                                          <option value={'Diabetes'}>
                                            Diabetes
                                          </option>
                                          <option value={'Cancer/ Tumors'}>
                                            Cancer/ Tumors
                                          </option>
                                          <option value={'Chronic Condition'}>
                                            Chronic Condition
                                          </option>
                                          <option value={'Multiple Conditions'}>
                                            Multiple Conditions
                                          </option>
                                        </select>
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Current Medication
                                          <span className='red'>*</span>
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Enter Current Medication'
                                          type='text'
                                          value={
                                            allValues?.yourinfosetcurrentmedication
                                          }
                                          onChange={changeHandler}
                                          name='yourinfosetcurrentmedication'
                                        />
                                      </div>
                                      <div className='col-md-12'>
                                        <label>
                                          Reason for Consultation{' '}
                                          <span className='red'>*</span>
                                        </label>
                                        <input
                                          className='form-control'
                                          placeholder='Enter Reason for Consultation'
                                          value={allValues?.yourinforeason}
                                          onChange={changeHandler}
                                          name='yourinforeason'
                                        />
                                      </div>
                                      <div className='col-md-12'>
                                        <label>
                                          Current Diagnoses (provided by MD)
                                          <span className='red'>*</span>
                                        </label>
                                        <textarea
                                          className='form-control'
                                          id='exampleFormControlTextarea1'
                                          placeholder='Message'
                                          rows={5}
                                          value={allValues?.yourinfodiagnosis}
                                          onChange={changeHandler}
                                          name='yourinfodiagnosis'
                                        />
                                      </div>
                                      <div className='col-md-6'>
                                        <label>
                                          Upload Valid Government Issued ID{' '}
                                          <span className='red'>*</span>
                                        </label>
                                        <input
                                          type='file'
                                          name
                                          id='govt-id'
                                          // accept='application/pdf,application/vnd.ms-excel'
                                          onChange={filedocsHandler2}
                                          className='form-control'
                                        />
                                        <label
                                          htmlFor='govt-id'
                                          className='d-block id-upload'
                                        >
                                          {allValues?.yourinfodoc_schedule
                                            ?.name ? (
                                            <i className='fas fa-file-upload fa-2x' />
                                          ) : (
                                            <i className='fas fa-upload fa-2x' />
                                          )}
                                        </label>
                                      </div>
                                      <div className='col-12 text-right'>
                                        <Link to='#' className='red-link'>
                                          Redeem Coupon
                                        </Link>
                                      </div>
                                    </div>
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

                                        <>
                                          <div className='col-4 mb-3'>
                                            <img
                                              src={`${imageURL}${product?.productimage[0]}`}
                                              alt=''
                                              className='img-fluid'
                                            />
                                          </div>
                                          <div className='col-8 mb-3'>
                                            <td>{product?.name}</td>
                                            <p>${product?.price}</p>
                                          </div>
                                        </>
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
                                          ${product?.price * quantity}
                                          {/* {cartItems
                                          .reduce(
                                            (acc, item) =>
                                              acc + item.qty * item.price,
                                            0
                                          )
                                          .toFixed(2)} */}
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
                                          To be Counted
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
                                          ${shippingPrice}
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
                                          ${totalPrice.toFixed(0)}
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
                        {/* One "tab" for each step in the form: */}
                        {/* ADDRESS TAB  */}
                        {togglecheckout == 1 && (
                          <div className=''>
                            <div className='row'>
                              <div className='col-xl-7 col-lg-7 col-md-10'>
                                <div className='checkout-form'>
                                  <div className=''>
                                    <div className='consultation-form'>
                                      <div className='form-group'>
                                        <div className='form-row'>
                                          <div className='col-md-6'>
                                            <label>
                                              Name{' '}
                                              <span className='red'>*</span>
                                            </label>
                                            <input
                                              className='form-control'
                                              placeholder='Enter First Name'
                                              type='text'
                                              value={allValues?.firstName}
                                              onChange={changeHandler}
                                              name='firstName'
                                            />
                                          </div>
                                          <div className='col-md-6'>
                                            <label>
                                              Age <span className='red'>*</span>
                                            </label>
                                            <InputNumber
                                              unique={true}
                                              uniquevalue={allValues}
                                              name={'age'}
                                              onChange={setAllValues}
                                              value={allValues?.age}
                                              max={5}
                                              className='form-control'
                                            />
                                          </div>
                                          <div className='col-md-6'>
                                            <label>
                                              Weight{' '}
                                              <span className='red'>*</span>
                                            </label>
                                            <InputNumber
                                              unique={true}
                                              uniquevalue={allValues}
                                              name={'weight'}
                                              onChange={setAllValues}
                                              value={allValues?.weight}
                                              max={5}
                                              className='form-control'
                                            />
                                          </div>
                                          <div className='col-md-6'>
                                            <label>
                                              Height{' '}
                                              <span className='red'>*</span>
                                            </label>
                                            <InputNumber
                                              unique={true}
                                              uniquevalue={allValues}
                                              name={'height'}
                                              onChange={setAllValues}
                                              value={allValues?.height}
                                              max={5}
                                              className='form-control'
                                            />
                                          </div>
                                          <div className='col-md-6'>
                                            <label>
                                              Reason for Geo’Genetic Therapy{' '}
                                              <span className='red'>*</span>
                                            </label>
                                            <input
                                              className='form-control'
                                              placeholder='Enter Reason for Geo’Genetic Therapy'
                                              type='text'
                                              value={allValues?.reasonformedic}
                                              onChange={changeHandler}
                                              name='reasonformedic'
                                            />
                                          </div>
                                          <div className='col-md-6'>
                                            <label>
                                              Current Medication{' '}
                                              <span className='red'>*</span>
                                            </label>
                                            <input
                                              className='form-control'
                                              placeholder='Enter Current Medication'
                                              type='text'
                                              value={allValues?.currentmedic}
                                              onChange={changeHandler}
                                              name='currentmedic'
                                            />
                                          </div>
                                          <div className='col-md-6'>
                                            <label>
                                              Allergies{' '}
                                              <span className='red'>*</span>
                                            </label>
                                            <input
                                              className='form-control'
                                              placeholder='Enter Allergies'
                                              type='text'
                                              value={allValues?.allergics}
                                              onChange={changeHandler}
                                              name='allergics'
                                            />
                                          </div>
                                          {/* <div className='row mb-0'>
                                          <div className='col-6 mb-4'>
                                            <label>
                                              Upload Valid Government Issued ID*
                                            </label>
                                            <input
                                              type='file'
                                              name
                                              id='govt-id'
                                              accept='application/pdf,application/vnd.ms-excel'
                                              onChange={filedocsHandler2}
                                              className='form-control'
                                            />
                                            <label
                                              htmlFor='govt-id'
                                              className='d-block id-upload'
                                            >
                                              {allValues?.govtid?.name ? (
                                                <i className='fas fa-file-upload fa-2x' />
                                              ) : (
                                                <i className='fas fa-upload fa-2x' />
                                              )}
                                            </label>
                                          </div>
                                        </div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div style={{ height: 20 }}></div>
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

                                  <div className='row mb-4'>
                                    <div className='col mb-4'>
                                      <label>
                                        Upload Valid Government Issued ID*
                                      </label>
                                      <input
                                        type='file'
                                        name
                                        id='govt-id'
                                        accept='application/pdf,application/vnd.ms-excel'
                                        onChange={filedocsHandler}
                                        className='form-control'
                                      />
                                      <label
                                        htmlFor='govt-id'
                                        className='d-block id-upload'
                                      >
                                        {allValues?.doc_schedule?.name ? (
                                          <i className='fas fa-file-upload fa-2x' />
                                        ) : (
                                          <i className='fas fa-upload fa-2x' />
                                        )}
                                      </label>
                                    </div>
                                    <div className='col mb-4 ship-to-different text-center'>
                                      <div className='checkbox-group'>
                                        <input
                                          type='checkbox'
                                          id='html'
                                          value={allValues?.disclaimer}
                                          onChange={changeHandler}
                                        />
                                        <label htmlFor='html'>
                                          Disclaimer{' '}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <p className='summary-value'>
                                    DISCLAIMER: The following GeoGenetic
                                    protocol list is a general list of items
                                    that may be included in your protocol.
                                    GeoGenetic Protocols are customized so items
                                    in your specific protocol will not be
                                    identical to the list but included based on
                                    your healing needs and specifications.
                                  </p>
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
                                        </option>
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
                                    <label>E Signature*</label>
                                    <Signature
                                      allValues={allValues}
                                      setAllValues={setAllValues}
                                    />
                                    {/* <div className="col-12">
                                    <div className="ship-to-different">
                                      <div className="checkbox-group">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">
                                          Ship To A Different Location{" "}
                                        </label>
                                      </div>
                                    </div>
                                  </div> */}
                                  </div>
                                  <div style={{ height: 40 }}> </div>

                                  {/* Shipping Address */}
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
                                        value={allValues?.shippingaddress}
                                        name='shippingaddress'
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
                                          <option value={count}>{count}</option>
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

                                        <>
                                          <div className='col-4 mb-3'>
                                            <img
                                              src={`${imageURL}${product?.productimage[0]}`}
                                              alt=''
                                              className='img-fluid'
                                            />
                                          </div>
                                          <div className='col-8 mb-3'>
                                            <td>{product?.name}</td>
                                            <p>${product?.price}</p>
                                          </div>
                                        </>
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
                                          ${product?.price * quantity}
                                          {/* {cartItems
                                          .reduce(
                                            (acc, item) =>
                                              acc + item.qty * item.price,
                                            0
                                          )
                                          .toFixed(2)} */}
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
                                          To be Counted
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
                                          ${shippingPrice}
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
                                          ${totalPrice.toFixed(0)}
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
                      </div>
                      {/* PAYMENT TAB */}
                      {togglecheckout == 2 && (
                        <div>
                          <div className='row'>
                            <div className='col-xl-7 col-lg-7 col-md-10'>
                              <div className='checkout-form'>
                                {/* <h3>SELECT PAYMENT METHOD</h3> */}
                                <form>
                                  <div className='row my-4'>
                                    {/* <div className='col-lg-2 col-md-3 col-4'>
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
                                  <div className='col-lg-2 col-md-3 col-4'>
                                    <div className='payment-method'>
                                      <input
                                        type='radio'
                                        id='Apple Pay'
                                        className='input-hidden'
                                        name='Apple Pay'
                                        value={allValues?.paymentmethod}
                                        onChange={(e) => {
                                          changeHandler(
                                            'Apple Pay',
                                            'paymentmethod'
                                          )
                                        }}
                                      />
                                      <label htmlFor='Apple Pay'>
                                        <img
                                          src='images/applepay.png'
                                          alt=''
                                          className='img-fluid'
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className='col-lg-2 col-md-3 col-4'>
                                    <div className='payment-method'>
                                      <input
                                        type='radio'
                                        id='visa'
                                        className='input-hidden'
                                        name='visa'
                                        onChange={(e) => {
                                          changeHandler('visa', 'paymentmethod')
                                        }}
                                      />
                                      <label htmlFor='visa'>
                                        <img
                                          src='images/visa.png'
                                          alt=''
                                          className='img-fluid'
                                        />
                                      </label>
                                    </div>
                                  </div> */}
                                    <div className='col-12 mt-5'>
                                      <h4>Payment</h4>
                                    </div>
                                    <div className='col-6 mb-4'>
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
                                    <div className='col-6 mb-4'>
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
                                    </div>
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

                                      <>
                                        <div className='col-4 mb-3'>
                                          <img
                                            src={`${imageURL}${product?.productimage[0]}`}
                                            alt=''
                                            className='img-fluid'
                                          />
                                        </div>
                                        <div className='col-8 mb-3'>
                                          <td>{product?.name}</td>
                                          <p>${product?.price}</p>
                                        </div>
                                      </>
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
                                        ${product?.price * quantity}
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
                                        ${taxPrice}
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
                                        ${shippingPrice}
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
                                        ${product?.price * quantity + taxPrice}
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
                      {togglecheckout == 3 && (
                        <div>
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
                                      <tr>
                                        <td>
                                          <div className='cart-product'>
                                            <img
                                              src={`${imageURL}${product?.productimage[0]}`}
                                              alt=''
                                              className='img-fluid mx-auto'
                                            />
                                          </div>
                                        </td>
                                        <td>{product?.name}</td>
                                        <td>
                                          <div id='field1'>
                                            <div className='quantifier ml-0'>
                                              <button
                                                type='button'
                                                id='sub'
                                                className='minus'
                                                value={quantity}
                                                onClick={() =>
                                                  // dispatch(
                                                  //   addToCart(
                                                  //     cart?.product,
                                                  //     Number(cart?.qty-1)
                                                  //   )
                                                  // )
                                                  subQuantity()
                                                }
                                              >
                                                <i className='fas fa-minus' />
                                              </button>
                                              <input
                                                type='number'
                                                id={1}
                                                defaultValue={1}
                                                min={1}
                                                value={quantity}
                                                className='quantity p-md-2 p-0'
                                                max={product?.countInStock}
                                              />
                                              <button
                                                type='button'
                                                id='add'
                                                className='plus'
                                                value={quantity}
                                                onClick={() =>
                                                  setquantity(
                                                    Number(quantity + 1)
                                                  )
                                                }
                                              >
                                                <i className='fas fa-plus' />
                                              </button>
                                            </div>
                                          </div>
                                        </td>
                                        <td>${product?.price}</td>
                                        <td>${quantity * product?.price}</td>
                                        <td>{taxofstate}%</td>
                                      </tr>
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

                                      <>
                                        <div className='col-4 mb-3'>
                                          <img
                                            src={`${imageURL}${product?.productimage[0]}`}
                                            alt=''
                                            className='img-fluid'
                                          />
                                        </div>
                                        <div className='col-8 mb-3'>
                                          <td>{product?.name}</td>
                                          <p>${product?.price}</p>
                                        </div>
                                      </>
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
                                        ${product?.price * quantity}
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
                                        ${taxPrice}
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
                                        ${shippingPrice}
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
                                        {Number(product?.price * quantity) +
                                          taxPrice}
                                      </p>
                                    </div>
                                  </div>
                                  <div className='row mt-4'>
                                    <div className='col-12 text-center'>
                                      <Link
                                        to='#'
                                        className='btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize'
                                        data-toggle='modal'
                                        data-target='#confirmOrder'
                                        onClick={placeOrderHandler}
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
                    {togglecheckout == 3 ? null : (
                      <div>
                        <button
                          type='button'
                          className='btn red-btn-solid mt-lg-4 mt-1 ml-3 ml-md-0'
                          onClick={() => {
                            togglecheckout == 0 &&
                            allValues?.yourinfofirstName &&
                            allValues?.yourinfodoc_schedule?.name?.length > 0 &&
                            allValues?.yourinfolastName &&
                            allValues?.yourinfoemail &&
                            allValues?.yourinfophone &&
                            allValues?.yourinfoage &&
                            allValues?.yourinfoheight &&
                            allValues?.yourinfoweight &&
                            allValues?.yourinfoethnicity &&
                            allValues?.yourinfoconsultaionfor &&
                            allValues?.yourinfosetcurrentmedication &&
                            allValues?.yourinforeason &&
                            allValues?.yourinfodiagnosis
                              ? inctogglehandler()
                              : togglecheckout == 1 &&
                                allValues?.email &&
                                allValues?.doc_schedule?.name?.length > 0 &&
                                allValues?.phone &&
                                allValues?.billingfirstname &&
                                allValues?.billinglastname &&
                                allValues?.billingaddress &&
                                allValues?.billingcity &&
                                allValues?.billingzipcode &&
                                allValues?.billingcountry &&
                                allValues?.billingstate &&
                                allValues?.shippingfirstname &&
                                allValues?.shippinglastname &&
                                allValues?.shippingaddress &&
                                allValues?.shippingcity &&
                                allValues?.shippingzipcode &&
                                allValues?.shippingcountry &&
                                allValues?.shippingstate
                              ? saveShippingHandler()
                              : togglecheckout == 1 &&
                                // allValues?.paymentmethod &&
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
      <div style={{ height: 10 }}></div>
      <AllHerbs />
    </>
  )
}

export default GeoGeneticsCheckout

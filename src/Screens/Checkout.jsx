import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod
} from "../actions/cartAction";
import { createOrder } from "../actions/orderAction";
import DatePicker from "react-datepicker";
import { baseURL, imageURL } from "../utils/api";
import Toasty from "../utils/toast";
import InputNumber from "../components/InputNumber";
import InputPhone from "../components/InputPhone";
import { validateEmail } from "../utils/ValidateEmail";
import axios from "axios";
import moment from "moment";
import USStates from "../components/USStates";
import { SunspotLoader } from "react-awesome-loaders";

const Checkout = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems, paymentInfo } = cart;
  console.log("shippingAddress", shippingAddress);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const [taxofstate, settaxofstate] = useState(0);
  const [loading, setloading] = useState(false);

  const [allValues, setAllValues] = useState({
    email: shippingAddress?.email,
    phone: shippingAddress?.phone,
    billingname: shippingAddress?.billingname,
    billingaddress: shippingAddress?.billingaddress,
    billingcity: shippingAddress?.billingcity,
    billingzipcode: shippingAddress?.billingzipcode,
    billingcountry: shippingAddress?.billingcountry,
    billingstate: shippingAddress?.billingstate,
    shippingname: shippingAddress?.shippingname,
    shippingaddress: shippingAddress?.shippingaddress,
    shippingcity: shippingAddress?.shippingcity,
    shippingzipcode: shippingAddress?.shippingzipcode,
    shippingcountry: shippingAddress?.shippingcountry,
    shippingstate: shippingAddress?.shippingstate,
    paymentmethod: paymentInfo?.paymentmethod,
    cardholdername: paymentInfo?.cardholdername,
    cardnumber: paymentInfo?.cardnumber,
    cvvnumber: paymentInfo?.cvvnumber,
    expirydate: paymentInfo?.expirydate
  });

  const [togglecheckout, settogglecheckout] = useState(0);

  const togglecheckoutHandler = async () => {
    console.log("togglecheckoutHandler");
    settogglecheckout(togglecheckout + 1);
  };
  const saveShippingHandler = async (e) => {
    const emailvalidation = validateEmail(allValues?.email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      console.log("saveShippingHandler");
      settogglecheckout(togglecheckout + 1);
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      };
      const res = await axios.post(
        `${baseURL}/tax/gettaxdetails`,
        { state: allValues?.shippingstate },
        config
      );

      console.log("ress", res);
      if (res?.data?.tax == null) {
        settaxofstate(0);
      } else {
        settaxofstate(res?.data?.tax?.percent);
      }
      cart.itemsPrice = cart.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
      cart.shippingPrice = Number(0);
      cart.taxPrice =
        Number(res?.data?.tax == null ? 0 : res?.data?.tax?.percent / 100) *
        Number(cart.itemsPrice);
      cart.taxPrice = cart.taxPrice.toFixed(0);
      cart.totalPrice = Number(cart.itemsPrice) + Number(cart.taxPrice);
      dispatch(
        saveShippingAddress({
          email: allValues?.email,
          phone: allValues?.phone,
          billingname: allValues?.billingname,
          billingaddress: allValues?.billingaddress,
          billingcity: allValues?.billingcity,
          billingzipcode: allValues?.billingzipcode,
          billingcountry: allValues?.billingcountry,
          billingstate: allValues?.billingstate,
          shippingname: allValues?.shippingname,
          shippingaddress: allValues?.shippingaddress,
          shippingcity: allValues?.shippingcity,
          shippingzipcode: allValues?.shippingzipcode,
          shippingcountry: allValues?.shippingcountry,
          shippingstate: allValues?.shippingstate
        })
      );
    } else {
      Toasty("error", `Please enter a valid email`);
    }
  };
  const savePaymentMethodHandler = (e) => {
    console.log("savePaymentMethodHandler");
    settogglecheckout(togglecheckout + 1);
    dispatch(
      savePaymentMethod({
        paymentmethod: allValues?.paymentmethod,
        cardholdername: allValues?.cardholdername,
        cardnumber: allValues?.cardnumber,
        cvvnumber: allValues?.cvvnumber,
        expirydate: allValues?.expirydate
      })
    );
  };
  const removeFromCartHandler = (id) => {
    console.log("removeFromCartHandler", removeFromCartHandler);
    dispatch(removeFromCart(id));
  };
  cart.itemsPrice = cart?.cartItems?.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.shippingPrice = Number(0);
  cart.taxPrice = Number(taxofstate / 100) * Number(cart?.itemsPrice);
  cart.taxPrice = cart.taxPrice.toFixed(0);
  cart.totalPrice = Number(cart?.itemsPrice) + Number(cart?.taxPrice);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: "success",
        title: "",
        text: "Order Completed Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      history.push(`/OrderLogDetail/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = async () => {
    cart.cartItems = cart?.cartItems?.filter(
      (cartt) => cartt?.qty !== 0 && cart
    );
    setloading(true);
    try {
      console.log("cart.cartItems", cart?.cartItems);

      dispatch(
        createOrder({
          userid: userInfo?._id,
          orderItems: cart?.cartItems,
          shippingAddress: cart?.shippingAddress,
          paymentMethod: paymentInfo,
          itemsPrice: cart?.itemsPrice,
          shippingPrice: cart?.shippingPrice,
          taxPrice: cart?.taxPrice,
          totalPrice: cart?.totalPrice,
          taxperproduct: Number(taxofstate)
        })
      );

      setloading(false);
    } catch (error) {
      Toasty("error", `Order not created`);
    }
    setloading(false);
  };
  const subQuantity = async (prod, qty) => {
    console.log("cart?.product", prod, qty);
    qty == 0 || qty <= 0
      ? dispatch(addToCart(prod, Number(qty + 0)))
      : dispatch(addToCart(prod, Number(qty - 1)));
  };

  const changeHandler = (e, namee) => {
    setAllValues({
      ...allValues,
      [namee ? namee : e.target.name]: namee ? e : e.target.value
    });
  };
  useEffect(() => {
    console.log("allValues", allValues);
  }, [allValues]);

  return (
    <section className="about-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 mx-auto">
            {/* Step form */}
            <div className="row">
              <div className="col-12 mb-xl-0 mb-5">
                <form>
                  {/* Circles which indicates the steps of the form: */}
                  <div className="row mb-5">
                    {togglecheckout == 0 && (
                      <div className="col-12">
                        <div className="d-flex justify-content-between text-center w-70 mb-5">
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-address-card" />
                            </div>
                            <p className="mt-4">Address</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-credit-card" />
                            </div>
                            <p className="mt-4">Payment</p>
                          </span>
                          <span className="step">
                            <div className="step-icon">
                              <i className="fas fa-check-square" />
                            </div>
                            <p className="mt-4">Confirm</p>
                          </span>
                        </div>
                        {/* One "tab" for each step in the form: */}
                        {/* ADDRESS TAB  */}
                        <div className="">
                          <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-10">
                              <div className="checkout-form">
                                <h3> ADDRESS</h3>
                                {/* Personal info */}
                                <div className="row mb-4">
                                  <div className="col-12">
                                    <h4>PERSONAL INFORMATION</h4>
                                  </div>
                                  <div className="col mb-4">
                                    <label>Email Address*</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="abs@email.com"
                                      name="email"
                                      value={allValues?.email}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col mb-4">
                                    <label>Phone Number</label>
                                    <InputPhone
                                      unique={true}
                                      uniquevalue={allValues}
                                      name={"phone"}
                                      value={allValues?.phone}
                                      onChange={setAllValues}
                                    />
                                  </div>
                                </div>
                                {/* Billing Address */}
                                <div className="row mb-4">
                                  <div className="col-12 mb-4">
                                    <h4>Billing Address</h4>
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Name*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Name"
                                      name="billingname"
                                      value={allValues?.billingname}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Address*</label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea1"
                                      placeholder="Enter Address"
                                      rows={5}
                                      value={allValues?.billingaddress}
                                      name="billingaddress"
                                      onChange={changeHandler}
                                    />
                                  </div>
                                </div>
                                <div className="row mb-4">
                                  <div className="col-6 mb-4">
                                    <label>City*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter City"
                                      name="billingcity"
                                      value={allValues?.billingcity}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Zip Code*</label>
                                    <InputNumber
                                      unique={true}
                                      uniquevalue={allValues}
                                      name={"billingzipcode"}
                                      onChange={setAllValues}
                                      value={allValues?.billingzipcode}
                                      max={5}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Country*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Country"
                                      value={allValues?.billingcountry}
                                      name="billingcountry"
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <select
                                      className="form-control"
                                      name="billingstate"
                                      onChange={changeHandler}
                                      value={allValues?.billingstate}
                                    >
                                      <option value>select</option>
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
                                {/* Shipping Address */}
                                <div className="row mb-4">
                                  <div className="col-12 mb-4">
                                    <h4>Shipping Address</h4>
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Name*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Name"
                                      name="shippingname"
                                      value={allValues?.shippingname}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Address*</label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea1"
                                      placeholder="Enter Address"
                                      rows={5}
                                      name="shippingaddress"
                                      value={allValues?.shippingaddress}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>City*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter City"
                                      name="shippingcity"
                                      value={allValues?.shippingcity}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Zip Code*</label>
                                    <InputNumber
                                      unique={true}
                                      uniquevalue={allValues}
                                      name={"shippingzipcode"}
                                      onChange={setAllValues}
                                      value={allValues?.shippingzipcode}
                                      max={5}
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Country*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Country"
                                      name="shippingcountry"
                                      onChange={changeHandler}
                                      value={allValues?.shippingcountry}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <select
                                      className="form-control"
                                      name="shippingstate"
                                      onChange={changeHandler}
                                      value={allValues?.shippingstate}
                                    >
                                      <option value>select</option>
                                      <USStates />
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-lg-4 col-md-7 offset-lg-1">
                              <div className="order-summary has-margin">
                                <div className="order-summary-head">
                                  <p>Order Summary</p>
                                </div>
                                <div className="summary-details">
                                  <div className="product-cart-summary">
                                    <div className="row align-items-center justify-content-center">
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
                                            <div className="col-4 mb-3">
                                              <img
                                                src={`${imageURL}${cart?.image[0]}`}
                                                alt=""
                                                className="img-fluid"
                                              />
                                            </div>
                                            <div className="col-8 mb-3">
                                              <td>{cart?.name}</td>
                                              <p>${cart?.price}</p>
                                            </div>
                                          </>
                                        ))}
                                    </div>
                                  </div>

                                  <div className="row justify-content-between align-items-start">
                                    <div className="col-12 border-top border-grey mt-4 pb-4" />
                                    {/* sub total */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">Subtotal</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">
                                        {" "}
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
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">
                                        Tax {taxofstate}%
                                      </p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">
                                        ${cart?.taxPrice}
                                      </p>
                                    </div>
                                    {/* Shipping rates */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">
                                        Shipping rates
                                      </p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">
                                        ${cart?.shippingPrice}
                                      </p>
                                    </div>
                                    <div className="col-12 border-top border-grey mb-2" />
                                    {/* grand total */}
                                    <div className="col-7 mb-3">
                                      <p className="grand-total">Grand Total</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="grand-total-value">
                                        {" "}
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
                      <div>
                        <div className="row">
                          <div className="col-xl-7 col-lg-7 col-md-10">
                            <div className="checkout-form">
                              <h3>SELECT PAYMENT METHOD</h3>
                              <form>
                                <div className="row my-4">
                                  <div className="col-lg-2 col-md-3 col-4">
                                    <div className="payment-method">
                                      <input
                                        type="radio"
                                        id="paypal"
                                        className="input-hidden"
                                        value={allValues?.paymentmethod}
                                        name="paypal"
                                        onChange={(e) => {
                                          changeHandler(
                                            "paypal",
                                            "paymentmethod"
                                          );
                                        }}
                                      />
                                      <label htmlFor="paypal">
                                        <img
                                          src="images/paypal.png"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-2 col-md-3 col-4">
                                    <div className="payment-method">
                                      <input
                                        type="radio"
                                        id="Apple Pay"
                                        className="input-hidden"
                                        name="Apple Pay"
                                        value={allValues?.paymentmethod}
                                        onChange={(e) => {
                                          changeHandler(
                                            "Apple Pay",
                                            "paymentmethod"
                                          );
                                        }}
                                      />
                                      <label htmlFor="Apple Pay">
                                        <img
                                          src="images/applepay.png"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-2 col-md-3 col-4">
                                    <div className="payment-method">
                                      <input
                                        type="radio"
                                        id="visa"
                                        className="input-hidden"
                                        value={allValues?.paymentmethod}
                                        name="visa"
                                        onChange={(e) => {
                                          changeHandler(
                                            "visa",
                                            "paymentmethod"
                                          );
                                        }}
                                      />
                                      <label htmlFor="visa">
                                        <img
                                          src="images/visa.png"
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-12 mt-5">
                                    <h4>Payment</h4>
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Card Holder Name*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Card Holder Name"
                                      name="cardholdername"
                                      value={allValues?.cardholdername}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Card Number*</label>
                                    <input
                                      type="tel"
                                      className="form-control"
                                      inputmode="numeric"
                                      pattern="[0-9\s]{13,19}"
                                      autocomplete="cc-number"
                                      maxlength="19"
                                      placeholder="xxxx xxxx xxxx xxxx"
                                      name="cardnumber"
                                      value={allValues?.cardnumber}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>CVV Number*</label>
                                    <input
                                      type="tel"
                                      className="form-control"
                                      maxlength="11"
                                      placeholder="Enter CVV"
                                      name="cvvnumber"
                                      value={allValues?.cvvnumber}
                                      onChange={changeHandler}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
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
                                      name="expirydate"
                                      value={
                                        new Date(
                                          allValues?.expirydate
                                            ? allValues?.expirydate
                                            : moment().toDate()
                                        )
                                      }
                                      onChange={(e) => {
                                        changeHandler(e, "expirydate");
                                      }}
                                      className="sort-date customdate form-control"
                                    />{" "}
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="col-lg-3 col-lg-4 col-md-7 offset-lg-1">
                            <div className="order-summary has-margin">
                              <div className="order-summary-head">
                                <p>Order Summary</p>
                              </div>
                              <div className="summary-details">
                                <div className="product-cart-summary">
                                  <div className="row align-items-center justify-content-center">
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
                                          <div className="col-4 mb-3">
                                            <img
                                              src={`${imageURL}${cart?.image[0]}`}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-8 mb-3">
                                            <td>{cart?.name}</td>
                                            <p>${cart?.price}</p>
                                          </div>
                                        </>
                                      ))}
                                  </div>
                                </div>

                                <div className="row justify-content-between align-items-start">
                                  <div className="col-12 border-top border-grey mt-4 pb-4" />
                                  {/* sub total */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">Subtotal</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      {" "}
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
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Tax {taxofstate}%
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      ${cart?.taxPrice}
                                    </p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Shipping rates
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      ${cart?.shippingPrice}
                                    </p>
                                  </div>
                                  <div className="col-12 border-top border-grey mb-2" />
                                  {/* grand total */}
                                  <div className="col-7 mb-3">
                                    <p className="grand-total">Grand Total</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="grand-total-value">
                                      {" "}
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
                      <div>
                        <div className="row">
                          <div className="col-xl-7 col-lg-7 col-md-10">
                            <div className="checkout-form">
                              <div className="table-responsive mb-5">
                                <table
                                  className="table table-borderless text-center"
                                  id="cart-table"
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
                                            <div className="cart-product">
                                              <img
                                                src={`${imageURL}${cart?.image[0]}`}
                                                alt=""
                                                className="img-fluid mx-auto"
                                              />
                                            </div>
                                          </td>
                                          <td>{cart?.name}</td>
                                          <td>
                                            <div id="field1">
                                              <div className="quantifier ml-0">
                                                <button
                                                  type="button"
                                                  id="sub"
                                                  className="minus"
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
                                                  <i className="fas fa-minus" />
                                                </button>
                                                <input
                                                  type="number"
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
                                                  className="quantity p-md-2 p-0"
                                                  max={cart?.countInStock}
                                                />
                                                <button
                                                  type="button"
                                                  id="add"
                                                  className="plus"
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
                                                  <i className="fas fa-plus" />
                                                </button>
                                              </div>
                                            </div>
                                          </td>
                                          <td>${cart?.price}</td>
                                          <td>${cart?.qty * cart?.price}</td>
                                          <td>{taxofstate}%</td>
                                          <td>
                                            <button
                                              type="button"
                                              className="btn trash-btn"
                                              onClick={() =>
                                                removeFromCartHandler(
                                                  cart?.product
                                                )
                                              }
                                            >
                                              <i className="far fa-trash-alt" />
                                            </button>
                                          </td>
                                        </tr>
                                      ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-lg-4 col-md-7 offset-lg-1">
                            <div className="order-summary has-margin">
                              <div className="order-summary-head">
                                <p>Order Summary</p>
                              </div>
                              <div className="summary-details">
                                <div className="product-cart-summary">
                                  <div className="row align-items-center justify-content-center">
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
                                          <div className="col-4 mb-3">
                                            <img
                                              src={`${imageURL}${cart?.image[0]}`}
                                              alt=""
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-8 mb-3">
                                            <td>{cart?.name}</td>
                                            <p>${cart?.price}</p>
                                          </div>
                                        </>
                                      ))}
                                  </div>
                                </div>

                                <div className="row justify-content-between align-items-start">
                                  <div className="col-12 border-top border-grey mt-4 pb-4" />
                                  {/* sub total */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">Subtotal</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      {" "}
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
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Tax {taxofstate}%
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      ${cart?.taxPrice}
                                    </p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Shipping rates
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      ${cart?.shippingPrice}
                                    </p>
                                  </div>
                                  <div className="col-12 border-top border-grey mb-2" />
                                  {/* grand total */}
                                  <div className="col-7 mb-3">
                                    <p className="grand-total">Grand Total</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="grand-total-value">
                                      {" "}
                                      ${cart?.totalPrice.toFixed(0)}
                                    </p>
                                  </div>
                                </div>
                                <div className="row mt-4">
                                  <div className="col-12 text-center">
                                    <Link
                                      to="#"
                                      className="btn red-btn-solid mt-lg-4 mt-3 mx-auto py-2 px-4 text-capitalize"
                                      data-toggle="modal"
                                      data-target="#confirmOrder"
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
                        type="button"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        onClick={() => {
                          togglecheckout == 0 &&
                          allValues?.email &&
                          allValues?.phone &&
                          allValues?.billingname &&
                          allValues?.billingaddress &&
                          allValues?.billingcity &&
                          allValues?.billingzipcode &&
                          allValues?.billingcountry &&
                          allValues?.billingstate &&
                          allValues?.shippingname &&
                          allValues?.shippingaddress &&
                          allValues?.shippingcity &&
                          allValues?.shippingzipcode &&
                          allValues?.shippingcountry &&
                          allValues?.shippingstate
                            ? saveShippingHandler()
                            : togglecheckout == 1 &&
                              allValues?.paymentmethod &&
                              allValues?.cardholdername &&
                              allValues?.cardnumber &&
                              allValues?.cvvnumber
                            ? savePaymentMethodHandler()
                            : togglecheckout == 2
                            ? togglecheckoutHandler()
                            : Toasty(
                                "error",
                                `Please fill out all the required fields`
                              );
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
          <div className="row mt-5">
            <div className="col-12 text-center">
              <div className="about-bottom-banner">
                <h3>
                  All Herbs Are Organic Alkaline and Are Naturally Wildcrafted
                  from the Land of their Origin
                </h3>
                <p>
                  All herbs used in our products are 100% naturally organic and
                  are selectively picked and tested by a laboratory before use.
                  Each herbal compound is personally prepared with gratification
                  for the purpose of restoring health to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

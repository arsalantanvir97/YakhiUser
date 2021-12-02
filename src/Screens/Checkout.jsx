import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMethod,
} from "../actions/cartAction";
import { createOrder } from "../actions/orderAction";
import DatePicker from "react-datepicker";
import { imageURL } from "../utils/api";

const Checkout = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, cartItems, paymentInfo } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const [email, setemail] = useState(shippingAddress?.email);
  const [phone, setphone] = useState(shippingAddress?.phone);
  const [billingname, setbillingname] = useState(shippingAddress?.billingname);
  const [billingaddress, setbillingaddress] = useState(
    shippingAddress?.billingaddress
  );

  //    const [FormDat, setFormDat] = useState({

  //     billingcity: "",
  //     billingcity1: ""
  //     billingcity2: ""
  //     billingcity3: ""
  //     billingcity4: ""
  //     billingcity5: ""
  //     billingcity6: ""
  //     billingcity7: ""

  //    })

  // onchange = (e)=>{
  //   setFormData({...FormData,[e.target.name]:"e.target.value"})
  // }

  const [billingcity, setbillingcity] = useState(shippingAddress?.billingcity);
  const [billingzipcode, setbillingzipcode] = useState(
    shippingAddress?.billingzipcode
  );
  const [billingcountry, setbillingcountry] = useState(
    shippingAddress?.billingcountry
  );
  const [billingstate, setbillingstate] = useState(
    shippingAddress?.billingstate
  );
  const [shippingname, setshippingname] = useState(
    shippingAddress?.shippingname
  );
  const [shippingaddress, setshippingaddress] = useState(
    shippingAddress?.shippingaddress
  );
  const [shippingcity, setshippingcity] = useState(
    shippingAddress?.shippingcity
  );
  const [shippingzipcode, setshippingzipcode] = useState(
    shippingAddress?.shippingzipcode
  );
  const [shippingcountry, setshippingcountry] = useState(
    shippingAddress?.shippingcountry
  );
  const [shippingstate, setshippingstate] = useState(
    shippingAddress?.shippingstate
  );
  const [paymentmethod, setpaymentmethod] = useState();

  const [cardholdername, setcardholdername] = useState(
    shippingAddress?.cardholdername
  );
  const [cardnumber, setcardnumber] = useState();
  const [cvvnumber, setcvvnumber] = useState();
  const [expirydate, setexpirydate] = useState();

  const [togglecheckout, settogglecheckout] = useState(0);

  const togglecheckoutHandler = async () => {
    console.log("togglecheckoutHandler");
    settogglecheckout(togglecheckout + 1);
  };
  const saveShippingHandler = (e) => {
    console.log("saveShippingHandler");
    settogglecheckout(togglecheckout + 1);
    dispatch(
      saveShippingAddress({
        email,
        phone,
        billingname,
        billingaddress,
        billingcity,
        billingzipcode,
        billingcountry,
        billingstate,
        shippingname,
        shippingaddress,
        shippingcity,
        shippingzipcode,
        shippingcountry,
        shippingstate,
      })
    );
  };
  const savePaymentMethodHandler = (e) => {
    console.log("savePaymentMethodHandler");
    settogglecheckout(togglecheckout + 1);
    dispatch(
      savePaymentMethod({
        paymentmethod,
        cardholdername,
        cardnumber,
        cvvnumber,
        expirydate,
      })
    );
  };
  const removeFromCartHandler = (id) => {
    console.log("removeFromCartHandler", removeFromCartHandler);
    dispatch(removeFromCart(id));
  };
  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  cart.shippingPrice = Number(cart.itemsPrice);
  cart.taxPrice = Number(cart.itemsPrice);
  cart.totalPrice = Number(cart.itemsPrice).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      Swal.fire({
        icon: "success",
        title: "",
        text: "Order Completed Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push(`/OrderLogDetail/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = async () => {
    dispatch(
      createOrder({
        userid: userInfo?._id,
        orderItems: cart?.cartItems,
        shippingAddress: cart?.shippingAddress,
        paymentMethod: cart?.paymentInfo,
        itemsPrice: cart?.itemsPrice,
        shippingPrice: cart?.shippingPrice,
        taxPrice: cart?.taxPrice,
        totalPrice: cart?.totalPrice,
      })
    );
  };
  return (
    <section className="about-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-11 mx-auto">
            {/* Step form */}
            <div className="row">
              <div className="col-12 mb-xl-0 mb-5">
                <form >
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
                                      value={email}
                                      onChange={(e) => {
                                        setemail(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col mb-4">
                                    <label>Phone Number</label>
                                    <input
                                      type="tel"
                                      className="form-control"
                                      placeholder="Enter Phone Number"
                                      value={phone}
                                      onChange={(e) => {
                                        setphone(e.target.value);
                                      }}
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
                                      value={billingname}
                                      onChange={(e) => {
                                        setbillingname(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Address*</label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea1"
                                      placeholder="Enter Address"
                                      rows={5}
                                      value={billingaddress}
                                      onChange={(e) => {
                                        setbillingaddress(e.target.value);
                                      }}
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
                                      value={billingcity}
                                      onChange={(e) => {
                                        setbillingcity(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Zip Code*</label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter Zip Code"
                                      value={billingzipcode}
                                      onChange={(e) => {
                                        setbillingzipcode(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Country*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Country"
                                      value={billingcountry}
                                      onChange={(e) => {
                                        setbillingcountry(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter State"
                                      value={billingstate}
                                      onChange={(e) => {
                                        setbillingstate(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-12">
                                    <div className="ship-to-different">
                                      <div className="checkbox-group">
                                        <input type="checkbox" id="html" />
                                        <label htmlFor="html">
                                          Ship To A Different Location{" "}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
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
                                      value={shippingname}
                                      onChange={(e) => {
                                        setshippingname(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-12 mb-4">
                                    <label>Address*</label>
                                    <textarea
                                      className="form-control"
                                      id="exampleFormControlTextarea1"
                                      placeholder="Enter Address"
                                      rows={5}
                                      value={shippingaddress}
                                      onChange={(e) => {
                                        setshippingaddress(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>City*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter City"
                                      value={shippingcity}
                                      onChange={(e) => {
                                        setshippingcity(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Zip Code*</label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter Zip Code"
                                      value={shippingzipcode}
                                      onChange={(e) => {
                                        setshippingzipcode(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Country*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter Country"
                                      value={shippingcountry}
                                      onChange={(e) => {
                                        setshippingcountry(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Enter State"
                                      value={shippingstate}
                                      onChange={(e) => {
                                        setshippingstate(e.target.value);
                                      }}
                                    />
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
                                                src={`${imageURL}${cart?.image}`}
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
                                      <p className="summary-title">Tax 0%</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$0</p>
                                    </div>
                                    {/* Shipping rates */}
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">
                                        Shipping rates
                                      </p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">$0</p>
                                    </div>
                                    <div className="col-12 border-top border-grey mb-2" />
                                    {/* grand total */}
                                    <div className="col-7 mb-3">
                                      <p className="grand-total">Grand Total</p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="grand-total-value">
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
                              <h3>CHOOSE PAYMENT METHOD</h3>
                              <form>
                                <div className="row my-4">
                                  <div className="col-lg-2 col-md-3 col-4">
                                    <div className="payment-method">
                                      <input
                                        type="radio"
                                        name="emotion"
                                        id="paypal"
                                        className="input-hidden"
                                        value={paymentmethod}
                                        onChange={() => {
                                          setpaymentmethod("paypal");
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
                                        name="emotion"
                                        id="apple"
                                        className="input-hidden"
                                        value={paymentmethod}
                                        onChange={() => {
                                          setpaymentmethod("apple");
                                        }}
                                      />
                                      <label htmlFor="apple">
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
                                        name="emotion"
                                        id="visa"
                                        className="input-hidden"
                                        value={paymentmethod}
                                        onChange={() => {
                                          setpaymentmethod("visa");
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
                                      value={cardholdername}
                                      onChange={(e) => {
                                        setcardholdername(e.target.value);
                                      }}
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
                                      value={cardnumber}
                                      onChange={(e) => {
                                        setcardnumber(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>CVV Number*</label>
                                    <input
                                      type="number"
                                      className="form-control"
                                      placeholder="Enter CVV"
                                      value={cvvnumber}
                                      onChange={(e) => {
                                        setcvvnumber(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Expiry date*</label>

                                    <input
                                      type="date"
                                      className="form-control"
                                      placeholder="Enter Expiry Date"
                                      value={expirydate}
                                      onChange={(e) => {
                                        setexpirydate(e.target.value);
                                      }}
                                    />
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
                                              src={`${imageURL}${cart?.image}`}
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
                                    <p className="summary-title">Tax 0%</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$0</p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Shipping rates
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$0</p>
                                  </div>
                                  <div className="col-12 border-top border-grey mb-2" />
                                  {/* grand total */}
                                  <div className="col-7 mb-3">
                                    <p className="grand-total">Grand Total</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="grand-total-value">
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
                                                src={`${imageURL}${cart?.image}`}
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
                                                    dispatch(
                                                      addToCart(
                                                        cart?.product,
                                                        Number(cart?.qty-1)
                                                      )
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
                                                        Number(cart?.qty+1)
                                                      )
                                                    )
                                                  }
                                                >
                                                  <i className="fas fa-plus" />
                                                </button>
                                              </div>
                                            </div>
                                          </td>
                                          <td>£{cart?.price}</td>
                                          <td>£{cart?.qty * cart?.price}</td>
                                          <td>£{cart?.price}</td>
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
                                              src={`${imageURL}${cart?.image}`}
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
                                    <p className="summary-title">Tax 0%</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$0</p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Shipping rates
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">$0</p>
                                  </div>
                                  <div className="col-12 border-top border-grey mb-2" />
                                  {/* grand total */}
                                  <div className="col-7 mb-3">
                                    <p className="grand-total">Grand Total</p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="grand-total-value">
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
                              <div className="ship-to-different mt-4 text-center">
                                <div className="checkbox-group">
                                  <input type="checkbox" id="html" />
                                  <label htmlFor="html">
                                    I Agree To The Terms And Conditions{" "}
                                  </label>
                                </div>
                              </div>
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
                          togglecheckout == 0
                            ? saveShippingHandler()
                            : togglecheckout == 1
                            ? savePaymentMethodHandler()
                            : togglecheckoutHandler();
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { saveShippingAddress, savePaymentMethod } from "../actions/cartAction";
import { createGeoGeneticsOrder } from "../actions/orderAction";
import DatePicker from "react-datepicker";
import { baseURL, imageURL } from "../utils/api";
import Toasty from "../utils/toast";
import InputNumber from "../components/InputNumber";
import InputPhone from "../components/InputPhone";
import { validateEmail } from "../utils/ValidateEmail";
import axios from "axios";
import moment from "moment";

const GeoGeneticsCheckout = ({ history, location, match }) => {
  const [totalPrice, settotalPrice] = useState(0);
  const [quantity, setquantity] = useState(location?.search ? Number(location?.search?.split("=")[1]) : 1);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentInfo } = cart;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getProductDetails/${match?.params?.id}`,
        method: "GET"
      });
      // const ress = await axios({
      //   url: `${baseURL}/product/getProductDetailsByName/${match?.params?.id}`,
      //   method: "GET"
      // });

      console.log("res", res?.data?.product);
      setproduct(res?.data?.product);
      settotalPrice(Number(res?.data?.product?.price * quantity));
    } catch (err) {
      console.log(err);
    }
  };

  const [taxofstate, settaxofstate] = useState(0);
  const [product, setproduct] = useState();

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
  useEffect(() => {
    console.log("email", email);
  }, [email]);

 
  const [doc_schedule, setdoc_schedule] = useState("");

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
  const [taxPrice, settaxPrice] = useState(0);
  const [shippingPrice, setshippingPrice] = useState(0);

  const togglecheckoutHandler = async () => {
    console.log("togglecheckoutHandler");
    settogglecheckout(togglecheckout + 1);
  };
  const saveShippingHandler = async (e) => {
    const emailvalidation = validateEmail(email);
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
        { state: shippingstate },
        config
      );

      console.log("ress", res);
      if (res?.data?.tax == null) {
        settaxofstate(0);
      } else {
        settaxofstate(res?.data?.tax?.percent);
      }

      setshippingPrice(0);
      settaxPrice(
        Number(res?.data?.tax == null ? 0 : res?.data?.tax?.percent / 100) *
          Number(product?.price * quantity)
      );
      settotalPrice(Number(product?.price * quantity) + Number(taxPrice));
      dispatch(
        saveShippingAddress({
          email,
          phone,
          doc_schedule: doc_schedule?.name,
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
          shippingstate
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
        paymentmethod,
        cardholdername,
        cardnumber,
        cvvnumber,
        expirydate
      })
    );
  };

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
    if(quantity==0){
      Toasty(
        "error",
        `Quantity must be greater than 0`
      );
    }else{
      const orderItems=[{...product,product:product?._id,qty:quantity,image:product?.productimage}]
      const totalpricee=Number(product?.price * quantity) + Number(taxPrice)
      const formData = new FormData();

      formData.append("doc_schedule", doc_schedule);
      formData.append("orderItems", JSON.stringify(orderItems));

      formData.append("userid", userInfo?._id);
      formData.append("shippingAddress", JSON.stringify(cart?.shippingAddress));
      formData.append("paymentMethod", JSON.stringify(paymentInfo));
      formData.append(
        "itemsPrice",
        product?.price
      );
      formData.append("shippingPrice", shippingPrice);
      formData.append("taxPrice", taxPrice);
      formData.append("totalPrice", totalpricee);
      formData.append("taxperproduct", taxofstate);

      const body = formData;
    dispatch(
    
      createGeoGeneticsOrder(body)
    )}
  };
  const subQuantity = async () => {
    console.log("cart?.product", quantity);
    quantity == 0 || quantity <= 0 ? setquantity(Number(quantity + 0)) : setquantity(Number(quantity - 1));
  };
  
  const filedocsHandler = (e) => {
    console.log("eeee", e?.target?.files[0]);
    setdoc_schedule(e?.target?.files[0]);
  };
   useEffect(()=>{
    settaxPrice(
      Number(taxofstate / 100) *
        Number(product?.price * quantity)
    );
    settotalPrice(Number(product?.price * quantity) + Number(taxPrice));
  },[quantity])
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
                                      value={email}
                                      onChange={(e) => {
                                        setemail(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col mb-4">
                                    <label>Phone Number</label>
                                    <InputPhone
                                      value={phone}
                                      onChange={setphone}
                                    />
                                  </div>
                                </div>

                                <div className="row mb-4">
                                  <div className="col mb-4">
                                    <label>
                                      Upload Valid Government Issued ID*
                                    </label>
                                    <input
                                      type="file"
                                      name
                                      id="govt-id"
                                      accept="application/pdf,application/vnd.ms-excel"
                                      onChange={filedocsHandler}
                                      className="form-control"
                                    />
                                    <label
                                      htmlFor="govt-id"
                                      className="d-block id-upload"
                                    >
                                      {doc_schedule?.name ? (
                                        <i className="fas fa-file-upload fa-2x" />
                                      ) : (
                                        <i className="fas fa-upload fa-2x" />
                                      )}
                                    </label>
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
                                    <InputNumber
                                      value={billingzipcode}
                                      onChange={setbillingzipcode}
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
                                      value={billingcountry}
                                      onChange={(e) => {
                                        setbillingcountry(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <select
                                      name
                                      className="form-control"
                                      value={billingstate}
                                      onChange={(e) => {
                                        setbillingstate(e.target.value);
                                      }}
                                    >
                                      <option value>select</option>
                                      <option value={"Alabama"}>Alabama</option>
                                      <option value={"Alaska"}>Alaska</option>
                                      <option value={"Arizona"}>Arizona</option>
                                      <option value={"Arkansas"}>
                                        Arkansas
                                      </option>
                                      <option value={"California"}>
                                        California
                                      </option>
                                      <option value={"Colorado"}>
                                        Colorado
                                      </option>
                                      <option value={"Connecticut"}>
                                        Connecticut
                                      </option>
                                      <option value={"Delaware"}>
                                        Delaware
                                      </option>
                                      <option value={"Florida"}>Florida</option>
                                      <option value={"Georgia"}>Georgia</option>
                                      <option value={"Hawaii"}>Hawaii</option>
                                      <option value={"Idaho"}>Idaho</option>
                                      <option value={"IllinoisIndiana"}>
                                        IllinoisIndiana
                                      </option>
                                      <option value={"Iowa"}>Iowa</option>
                                      <option value={"Kansas"}>Kansas</option>
                                      <option value={"Kentucky"}>
                                        Kentucky
                                      </option>
                                      <option value={"Louisiana"}>
                                        Louisiana
                                      </option>
                                      <option value={"Maine"}>Maine</option>
                                      <option value={"Maryland"}>
                                        Maryland
                                      </option>
                                      <option value={"Massachusetts"}>
                                        Massachusetts
                                      </option>
                                      <option value={"Michigan"}>
                                        Michigan
                                      </option>
                                      <option value={"Minnesota"}>
                                        Minnesota
                                      </option>
                                      <option value={"Mississippi"}>
                                        Mississippi
                                      </option>
                                      <option value={"Missouri"}>
                                        Missouri
                                      </option>
                                      <option value={"MontanaNebraska"}>
                                        MontanaNebraska
                                      </option>
                                      <option value={"New Hampshire"}>
                                        New Hampshire
                                      </option>
                                      <option value={"New Jersey"}>
                                        New Jersey
                                      </option>
                                      <option value={"New Mexico"}>
                                        New Mexico
                                      </option>
                                      <option value={"New York"}>
                                        New York
                                      </option>
                                      <option value={"North Carolina"}>
                                        North Carolina
                                      </option>
                                      <option value={"North Dakota"}>
                                        North Dakota
                                      </option>
                                      <option value={"Ohio"}>Ohio</option>
                                      <option value={"Oklahoma"}>
                                        Oklahoma
                                      </option>
                                      <option value={"Oregon"}>Oregon</option>
                                      <option
                                        value={"PennsylvaniaRhode Island"}
                                      >
                                        PennsylvaniaRhode Island
                                      </option>
                                      <option value={"South Carolina"}>
                                        South Carolina
                                      </option>
                                      <option value={"South Dakota"}>
                                        South Dakota
                                      </option>
                                      <option value={"Tennessee"}>
                                        Tennessee
                                      </option>
                                      <option value={"Texas"}>Texas</option>
                                      <option value={"Utah"}>Utah</option>
                                      <option value={"Vermont"}>Vermont</option>
                                      <option value={"Virginia"}>
                                        Virginia
                                      </option>
                                      <option value={"Washington"}>
                                        Washington
                                      </option>
                                      <option value={"West Virginia"}>
                                        West Virginia
                                      </option>
                                      <option value={"Wisconsin"}>
                                        Wisconsin
                                      </option>
                                      <option value={"Wyoming"}>Wyoming</option>
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
                                    <InputNumber
                                      value={shippingzipcode}
                                      onChange={setshippingzipcode}
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
                                      value={shippingcountry}
                                      onChange={(e) => {
                                        setshippingcountry(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>State*</label>
                                    <select
                                      name
                                      className="form-control"
                                      value={shippingstate}
                                      onChange={(e) => {
                                        setshippingstate(e.target.value);
                                      }}
                                    >
                                      <option value>select</option>
                                      <option value={"Alabama"}>Alabama</option>
                                      <option value={"Alaska"}>Alaska</option>
                                      <option value={"Arizona"}>Arizona</option>
                                      <option value={"Arkansas"}>
                                        Arkansas
                                      </option>
                                      <option value={"California"}>
                                        California
                                      </option>
                                      <option value={"Colorado"}>
                                        Colorado
                                      </option>
                                      <option value={"Connecticut"}>
                                        Connecticut
                                      </option>
                                      <option value={"Delaware"}>
                                        Delaware
                                      </option>
                                      <option value={"Florida"}>Florida</option>
                                      <option value={"Georgia"}>Georgia</option>
                                      <option value={"Hawaii"}>Hawaii</option>
                                      <option value={"Idaho"}>Idaho</option>
                                      <option value={"IllinoisIndiana"}>
                                        IllinoisIndiana
                                      </option>
                                      <option value={"Iowa"}>Iowa</option>
                                      <option value={"Kansas"}>Kansas</option>
                                      <option value={"Kentucky"}>
                                        Kentucky
                                      </option>
                                      <option value={"Louisiana"}>
                                        Louisiana
                                      </option>
                                      <option value={"Maine"}>Maine</option>
                                      <option value={"Maryland"}>
                                        Maryland
                                      </option>
                                      <option value={"Massachusetts"}>
                                        Massachusetts
                                      </option>
                                      <option value={"Michigan"}>
                                        Michigan
                                      </option>
                                      <option value={"Minnesota"}>
                                        Minnesota
                                      </option>
                                      <option value={"Mississippi"}>
                                        Mississippi
                                      </option>
                                      <option value={"Missouri"}>
                                        Missouri
                                      </option>
                                      <option value={"MontanaNebraska"}>
                                        MontanaNebraska
                                      </option>
                                      <option value={"New Hampshire"}>
                                        New Hampshire
                                      </option>
                                      <option value={"New Jersey"}>
                                        New Jersey
                                      </option>
                                      <option value={"New Mexico"}>
                                        New Mexico
                                      </option>
                                      <option value={"New York"}>
                                        New York
                                      </option>
                                      <option value={"North Carolina"}>
                                        North Carolina
                                      </option>
                                      <option value={"North Dakota"}>
                                        North Dakota
                                      </option>
                                      <option value={"Ohio"}>Ohio</option>
                                      <option value={"Oklahoma"}>
                                        Oklahoma
                                      </option>
                                      <option value={"Oregon"}>Oregon</option>
                                      <option
                                        value={"PennsylvaniaRhode Island"}
                                      >
                                        PennsylvaniaRhode Island
                                      </option>
                                      <option value={"South Carolina"}>
                                        South Carolina
                                      </option>
                                      <option value={"South Dakota"}>
                                        South Dakota
                                      </option>
                                      <option value={"Tennessee"}>
                                        Tennessee
                                      </option>
                                      <option value={"Texas"}>Texas</option>
                                      <option value={"Utah"}>Utah</option>
                                      <option value={"Vermont"}>Vermont</option>
                                      <option value={"Virginia"}>
                                        Virginia
                                      </option>
                                      <option value={"Washington"}>
                                        Washington
                                      </option>
                                      <option value={"West Virginia"}>
                                        West Virginia
                                      </option>
                                      <option value={"Wisconsin"}>
                                        Wisconsin
                                      </option>
                                      <option value={"Wyoming"}>Wyoming</option>
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

                                      <>
                                        <div className="col-4 mb-3">
                                          <img
                                            src={`${imageURL}${product?.productimage[0]}`}
                                            alt=""
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div className="col-8 mb-3">
                                          <td>{product?.name}</td>
                                          <p>${product?.price}</p>
                                        </div>
                                      </>
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
                                    <div className="col-7 mb-3">
                                      <p className="summary-title">
                                        Tax {taxofstate}%
                                      </p>
                                    </div>
                                    <div className="col-5 mb-3 text-right">
                                      <p className="summary-value">
                                       To be Counted
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
                                        ${shippingPrice}
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
                                        id="Apple Pay"
                                        className="input-hidden"
                                        value={paymentmethod}
                                        onChange={() => {
                                          setpaymentmethod("Apple Pay");
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
                                      type="tel"
                                      className="form-control"
                                      maxlength="11"
                                      placeholder="Enter CVV"
                                      value={cvvnumber}
                                      onChange={(e) => {
                                        setcvvnumber(e.target.value);
                                      }}
                                    />
                                  </div>
                                  <div className="col-6 mb-4">
                                    <label>Expiry date*</label>
                                    <DatePicker
                                      minDate={moment().toDate()}
                                      selected={expirydate}
                                      onChange={(e) => setexpirydate(e)}
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

                                    <>
                                      <div className="col-4 mb-3">
                                        <img
                                          src={`${imageURL}${product?.productimage[0]}`}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div className="col-8 mb-3">
                                        <td>{product?.name}</td>
                                        <p>${product?.price}</p>
                                      </div>
                                    </>
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
                                      ${product?.price * quantity}
                                    </p>
                                  </div>
                                  {/* tax */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Tax {taxofstate}%
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">${taxPrice}</p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Shipping rates
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      ${shippingPrice}
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
                                      $
                                      {product?.price * quantity + taxPrice }
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
                                    <tr>
                                      <td>
                                        <div className="cart-product">
                                          <img
                                            src={`${imageURL}${product?.productimage[0]}`}
                                            alt=""
                                            className="img-fluid mx-auto"
                                          />
                                        </div>
                                      </td>
                                      <td>{product?.name}</td>
                                      <td>
                                        <div id="field1">
                                          <div className="quantifier ml-0">
                                            <button
                                              type="button"
                                              id="sub"
                                              className="minus"
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
                                              <i className="fas fa-minus" />
                                            </button>
                                            <input
                                              type="number"
                                              id={1}
                                              defaultValue={1}
                                              min={1}
                                              value={quantity}
                                              className="quantity p-md-2 p-0"
                                              max={product?.countInStock}
                                            />
                                            <button
                                              type="button"
                                              id="add"
                                              className="plus"
                                              value={quantity}
                                              onClick={() =>setquantity(Number(quantity+1)) }
                                            >
                                              <i className="fas fa-plus" />
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

                                    <>
                                      <div className="col-4 mb-3">
                                        <img
                                          src={`${imageURL}${product?.productimage[0]}`}
                                          alt=""
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div className="col-8 mb-3">
                                        <td>{product?.name}</td>
                                        <p>${product?.price}</p>
                                      </div>
                                    </>
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
                                      ${product?.price * quantity}
                                    </p>
                                  </div>
                                  {/* tax */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Tax {taxofstate}%
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">${taxPrice}</p>
                                  </div>
                                  {/* Shipping rates */}
                                  <div className="col-7 mb-3">
                                    <p className="summary-title">
                                      Shipping rates
                                    </p>
                                  </div>
                                  <div className="col-5 mb-3 text-right">
                                    <p className="summary-value">
                                      ${shippingPrice}
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
                                      ${Number(product?.price * quantity) + taxPrice}
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
                  {togglecheckout == 2 ? null : (
                    <div>
                      <button
                        type="button"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        onClick={() => {
                          togglecheckout == 0 &&
                          email &&
                          doc_schedule?.name?.length > 0 &&
                          phone &&
                          billingname &&
                          billingaddress &&
                          billingcity &&
                          billingzipcode &&
                          billingcountry &&
                          billingstate &&
                          shippingname &&
                          shippingaddress &&
                          shippingcity &&
                          shippingzipcode &&
                          shippingcountry &&
                          shippingstate
                            ? saveShippingHandler()
                            : togglecheckout == 1 &&
                              paymentmethod &&
                              cardholdername &&
                              cardnumber &&
                              cvvnumber
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

export default GeoGeneticsCheckout;

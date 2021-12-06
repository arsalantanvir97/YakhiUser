import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { payOrder } from "../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";

const OrderLogDetail = ({ match, history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [orderdetaills, setorderdetaills] = useState();
  useEffect(() => {
    getSingleOrder();
  }, []);

  const getSingleOrder = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/order/getOrderById/${match?.params?.id}`,
        method: "GET",
      });
      console.log("res", res);
      setorderdetaills(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  async function handleToken(token) {
    console.log("handleToken");
    let product = Number(orderdetaills?.totalPrice);
    console.log("product", product);
    const config = {
      header: {
        Authorization: "Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V",
      },
    };
    const response = await axios.post(`${baseURL}/checkout`, { token, product }, config);
    console.log('response',response);
    const { status } = response.data;
    console.log(
      "res",
      response.data.id,
      response.data.status,
      response.headers.date,
      response.data.receipt_email
    );
    const abc = {
      id: response.data.id,
      status: response.data.status,
      update_time: response.headers.date,
      email_address: response.data.receipt_email,
    };
    console.log("Response:", response, response.data, "abc", abc);
    if (status === "succeeded") {
      console.log("kir", abc);
      await dispatch(payOrder(match?.params?.id, abc));
      history.push("/Home");
      console.log(status, "succes");
    } else {
      console.log(status, "fail");
    }
  }
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-11 mx-auto">
          <section className="my-cart">
            <div className="row mb-5">
              <div className="col-12 my-4">
                <h2>Order Log</h2>
              </div>
              <div className="col-12 text-right">
                <p>
                  Status <span className="stat-pending ml-2">{orderdetaills?.status}</span>
                </p>
              </div>
              {/* ORDER DETAILS */}
              <div className="col-xl-8 col-lg-10 col-12 mt-5 mt-md-0">
                <div className="order-details">
                  <h3>ORDER DETAILS</h3>
                  <div className="row align-items-start justify-content-between mt-4">
                    <div className="col-lg-6 col-12">
                      <div className="row align-items-center">
                        <div className="col-6 mb-3">
                          <p>Name</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>{orderdetaills?.user?.firstName}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>Email Address</p>
                        </div>
                        <div className="col-6 mb-3">
                          {orderdetaills?.shippingAddress?.email}
                        </div>
                        <div className="col-6 mb-3">
                          <p>Date</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>
                            {" "}
                            {moment.utc(orderdetaills?.createdAt).format("LL")}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>Phone Number</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>+ {orderdetaills?.shippingAddress?.phone}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="row align-items-center">
                        <div className="col-6 mb-3">
                          <p>ORDER ID</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>{orderdetaills?._id}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>Payment Method</p>
                        </div>
                        <div className="col-6 mb-3">
                          <p>{orderdetaills?.paymentMethod?.paymentmethod}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-start justify-content-between mt-5">
                    <div className="col-lg-6 col-12 mt-3">
                      <h3 className="mb-3">Billing Address</h3>
                      <p className="adrs">
                        Street:{" "}
                        {orderdetaills?.shippingAddress?.shippingaddress}
                      </p>
                      <p className="adrs">
                        City: {orderdetaills?.shippingAddress?.shippingcity}
                      </p>
                      <p className="adrs">
                        Country:{" "}
                        {orderdetaills?.shippingAddress?.shippingcountry}
                      </p>
                      <p className="adrs">
                        State: {orderdetaills?.shippingAddress?.shippingstate}
                      </p>
                      <p className="adrs">
                        Zipcode:{" "}
                        {orderdetaills?.shippingAddress?.shippingzipcode}
                      </p>
                    </div>
                    <div className="col-lg-6 col-12 mt-3">
                      <h3 className="mb-3">SHIPPING Address</h3>
                      <p className="adrs">
                        Street: {orderdetaills?.shippingAddress?.billingaddress}
                      </p>
                      <p className="adrs">
                        City: {orderdetaills?.shippingAddress?.billingcity}
                      </p>
                      <p className="adrs">
                        Country:{" "}
                        {orderdetaills?.shippingAddress?.billingcountry}
                      </p>
                      <p className="adrs">
                        State: {orderdetaills?.shippingAddress?.billingstate}
                      </p>
                      <p className="adrs">
                        Zipcode:{" "}
                        {orderdetaills?.shippingAddress?.billingzipcode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-start">
              <div className="col-xl-9 col-md-12">
                {/* cart table */}
                <div className="table-responsive">
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
                      {orderdetaills?.orderItems?.length > 0 &&
                        orderdetaills?.orderItems?.map((ord) => (
                          <tr>
                            <td>
                              <div className="cart-product">
                                <img
                                  src={`${imageURL}${ord?.image}`}
                                  alt=""
                                  className="img-fluid mx-auto"
                                />
                              </div>
                            </td>
                            <td>{ord?.name}</td>
                            <td>
                              <td>{ord?.qty}</td>
                            </td>
                            <td>${ord?.price}</td>
                            <td>${ord?.qty * ord?.price}</td>
                            <td>$0</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-lg-0 mt-5">
                <div className="order-summary">
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

                        {orderdetaills?.orderItems?.length > 0 &&
                          orderdetaills?.orderItems?.map((ord) => (
                            <>
                              <div className="col-4 mb-3">
                                <img
                                  src={`${imageURL}${ord?.image}`}
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-8 mb-3">
                                <h4> {ord?.name}</h4>
                                <p>${ord?.price}</p>
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
                        ${orderdetaills?.totalPrice}
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
                        <p className="summary-title">Shipping rates</p>
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
                        ${orderdetaills?.totalPrice}
                        </p>
                      </div>
                      {orderdetaills?.status== 'Paid' ||orderdetaills?.status== 'Refunded' ||orderdetaills?.status== 'Delivered' ? null :
                      <div className="col-12 text-center mt-4">
                        <StripeCheckout
                          stripeKey="pk_test_IdCqGO7sona7aWZqqiXTs3MN00vl1vkEQa"
                          token={handleToken}
                          amount={orderdetaills?.totalPrice * 100}
                          email={userInfo?.email}
                        ></StripeCheckout>
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default OrderLogDetail;

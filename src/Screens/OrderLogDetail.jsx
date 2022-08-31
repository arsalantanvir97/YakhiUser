import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import { payOrder, resetOrder } from "../actions/orderAction";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import { SunspotLoader } from "react-awesome-loaders";
import { PayPalButton } from "react-paypal-button-v2";
import {
  SquarePaymentsForm,
  CreditCardInput
} from "react-square-web-payments-sdk";

const OrderLogDetail = ({ match, history }) => {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [orderdetaills, setorderdetaills] = useState();
  useEffect(() => {
    getSingleOrder();
    dispatch(resetOrder());
  }, []);

  const getSingleOrder = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/order/getOrderById/${match?.params?.id}`,
        method: "GET"
      });
      console.log("res", res);
      setorderdetaills(res?.data);
    } catch (err) {
      console.log(err);
    }
  };
  async function handleToken(token) {
    setloading(true);

    console.log("handleToken");
    let product = Number(orderdetaills?.totalPrice);
    console.log("product", product);
    const config = {
      header: {
        Authorization: "Bearer sk_test_OVw01bpmRN2wBK2ggwaPwC5500SKtEYy9V"
      }
    };
    const response = await axios.post(
      `${baseURL}/checkout`,
      { token, product },
      config
    );
    console.log("response", response);
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
      email_address: response.data.receipt_email
    };
    console.log("Response:", response, response.data, "abc", abc);
    if (status === "succeeded") {
      setloading(false);

      console.log("kir", abc);
      await dispatch(payOrder(match?.params?.id, abc));
      history.push("/");
      console.log(status, "succes");
    } else {
      console.log(status, "fail");
      setloading(false);
    }
  }
  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-30%, -60%)",
            zIndex: 1111111111111
          }}
        >
          <SunspotLoader
            gradientColors={["#000"]}
            shadowColor={"#FFF"}
            desktopSize={"50px"}
            mobileSize={"35px"}
          />
        </div>
      )}
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
                    Status{" "}
                    <span className="stat-pending ml-2">
                      {orderdetaills?.status}
                    </span>
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
                              {moment
                                .utc(orderdetaills?.createdAt)
                                .format("LL")}
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
                            <p>Delivery Status</p>
                          </div>
                          <div className="col-6 mb-3">
                            <p>{orderdetaills?.isDelivered}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <p>Payment Method</p>
                          </div>
                          <div className="col-6 mb-3">
                            <p>
                              {orderdetaills?.isPaid
                                ? orderdetaills?.paymentMethod?.paymentmethod
                                : "Not paid"}
                            </p>
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
                          Street:{" "}
                          {orderdetaills?.shippingAddress?.billingaddress}
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
                                    src={`${imageURL}${ord?.image[0]}`}
                                    alt=""
                                    className="img-fluid mx-auto"
                                  />
                                </div>
                              </td>
                              <td>{ord?.name}</td>
                              <td>{ord?.qty}</td>

                              <td>${ord?.price}</td>
                              <td>${ord?.qty * ord?.price}</td>
                              <td>{orderdetaills?.taxperproduct}%</td>
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
                                    src={`${imageURL}${ord?.image[0]}`}
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
                            $
                            {orderdetaills?.totalPrice -
                              orderdetaills?.taxPrice}
                          </p>
                        </div>
                        {/* tax */}
                        <div className="col-7 mb-3">
                          <p className="summary-title">
                            Tax {orderdetaills?.taxperproduct}%
                          </p>
                        </div>
                        <div className="col-5 mb-3 text-right">
                          <p className="summary-value">
                            ${orderdetaills?.taxPrice}
                          </p>
                        </div>
                        {/* Shipping rates */}
                        <div className="col-7 mb-3">
                          <p className="summary-title">Shipping rates</p>
                        </div>
                        <div className="col-5 mb-3 text-right">
                          <p className="summary-value">
                            ${orderdetaills?.shippingPrice}
                          </p>
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
                        {orderdetaills?.status == "Paid" ||
                        orderdetaills?.status == "Refunded" ||
                        orderdetaills?.status == "Delivered" ? null : (
                          <div className="col-12 text-center mt-4">
                            {loading ? (
                              <i className="fas fa-spinner fa-pulse"></i>
                            ) : (
                              <>
                                <PayPalButton
                                  options={{
                                    clientId:
                                      "ASiSqkLrGz972fYCyfH36FFNug0V8UDsDAW9GUWzEx5SOxAmRF0hp1KgfhDTHCRRlvWlDWw3RJXuw6Lp",
                                    currency: "USD"
                                  }}
                                  createOrder={(data, actions) => {
                                    return actions.order.create({
                                      purchase_units: [
                                        {
                                          description: orderdetaills?._id,
                                          amount: {
                                            currency_code: "USD",
                                            value: orderdetaills?.totalPrice
                                          }
                                        }
                                      ]
                                    });
                                  }}
                                  // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                  onSuccess={(details, data) => {
                                    console.log("details");
                                    console.log(details);
                                    console.log("data");
                                    console.log(data);
                                    alert(
                                      "Transaction completed by " +
                                        details.payer.name.given_name
                                    );
                                    dispatch(
                                      payOrder(
                                        match?.params?.id,
                                        data, details,
                                      )
                                    );
                                    history.push("/");

                                    // OPTIONAL: Call your server to save the transaction
                                    // return fetch("/paypal-transaction-complete", {
                                    //   method: "post",
                                    //   body: JSON.stringify({
                                    //     orderID: data.orderID
                                    //   })
                                    // });
                                  }}
                                />
                                <hr className="border-bottom"/>
                                <h5 className="pt-4 pb-2 text-left font-weight-bold">Square Payment</h5>
                                <SquarePaymentsForm
                                  applicationId="sandbox-sq0idb-v3tKjw-IGf76LuqkI7U3rQ"
                                  cardTokenizeResponseReceived={(
                                    token,
                                    buyer
                                  ) => {
                                    dispatch(
                                      payOrder(
                                        match?.params?.id,
                                        token, buyer,
                                      )
                                    );
                                    history.push("/");
                                    console.log("token, buyer", token, buyer);
                                  }}
                                  locationId="L17RXM5KHXR8D"
                                >
                                  <CreditCardInput text={"Pay now"} />
                                </SquarePaymentsForm>
                              </>
                              // <StripeCheckout
                              //   stripeKey="pk_test_IdCqGO7sona7aWZqqiXTs3MN00vl1vkEQa"
                              //   token={handleToken}
                              //   amount={orderdetaills?.totalPrice * 100}
                              //   email={userInfo?.email}
                              // ></StripeCheckout>
                            )}
                          </div>
                        )}
                        {orderdetaills?.status == "Paid" && (
                          <>
                            {" "}
                            <div className="col-7 mb-3">
                              <p className="grand-total">Order Status</p>
                            </div>
                            <div className="col-5 mb-3 text-right">
                              <p className="grand-total-value">Paid</p>
                            </div>
                          </>
                        )}
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
                    All herbs used in our products are 100% naturally organic
                    and are selectively picked and tested by a laboratory before
                    use. Each herbal compound is personally prepared with
                    gratification for the purpose of restoring health to our
                    clients.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderLogDetail;

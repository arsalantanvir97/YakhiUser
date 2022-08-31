import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { useDispatch, useSelector } from "react-redux";
import InnerPageBanner from "./InnerPageBanner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UnauthorizedAlert from "../components/UnauthorizedAlert";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import AllHerbs from "../components/AllHerbs";

const DetoxHome = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [detoxproductlist, setdetoxproductlist] = useState([]);
  useEffect(() => {
    getDetoxProducts();
  }, []);
  
  const getDetoxProducts = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/product/detoxProducts`);
      console.log("data", data);
      setdetoxproductlist(data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const addToCartHandler = async (productId, qty) => {
    history.push(`/MyCart/${productId}?qty=${qty}`);
  };
  
  return (
    <>
      <Header />
      <PrivateRouteSlider/>


      <div className="container-fluid my-5 py-4" id="detox">
        <div className="row">
          <div className="col-11 mx-auto">
            {/* who is this program for */}
            <div className="row align-items-center mb-5 pb-5">
              <div className="col-md-5">
                <img src="images/detox-left.png" alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <h4 className="sub-heading">Yahki Detoxification Home</h4>
                <h3 className="main-heading">Who Is This Program for?</h3>
                <p className="general-para dark-text mt-3">
                  The Yahki Detoxification Home was designed for those who want
                  to naturally reverse aliments and learn how to safely cleanse
                  and detoxify their bodies on a cellular level. One does not
                  have to be suffering from a particular illness to participate.
                  For example, if you are seeking mental clarity or would simply
                  like to complete a 2-week detox you are welcome to book your
                  stay. Registrations are officially complete after your
                  required video screening.
                </p>
              </div>
              <div className="col-md-1" />
            </div>
            {/* detoxification purpose */}
            <div className="mission mb-5 pb-5">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-12 my-xl-0 my-5">
                  <h5>Yahki Detoxification Home</h5>
                  <h3>PURPOSE</h3>
                  <p>
                    The purpose of the Yah’ki Detoxification Home is to provide
                    full immersion in Yah’ki Awakened Alkaline Healing and
                    Revitalization techniques to Private Club members of Yah’ki
                    Awakened Eye of Lotus Botanical Health Club. Private members
                    will have the ability to cleanse deeply and align themselves
                    with all the elements of mind body and soul.
                  </p>
                  <p>
                    Clients will be able to uplift their spirit and align
                    themselves with nature by way of high vibrational activities
                    such as Meditation, Energy Healing, Breathing &amp;
                    Stretching Exercising, Sauna, Thermal Jacuzzi, Nature Walks,
                    Gardening, Sound healing and much more.
                  </p>
                </div>
                <div className="col-xl-5 col-lg-9 mx-auto text-center">
                  <img
                    src="images/detox-right.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* YAH’KI Detox Home (1 Week) */}
            {/* <div className="row align-items-center justify-content-between" id="detox-plans">
        <div className="col-md-5 my-4">
          <img src="images/detox-1-week.png" alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 offset-xl-1 my-4">
          <h3>YAH’KI Detox Home (1 Week)</h3>
          <h4 className="plan-price">$1,500.00</h4>
          <p className="general-para dark-text my-3">
            You deserve healing! We are excited to announce that we are now accepting registration and bookings
            for the Yah’ki Detoxification Home. This package is a one (1) week stay at Yah’ki’s Detox Home for
            Alkaline Healing and Revitalization. Private members will have the ability to cleanse deeply and 
            align themselves with all the elements of mind body and soul.
          </p>
          <p className="general-para my-3">Package includes all food, personal items (toothbrush, toothpaste, soap, etc.), room and board.</p>
          <p className="red my-4 f-20">No refunds available for this product.</p>
          <a href="#" className="btn maroon-btn-solid "><img src="images/add-to-cart.png" alt="" className="img-fluid mr-2 pt-1" />Add to cart</a>
        </div>
      </div> */}
            {/* YAH’KI Detox Home (2 Week) */}
            {detoxproductlist?.detoxproduct?.length > 0 &&
              detoxproductlist?.detoxproduct?.map((det) => (
                <div
                  className="row align-items-center justify-content-between"
                  id="detox-plans"
                >
                  <div className="col-md-6 my-4">
                    <h3>{det?.name}</h3>
                    <h4 className="plan-price">${det?.price}</h4>
                    <p className="general-para dark-text my-3">
                      {det?.description}
                    </p>

                    <Link
                      to="#"
                      className="btn maroon-btn-solid"
                      data-toggle="modal"
                      data-target="#appointment"
                      onClick={() => {
                        userInfo
                          ? addToCartHandler(det?._id, 1)
                          : UnauthorizedAlert();
                      }}
                    >
                      <img
                        src="images/add-to-cart.png"
                        alt=""
                        className="img-fluid mr-2 pt-1"
                      />
                      Add to cart
                    </Link>
                  </div>
                  <div className="col-md-5 my-4 offset-xl-1 ">
                    <Link
                      to={`/ProductView/${det?._id}`}
                      onClick={() => {
                        !userInfo && UnauthorizedAlert();
                      }}
                    >
                      <img
                        style={{
                          height: 440,
                          width: 488
                        }}
                        src={`${imageURL}${det?.productimage[0]}`}
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            {/* FAQS */}

            <AllHerbs/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetoxHome;

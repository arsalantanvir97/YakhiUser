import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userAction";
import { userEmailLoginAction } from "../actions/userAction";

import UnauthorizedAlert from "./UnauthorizedAlert";
import { validateEmail } from "../utils/ValidateEmail";
import Toasty from "../utils/toast";
import Swal from "sweetalert2";
const Header = ({ history }) => {
  const dispatch = useDispatch();
  const [category, setcategory] = useState(() => {
    return (
      localStorage.getItem("categories") &&
      JSON.parse(localStorage.getItem("categories"))
    );
  });

  const [email, setemail] = useState("");
  // let category = [];
  // category =
  //   localStorage.getItem("categories") &&
  //   JSON.parse(localStorage.getItem("categories"));

  const [loading, setloading] = useState(false);
  const cart = useSelector((state) => state?.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logOutHandler = async () => {
    console.log("logout");
    dispatch(logout());
  };
  const submitHandler = async (e) => {
    console.log("submitHandler");
    const emailvalidation = validateEmail(email);
    console.log("emmmm", emailvalidation);
    console.log("addEmployeeHandler");
    if (emailvalidation == true) {
      console.log("submitHandler");
      setloading(true);
      await dispatch(userEmailLoginAction(email, history));
      setloading(false);
      setemail("");
    } else {
      Toasty("error", `Please enter a valid email`);
      setloading(false);
    }

    window?.$(".modal").modal("hide");

    window?.$(".modal-backdrop").remove();
  };
  let msg =
    "New & Improved Detox Experience \n\
  Coming Soon :Booking Currently Not Available";
  const popUpHandler = () => {
    Swal.fire({
      icon: "info",
      title: "",
      text: msg,
      showConfirmButton: false,
      timer: 1500
    });
  };
  return (
    <>
      <section className="menu" style={{ height: 390 }}>
        <div className="container-fluid">
          {/* topbar */}
          <div className="row align-items-center justify-content-center top-bar">
            <div className="col-11 mx-auto">
              <div className="row align-items-center justify-content-end">
                <div className="col-md-6 text-center text-md-left">
                  {/* <p>Free Shipping for order over $80!</p> */}
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <ul className="list-inline topbar-links">
                    <li className="list-inline-item">
                      <Link
                        to={userInfo ? "/AppointmentLogs" : "#"}
                        onClick={() => {
                          !userInfo && UnauthorizedAlert();
                        }}
                      >
                        <i className="fas fa-calendar-alt mr-2" /> Appointment
                        Status
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to={userInfo ? "/OrderLog" : "#"}
                        onClick={() => {
                          !userInfo && UnauthorizedAlert();
                        }}
                      >
                        <i className="fas fa-shipping-fast mr-2" />
                        Order Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <nav className="navbar navbar-expand-xl navbar-transparent justify-content-between py-0">
                    <Link to="/" className="navbar-brand ml-xl-5">
                      <img
                        src="images/yahki-logo.png"
                        alt=""
                        className="img-fluid"
                      />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse justify-content-center"
                      id="navbarNav"
                    >
                      <ul
                        className="navbar-nav align-items-center"
                        id="main-nav"
                      >
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/GeoGenetics">
                            GEO'GENETICS
                          </Link>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            to="#"
                          >
                            EDUCATION
                          </Link>
                          <ul className="dropdown-menu yahki-dropdown">
                            <li>
                              <Link to="/EattotLive">Eat to Live</Link>
                            </li>
                            <li>
                              <Link to="/Instruction">Instructions</Link>
                            </li>
                            <li>
                              <Link to="/BodySystem">12 Body Systems</Link>
                            </li>
                            <li>
                              <Link to="/ApprovedHerb">
                                YAH'KI Approved Herbs
                              </Link>
                            </li>
                            <li>
                              <Link to="/ProductResource">
                                List of Resources
                              </Link>
                            </li>
                            <li>
                              <Link to="/Document">Document Downloads</Link>
                            </li>
                          </ul>
                        </li>
                        {/* herbal store mega menu */}
                        <li className="nav-item dropdown megamenu-li dmenu">
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="dropdown01"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            HERBAL STORE
                          </Link>
                          <div
                            className="dropdown-menu megamenu sm-menu border-top"
                            aria-labelledby="dropdown01"
                          >
                            <div className="row">
                              {/* PRODUCT CATEGORIES */}
                              <div className="col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto">
                                <div className="media">
                                  <div className="media-body d-none d-xl-block">
                                    <h4 className="mb-2">Product Categories</h4>
                                    <ul>
                                      <li>
                                        <Link to="/Consultation">
                                          Consultations
                                        </Link>
                                      </li>
                                      {category?.length > 0 &&
                                        category?.map((cat) => (
                                          <li>
                                            <Link to={`/Capsules/${cat?._id}`}>
                                              {cat?.categorytitle}
                                            </Link>
                                          </li>
                                        ))}
                                    </ul>
                                  </div>
                                  {/* will be visible on screens 1199px and below */}
                                  <div className="media-body d-block d-xl-none">
                                    <ul className="navbar-nav mr-auto">
                                      <li className="nav-item dropdown">
                                        <Link
                                          className="nav-link dropdown-toggle"
                                          to="#"
                                          id="megadropdown"
                                          role="button"
                                          data-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <h4 className="mb-2">
                                            Product Categories{" "}
                                            <i className="fas fa-caret-down fa-1x ml-1" />
                                          </h4>
                                        </Link>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="megadropdown"
                                        >
                                          <Link
                                            to="/Consultation"
                                            className="dropdown-item"
                                          >
                                            Consultations
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Capsules
                                          </Link>
                                          <Link
                                            to="/GeoGenetics"
                                            className="dropdown-item"
                                          >
                                            Geo’Genetics
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Tinctures
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Teas
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Powders
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Seaweed Herbs
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Kits and Bundles
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Tonics
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Oils
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Hygiene
                                          </Link>
                                          <Link
                                            to="/Capsules"
                                            className="dropdown-item"
                                          >
                                            Whole Herbs
                                          </Link>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* I NEED HEALING IN.... */}
                              <div className="col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto">
                                <div className="media">
                                  <div className="media-body d-none d-xl-block">
                                    <h4 className="mb-2">
                                      I need healing in...
                                    </h4>
                                    <ul>
                                      <li>
                                        <Link to="/MuscularSystem">
                                          The Muscular System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/IntegumentarySystem">
                                          The Integumentary System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/SkeletalSystem">
                                          The Skeletal System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/NervousSystem">
                                          The Nervous System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/UrinarySystem">
                                          The Urinary System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/DigestiveSystem">
                                          The Digestive System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/OralSystem">
                                          The Oral Cavity System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/RespiratorySystem">
                                          The Respiratory System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/CardioSystem">
                                          The Cardiovascular System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/LymphaticSystem">
                                          The Lymphatic System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ReproductiveSystem">
                                          The Reproductive System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/EndocrineSystem">
                                          The Endocrine System
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/BodySystem">
                                          All Body Systems
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* will be visible on screens 1199px and below */}
                                  <div className="media-body d-block d-xl-none">
                                    <ul className="navbar-nav mr-auto">
                                      <li className="nav-item dropdown">
                                        <Link
                                          className="nav-link dropdown-toggle"
                                          to="#"
                                          id="megadropdown"
                                          role="button"
                                          data-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <h4 className="mb-2">
                                            I need healing in...{" "}
                                            <i className="fas fa-caret-down fa-1x ml-1" />
                                          </h4>
                                        </Link>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="megadropdown"
                                        >
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Muscular System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Integumentary System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Skeletal System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Nervous System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Urinary System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Digestive System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Oral Cavity System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Respiratory System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Cardiovascular System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Lymphatic System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Reproductive System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            The Endocrine System
                                          </Link>
                                          <Link
                                            to="/IntegumentarySystem"
                                            className="dropdown-item"
                                          >
                                            All Body Systems
                                          </Link>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* MY ACCOUNT */}
                              <div className="col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto">
                                <div className="media">
                                  <div className="media-body d-none d-xl-block">
                                    <h4 className="mb-2">My Account</h4>
                                    <ul>
                                      <li>
                                        <Link
                                          to={userInfo ? "/EditProfile" : "#"}
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                        >
                                          Account Details
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={userInfo ? "/MyCart" : "#"}
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                        >
                                          View My Cart
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={userInfo ? "/Checkout" : "#"}
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                        >
                                          Checkout
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={userInfo ? "/WishList" : "#"}
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                        >
                                          Wishlist
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={userInfo ? "/OrderLog" : "#"}
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                        >
                                          Order Tracking
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={userInfo ? "/DamageClaims" : "#"}
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                        >
                                          Damage Claims
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to={
                                            userInfo ? "/AppointmentLogs" : "#"
                                          }
                                          onClick={() => {
                                            !userInfo && UnauthorizedAlert();
                                          }}
                                          // className="dropdown-item"
                                        >
                                          My Appointments
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* will be visible on screens 1199px and below */}
                                  <div className="media-body d-block d-xl-none">
                                    <ul className="navbar-nav mr-auto">
                                      <li className="nav-item dropdown">
                                        <Link
                                          className="nav-link dropdown-toggle"
                                          to="#"
                                          id="megadropdown"
                                          role="button"
                                          data-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <h4 className="mb-2">
                                            My Account
                                            <i className="fas fa-caret-down fa-1x ml-1" />
                                          </h4>
                                        </Link>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="megadropdown"
                                        >
                                          <Link
                                            to="#"
                                            className="dropdown-item"
                                          >
                                            Account Details
                                          </Link>
                                          <Link
                                            to={userInfo ? "/MyCart" : "#"}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert();
                                            }}
                                            className="dropdown-item"
                                          >
                                            View My Cart
                                          </Link>
                                          <Link
                                            to={userInfo ? "/Checkout" : "#"}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert();
                                            }}
                                            className="dropdown-item"
                                          >
                                            Checkout
                                          </Link>
                                          <Link
                                            to={userInfo ? "/WishList" : "#"}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert();
                                            }}
                                            className="dropdown-item"
                                          >
                                            Wishlist
                                          </Link>
                                          <Link
                                            to={userInfo ? "/OrderLog" : "#"}
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert();
                                            }}
                                            className="dropdown-item"
                                          >
                                            Order Tracking
                                          </Link>
                                          <Link
                                            to={
                                              userInfo ? "/DamageClaims" : "#"
                                            }
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert();
                                            }}
                                            className="dropdown-item"
                                          >
                                            Damage Claims
                                          </Link>
                                          <Link
                                            to={
                                              userInfo
                                                ? "/AppointmentLogs"
                                                : "#"
                                            }
                                            onClick={() => {
                                              !userInfo && UnauthorizedAlert();
                                            }}
                                            className="dropdown-item"
                                          >
                                            My Appointments
                                          </Link>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              {/* CUSTOMER SUPPORT */}
                              <div className="col-md-7 col-xl-3 mb-0 mb-xl-4 mx-auto">
                                <div className="media">
                                  <div className="media-body d-none d-xl-block">
                                    <h4 className="mb-2">Customer Support</h4>
                                    <ul>
                                      <li>
                                        <Link to="/Faqs">
                                          Questions &amp; Answers
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/OrderandPayment">
                                          Orders &amp; Payments
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ShippingandPickup">
                                          Shipping &amp; Pickups
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/ReturnsandRefund">
                                          Returns &amp; Refunds
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  {/* will be visible on screens 1199px and below */}
                                  <div className="media-body d-block d-xl-none">
                                    <ul className="navbar-nav mr-auto">
                                      <li className="nav-item dropdown">
                                        <Link
                                          className="nav-link dropdown-toggle"
                                          to="#"
                                          id="megadropdown"
                                          role="button"
                                          data-toggle="dropdown"
                                          aria-expanded="false"
                                        >
                                          <h4 className="mb-2">
                                            Customer Support{" "}
                                            <i className="fas fa-caret-down fa-1x ml-1" />
                                          </h4>
                                        </Link>
                                        <div
                                          className="dropdown-menu"
                                          aria-labelledby="megadropdown"
                                        >
                                          <Link
                                            to="/Faqs"
                                            className="dropdown-item"
                                          >
                                            Questions &amp; Answers
                                          </Link>
                                          <Link
                                            to="/OrderandPayment"
                                            className="dropdown-item"
                                          >
                                            Orders &amp; Payments
                                          </Link>
                                          <Link
                                            to="/ShippingandPickup"
                                            className="dropdown-item"
                                          >
                                            Shipping &amp; Pickups
                                          </Link>
                                          <Link
                                            to="/ReturnsandRefund"
                                            className="dropdown-item"
                                          >
                                            Returns &amp; Refunds
                                          </Link>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            to="#"
                          >
                            OUR COMPANY
                          </Link>
                          <ul className="dropdown-menu yahki-dropdown">
                            <li>
                              <Link to="/AboutCompany">About our Company</Link>
                            </li>
                            <li>
                              <Link to="/MasterHerbalist">
                                Master Herbalsit
                              </Link>
                            </li>
                            <li>
                              <Link to="/MeettheTeam">Meet The Team</Link>
                            </li>
                            <li>
                              <Link to="/Contactus">Get in Touch</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            data-toggle="modal"
                            data-target="#detoxModal"
                          >
                            Detox Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/Events"
                            // data-toggle="modal"
                            // data-target="#detoxModal"
                          >
                            Events
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/Donate" className="nav-link">
                            DONATE
                          </Link>
                        </li>
                        <li className="nav-item">
                          <ul className="list-inline menu-icons">
                            {userInfo ? (
                              <li className="list-inline-item">
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <a href="#" className="mr-2">
                                      <i className="far fa-user" />
                                    </a>{" "}
                                  </button>
                                  <div className="dropdown-menu dropdown-menu-right">
                                    {/* <button className="dropdown-item" type="button">
                                Action
                              </button> */}
                                    <Link
                                      className="dropdown-item"
                                      to="/EditProfile"
                                    >
                                      My Profile
                                    </Link>
                                    <button
                                      className="dropdown-item"
                                      type="button"
                                      onClick={() => {
                                        logOutHandler();
                                      }}
                                    >
                                      Logout
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ) : (
                              <li className="list-inline-item">
                                <Link
                                  to="#"
                                  className="mr-2"
                                  data-toggle="modal"
                                  data-target="#loginModal"
                                >
                                  <i className="far fa-user" />
                                </Link>
                              </li>
                            )}
                            {userInfo && (
                              <li className="list-inline-item">
                                <Link to="/Notification" className="mr-2">
                                  <i className="fas fa-bell" />
                                </Link>
                              </li>
                            )}
                            <li className="list-inline-item">
                              <Link to="/Capsules" className="mr-2">
                                <i className="fas fa-search" />
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link
                                to={userInfo ? "/WishList" : "#"}
                                onClick={() => {
                                  !userInfo && UnauthorizedAlert();
                                }}
                                className="mr-2"
                              >
                                <i className="far fa-heart" />
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <div className="position-relative">
                                <Link
                                  to={userInfo ? "/MyCart" : "#"}
                                  onClick={() => {
                                    !userInfo && UnauthorizedAlert();
                                  }}
                                >
                                  <i className="fas fa-shopping-bag" />
                                  <span className="cart-count">
                                    {cartItems?.length}
                                  </span>
                                </Link>
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <select name id="switcher">
                                <option value>USD</option>
                              </select>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>

                  <h2 style={{fontWeight:'bold'}} className="banner-h2 aos-init aos-animate">
                    THE WORLDS #1 HIGHEST QUALITY, WILD CRAFTED, HEALING HERBS &
                    HERBAL PROGRAMS </h2><br></br><h5 style={{fontSize:21}} className="banner-h3 aos-init aos-animate">Intracellular Detoxification,
                    Cellular Regeneration, & Holistic Revitalization, Yah'ki
                    Awakened Keeps Everyone Healthy</h5> <br></br><h6 style={{fontSize:21}} className="banner-h3 aos-init aos-animate">Become A Club
                    Member For Free</h6><br></br>
               

                 
                </div>
                <Link
                    to="/Capsules"
                    className="btn banner-btn aos-init aos-animate mt-3"
                    data-aos="zoom-in-left"
                    data-aos-duration={1500}
                    data-aos-delay={400}
                  >
                    Search
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-md modal-dialog-centered "
          role="document"
        >
          <div className="modal-content py-5">
            {/* <button type="button" class="close text-right mr-1 mt-1" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&#10006;</span>
      </button> */}
            <div className="pt-1 pb-5 px-sm-5 px-1">
              <div className="text-center">
                <h2 className=" mt-2">LOGIN</h2>
              </div>
              <div className="text-center mt-2">
                <form id="modalForm">
                  <label htmlFor className="my-label">
                    Email Address <span className="red">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control my-textbox"
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </form>
                {!loading ? (
                  <Link
                    to="#"
                    className="btn red-btn-solid mt-2"
                    data-dismiss="modal"
                    onClick={() =>
                      email?.length > 0
                        ? submitHandler()
                        : Toasty(
                            "error",
                            `Please fill out all the required fields`
                          )
                    }
                  >
                    Login
                  </Link>
                ) : (
                  <i className="fas fa-spinner fa-pulse"></i>
                )}
                <p className="modal-note">
                  Don't Have Account?{" "}
                  <Link
                    to="/Signup"
                    onClick={() => {
                      window?.$(".modal").modal("hide");

                      window?.$(".modal-backdrop").remove();
                    }}
                    className="red"
                  >
                    Register!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade logout-modal p-0"
        data-bs-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        id="detoxModal"
        aria-labelledby
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body text-center pt-5 pb-3">
              <div className="modal-img">
                <i className="fas fa-check" />
              </div>
              <h3 className="modal-title pt-3" />
              <p className="modal-sub-content">
                New &amp; Improved Detox Experience Coming Soon Booking
                Currently Not Available"
              </p>
            </div>
            <div className="modal-footer justify-content-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

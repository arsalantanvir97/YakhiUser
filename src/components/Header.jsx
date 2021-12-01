import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userAction";
const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.cart);
  const { cartItems } = cart;
 
  const logOutHandler = async () => {
    console.log("logout");
    dispatch(logout());
  };
  return (
    <>
      <section className="top-bar">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-11 mx-auto">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-left">
                  <p>Free Shipping for order over $80!</p>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <ul className="list-inline topbar-links">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fas fa-map-marker-alt mr-2" /> Store
                        Location
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/OrderLog">
                        <i className="fas fa-shipping-fast mr-2" />
                        Order Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="logobar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-center pb-3 pb-md-0">
                <div className="col-md-4 col-sm-6 col-12 order-2 order-md-1">
                  <select name id="switcher">
                    <option value>GBP</option>
                  </select>
                </div>
                <div className="col-md-4 col-12 text-center order-1 order-md-2">
                  <Link to='/Home'>
                  <img src="images/logo.png" alt="" className="img-fluid" /></Link>
                </div>
                <div className="col-md-4 col-sm-6 col-12 text-right order-2 order-md-3 mt-3 mt-md-0">
                  <ul className="list-inline">
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
                            <img
                              src="images/user.svg"
                              alt=""
                              className="img-fluid"
                            />
                          </a>{" "}
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          {/* <button className="dropdown-item" type="button">
                                Action
                              </button> */}
                      

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
                    <li className="list-inline-item">
                      <Link to="/Capsules" className="mr-2">
                        <img
                          src="images/search.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/WishList" className="mr-2">
                        <img
                          src="images/heart.svg"
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <div className="position-relative">
                        <Link to="/MyCart">
                          <img
                            src="images/bag.svg"
                            alt=""
                            className="img-fluid"
                          />
                        </Link>
                        <span className="cart-count">{cartItems?.length}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12  col-md-11 mx-auto">
              <div className="row justify-content-center">
                <div className="col-12 text-center">
                  <nav className="navbar navbar-expand-lg navbar-light justify-content-end">
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
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link
                            to="/Home"
                            className="nav-link"
                            href="index.php"
                          >
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/GeoGenetics" className="nav-link">
                            GEO'GENETICS
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/EattotLive" className="nav-link">
                            EDUCATION
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Capsules">
                            HERBAL STORE
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/AboutCompany">
                            OUR COMPANY
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/DetoxHome">
                            DETOX HOME
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/Donate">
                            DONATE
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import AllHerbs from "../components/AllHerbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";

const Memberships = () => {
  return (
    <>
     <Header />
      <div>
      <PrivateRouteSlider/>

        <section className="about-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-11 mx-auto">
                <div className="row mb-5 pb-5">
                  <div className="col-md-12 text-center">
                    <h3 className="main-heading">Memberships</h3>
                    <p className="general-para px-sm-5">
                      Join now for full access to Yahki Awakened Eye of Lotus
                      Botanical Health Club including exclusive access to the
                      Yahki Approved Herbal List, All charts and data, Our Detox
                      center, Cooking Classes, Online Shop and more.
                    </p>
                  </div>
                </div>
                {/* MEMBERSHIP PACKAGES */}
                <form>
                  <div className="row align-items-start justify-content-center text-center my-5 pb-5">
                    <div className="col-lg-4 col-md-8 mb-5 mx-auto">
                      <div className="package-box mx-xl-5">
                        <img
                          src="images/free.png"
                          alt=""
                          className="img-fluid mb-3"
                        />
                        <div className="package-selection">
                          <label className="labl">
                            {/* <input type="radio" name="radioname" value="one_value" checked="checked"/> */}
                            <div>
                              <h3>Melanin Free</h3>
                              <p>Basic Access</p>
                              <h4 className="mt-4 membership-price">free</h4>
                              <Link to='#'
                                className="btn maroon-btn-solid d-inline-block mt-5 mx-auto"
                              >
                                Add to cart
                              </Link>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-8 mb-5 mx-auto">
                      <div className="package-box mx-xl-5">
                        <img
                          src="images/silver.png"
                          alt=""
                          className="img-fluid mb-3"
                        />
                        <div className="package-selection">
                          <label className="labl">
                            {/* <input type="radio" name="radioname" value="another" /> */}
                            <div>
                              <h3>Melanin Silver</h3>
                              <p>Limited Access</p>
                              <h4 className="mt-4 membership-price">$10</h4>
                              <Link to='#'
                                className="btn maroon-btn-solid d-inline-block mt-5 mx-auto"
                              >
                                Add to cart
                              </Link>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-8 mb-5 mx-auto">
                      <div className="package-box mx-xl-5">
                        <img
                          src="images/gold.png"
                          alt=""
                          className="img-fluid mb-3"
                        />
                        <div className="package-selection">
                          <label className="labl">
                            {/* <input type="radio" name="radioname" value="another" /> */}
                            <div>
                              <h3>Melanin Gold</h3>
                              <p>Full Access</p>
                              <h4 className="mt-4 membership-price">$25</h4>
                              <Link to='#'
                                className="btn maroon-btn-solid d-inline-block mt-5 mx-auto"
                              >
                                Add to cart
                              </Link>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <AllHerbs/>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Memberships;

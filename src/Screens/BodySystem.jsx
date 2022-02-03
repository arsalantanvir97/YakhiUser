import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const BodySystem = () => {
  return (
    <>
      <Header />
      <div>
        <section className="inner-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7 col-10 offset-sm-2 offset-1">
                <div className="banner-content">
                  <div className="banner-outline">
                    <h1 className="slider-heading">
                      Healing The Illusion We Call disease
                    </h1>
                    <p className="slider-para">
                      You deserve healing! We are not currently accepting detox
                      home clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="body-system py-5 my-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 mx-auto">
                <div className="row">
                  <div className="col-11 mx-auto text-center">
                    <h4 className="sub-heading">
                      Yah'ki Awakened Eye of Lotus Botanical Health Club
                    </h4>
                    <h3 className="main-heading">System Healing</h3>
                    <p className="general-para mb-4">
                      The hue-man body is a vehicle that our consciousness
                      projects through by way of blood, electricity, and air
                      combustion. This fleshly avatar is made of trillions of
                      cellular structures that are formed into organs which
                      makes up systems. All these systems together are what we
                      call the human body.
                    </p>
                    <p className="general-para mb-4">
                      There are 12 systems that makes up the body. Each
                      recommend herbal product will cleanse, tone, and
                      strengthen the cellular structures of that particular
                      system. Please refer to the body systems to determine
                      which herbal botanicals are appropriate for your healing
                      needs.
                    </p>
                  </div>
                </div>
                <div className="row my-5">
                  {/* mascular sytem */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/mascular-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Tissues</h6>
                        <h4>The Muscular System</h4>
                        <Link to='#'
                        
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* skeletal systen */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/skeletal-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Bones</h6>
                        <h4>The Skeletal System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Nervous System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/nervous-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Brain, Nerves and Adrenals</h6>
                        <h4>The Nervous System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Endocrine System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/endocrine-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Hormones</h6>
                        <h4>The Endocrine System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Respiratory System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/respiratory-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Lungs</h6>
                        <h4>The Respiratory System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Lymphatic System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/lymphatic-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Lymph Nodes, Vessels, Spleen</h6>
                        <h4>The Lymphatic System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* The Integumentary System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/integumentary-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Skin, Hair, &amp; Nails</h6>
                        <h4>The Integumentary System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* The Urinary System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/urinary-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Kidneys, Bladder</h6>
                        <h4>The Urinary System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* The Digestive System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/digestive-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Gastrointestinal Tract</h6>
                        <h4>The Digestive System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Cardiovascular System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/cardio-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Heart, Blood</h6>
                        <h4>Cardiovascular System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* The Reproductive System */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/reproductive-system.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Male &amp; Female Productive System</h6>
                        <h4>The Reproductive System</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* ORAL HEALTH */}
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src="images/oral-health.jpg"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="body-system-content">
                        <h6>Teeth, Gums</h6>
                        <h4>ORAL HEALTH</h4>
                        <Link to='#'
                          className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                        >
                          View Product
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 text-center">
                    <div className="about-bottom-banner">
                      <h3>
                        All Herbs Are Organic Alkaline and Are Naturally
                        Wildcrafted from the Land of their Origin
                      </h3>
                      <p>
                        All herbs used in our products are 100% naturally
                        organic and are selectively picked and tested by a
                        laboratory before use. Each herbal compound is
                        personally prepared with gratification for the purpose
                        of restoring health to our clients.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BodySystem;

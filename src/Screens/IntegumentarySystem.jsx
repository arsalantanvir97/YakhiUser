import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const IntegumentarySystem = () => {
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
                      home clients.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid my-5 py-4">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-12 text-center my-3">
                  <h4 className="sub-heading">Skin, Hair, &amp; Nails</h4>
                  <h3 className="main-heading">The Integumentary System</h3>
                </div>
              </div>
              <div className="about-company">
                <div className="row justify-content-center align-items-center">
                  <div className="col-xl-6 col-10 text-center">
                    <img
                      src="images/integumentary-system.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                    <p className="general-para">
                      Organs of the integumentary system include the skin, hair,
                      and nails. The skin is the largest organ in the body. It
                      encloses and protects the body and is the site of many
                      sensory receptors. The skin is the body’s first defense
                      against pathogens, and it also helps regulate body
                      temperature and eliminate wastes in sweat.
                    </p>
                    <h4 className="red system-sub-heading my-3">
                      Suggested Products
                    </h4>
                    <div
                      className="panel-group mb-4"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      {/* Capsules */}
                      <div className="panel panel-default mb-3">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#capsules"
                              aria-expanded="false"
                              aria-controls="capsules"
                            >
                              CAPSULES
                            </a>
                          </h4>
                        </div>
                        <div
                          id="capsules"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="panel-body">
                            <ul className="system-list ml-4 py-4">
                              <li>Intracellular Cleanse Capsules</li>
                              <li>Parasite Elimination Capsules</li>
                              <li>Brain-Nerve Vital Max Capsules</li>
                              <li>
                                Brain-Nerve &amp; Adrenal Support Capsules
                              </li>
                              <li>Endocrino Balance Capsules</li>
                              <li>Blood Purifier Capsules</li>
                              <li>Liver and Gall Bladder Capsules</li>
                              <li>Atomic Strengthener Capsules</li>
                              <li>Cayenne Pepper Capsules</li>
                              <li>Turmeric Infusion Capsules</li>
                              <li>Adult All Purpose Vitamin Capsules</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/*Tinctures  */}
                      <div className="panel panel-default mb-3">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#tinctures"
                              aria-expanded="false"
                              aria-controls="tinctures"
                            >
                              Tinctures
                            </a>
                          </h4>
                        </div>
                        <div
                          id="tinctures"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="panel-body">
                            <ul className="system-list ml-4 py-4">
                              <li>Intracellular Cleanse Tincture</li>
                              <li>Parasite Elimination Tincture</li>
                              <li>Brain-Nerve Vital Max Tincture</li>
                              <li>
                                Brain-Nerve &amp; Adrenal Support Tincture
                              </li>
                              <li>Endocrino Balance Tincture</li>
                              <li>Blood Purifier Tincture</li>
                              <li>Liver and Gall Bladder Tincture</li>
                              <li>Atomic Strengthener Tincture</li>
                              <li>Cayenne Pepper Tincture</li>
                              <li>Turmeric Infusion Tincture</li>
                              <li>Lymphatic Sweep Tonic Tincture</li>
                              <li>Heavy Metal Tincture</li>
                              <li>Iron Phosphate Tincture</li>
                              <li>Thyroid Support Tincture</li>
                              <li>Parathyroid Support Tincture</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Teas */}
                      <div className="panel panel-default mb-3">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#teas"
                              aria-expanded="false"
                              aria-controls="teas"
                            >
                              Teas
                            </a>
                          </h4>
                        </div>
                        <div
                          id="teas"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <ul className="system-list ml-4 py-4">
                              <li>Brain Nerve Vitalmax Tea</li>
                              <li>Cellular Regeneration Tea</li>
                              <li>Revitalizer Tea</li>
                              <li>3BITTERS</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* OILS */}
                      <div className="panel panel-default mb-3">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#oil"
                              aria-expanded="false"
                              aria-controls="oil"
                            >
                              OILS
                            </a>
                          </h4>
                        </div>
                        <div
                          id="oil"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <ul className="system-list ml-4 py-4">
                              <li>Wild Neem Oil</li>
                              <li>Mediterranean Oregano Oil</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* SALVES */}
                      <div className="panel panel-default mb-3">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#salves"
                              aria-expanded="false"
                              aria-controls="salves"
                            >
                              SALVES
                            </a>
                          </h4>
                        </div>
                        <div
                          id="salves"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <ul className="system-list ml-4 py-4">
                              <li>Coming Soon</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="#" className="btn red-btn-solid ">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-center mt-5">
                  <div className="about-bottom-banner">
                    <h3>
                      All Herbs Are Organic Alkaline and Are Naturally
                      Wildcrafted from the Land of their Origin
                    </h3>
                    <p>
                      All herbs used in our products are 100% naturally organic
                      and are selectively picked and tested by a laboratory
                      before use. Each herbal compound is personally prepared
                      with gratification for the purpose of restoring health to
                      our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default IntegumentarySystem;

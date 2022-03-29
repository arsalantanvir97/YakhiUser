import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopnowButton from "../components/ShopnowButton";

const NervousSystem = () => {
  return (
    <>
      <Header />
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
                <h4 className="sub-heading">Brain, Nerves &amp; Adrenals</h4>
                <h3 className="main-heading">Nervous System</h3>
              </div>
            </div>
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10 text-center">
                  <img
                    src="images/nervous-system.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <p className="general-para">
                    The nervous system includes the brain and spinal cord, which
                    make up the central nervous system, and nerves that run
                    throughout the rest of the body, which make up the
                    peripheral nervous system. The nervous system controls both
                    voluntary and involuntary responses of the human organism
                    and also detects and processes sensory information.
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
                      <div className="panel-heading" role="tab" id="headingTwo">
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
                            <li>Brain, Nerve &amp; Vital Max Capsules</li>
                            <li>CardioTonic&nbsp; Capsules</li>
                            <li>Inner-Cellular Cleanse Capsules</li>
                            <li>Circulatory System HIGH Capsules</li>
                            <li>Circulatory System LOW Capsules</li>
                            <li>Iron Phosphate Capsules</li>
                            <li>Atomic Strengthener Capsules</li>
                            <li>Liver &amp; Gall Bladder Capsules</li>
                            <li>Brain, Nerve &amp; Adrenal Capsules</li>
                            <li>Astringent X Capsules</li>
                            <li>Foundation Fours Capsules</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*Tinctures  */}
                    <div className="panel panel-default mb-3">
                      <div className="panel-heading" role="tab" id="headingTwo">
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
                            <li>Brain, Nerve &amp; Vital Max Tincture</li>
                            <li>CardioTonic&nbsp; Tincture</li>
                            <li>Inner-Cellular Cleanse Tincture</li>
                            <li>Circulatory System HIGH Tincture</li>
                            <li>Circulatory System LOW Tincture</li>
                            <li>Iron Phosphate Tincture</li>
                            <li>Atomic Strengthener Tincture</li>
                            <li>Liver &amp; Gall Bladder Tincture</li>
                            <li>Brain, Nerve &amp; Adrenal Tincture</li>
                            <li>Astringent X Tincture</li>
                            <li>Foundation Fours Tincture</li>
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
                            <li>CardioTonic Tea</li>
                            <li>Cellular Regeneration Tea</li>
                            <li>Revitalizer Tea</li>
                            <li>3BITTERS</li>
                            <li>IV Elements</li>
                            <li>Neem Leaf Tea</li>
                            <li>Hibiscus Tea</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* SEAWEED & POWDERS */}
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
                            href="#powder"
                            aria-expanded="false"
                            aria-controls="powder"
                          >
                            SEAWEED &amp; POWDERS
                          </a>
                        </h4>
                      </div>
                      <div
                        id="powder"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <ul className="system-list ml-4 py-4">
                            <li>Sea Moss 100% Raw, Organic Wildcrafted</li>
                            <li>IV Elements Infusion</li>
                            <li>Bladderwrack from the Aeolian Islands</li>
                            <li>Superfood+ Powder</li>
                            <li>Kelp Granules from Ireland</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Kits & Bundles */}
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
                            href="#kits"
                            aria-expanded="false"
                            aria-controls="kits"
                          >
                            Kits &amp; Bundles
                          </a>
                        </h4>
                      </div>
                      <div
                        id="kits"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <ul className="system-list ml-4 py-4">
                            <li>Brain &amp; Nervous System Kit</li>
                            <li>Brain, Nerve &amp; Adrenal Support Bundle</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ShopnowButton/>

                </div>
              </div>
            </div>
            <div className="row mt-5">
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NervousSystem;

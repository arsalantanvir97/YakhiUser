import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopnowButton from "../components/ShopnowButton";

const MuscularSystem = () => {
  return (
    <>
    <Header/>
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
                <h4 className="sub-heading">Tissues</h4>
                <h3 className="main-heading">The Muscular System</h3>
              </div>
            </div>
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10">
                  <img
                    src="images/muscular-system.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <p className="general-para">
                    The muscular system consists of three different types of
                    muscles, including skeletal muscles, which are attached to
                    bones by tendons and allow for voluntary movements of the
                    body. Smooth muscle tissues control the involuntary
                    movements of internal organs, such as the organs of the
                    digestive system, allowing food to move through the system.
                    Smooth muscles in blood vessels allow vasoconstriction and
                    vasodilation and thereby help regulate body temperature.
                    Cardiac muscle tissues control the involuntary beating of
                    the heart, allowing it to pump blood through the blood
                    vessels of the cardiovascular system.
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
                            <li>Intracellular Cleanse Capsules</li>
                            <li>Parasite Elimination Capsules</li>
                            <li>Brain-Nerve Adrenal Support Capsules</li>
                            <li>Calcium Tri-Phosphate Capsules</li>
                            <li>Atomic Strengthener Capsules</li>
                            <li>Superfood+ Capsules</li>
                            <li>All Purpose Adult Vitamin Capsules</li>
                            <li>Turmeric Infusion Capsules</li>
                            <li>Black Seed Oil Capsules</li>
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
                            <li>Intracellular Cleanse Tincture</li>
                            <li>Parasite Elimination Tincture</li>
                            <li>Brain-Nerve Adrenal Support Tincture</li>
                            <li>Calcium Tri-Phosphate Tincture</li>
                            <li>Atomic Strengthener Tincture</li>
                            <li>Superfood+ Tincture</li>
                            <li>All Purpose Adult Vitamin Tincture</li>
                            <li>Turmeric Infusion Tincture</li>
                            <li>Black Seed Oil Tincture</li>
                            <li>Circulatory High Tincture</li>
                            <li>Circulatory Low Tincture</li>
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
                            <li>Cellular Regeneration Tea</li>
                            <li>Revitalizer Tea</li>
                            <li>3BITTERS</li>
                            <li>IV Elements</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* POWDERS & SEA HERBS */}
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
                            href="#powders"
                            aria-expanded="false"
                            aria-controls="powders"
                          >
                            POWDERS &amp; SEA HERBS
                          </a>
                        </h4>
                      </div>
                      <div
                        id="powders"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <ul className="system-list ml-4 py-4">
                            <li>Superfood+ Powder</li>
                            <li>Aeolian Islands Bladderwrack</li>
                            <li>100% Raw Organic Sea Moss</li>
                            <li>Kelp Granules from Ireland</li>
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
      <Footer/>
    </>
  );
};

export default MuscularSystem;

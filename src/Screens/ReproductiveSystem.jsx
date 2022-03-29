import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopnowButton from "../components/ShopnowButton";

const ReproductiveSystem = () => {
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
                <h4 className="sub-heading">
                  Male &amp; Female Productive System
                </h4>
                <h3 className="main-heading">The Reproductive System</h3>
              </div>
            </div>
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10 text-center">
                  <img
                    src="images/reproductive-system.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <p className="general-para">
                    The reproductive system is the only body system that differs
                    substantially between individuals. There is a range of
                    Biological sex, but most books divide them into male and
                    female.
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
                            <li>Brain Nerve Vitalmax Capsules</li>
                            <li>Inner-Cellular Cleanse Capsules</li>
                            <li>Parasite Elimination Capsules</li>
                            <li>Brain, Nerve, &amp; Adrenal Capsules</li>
                            <li>Endocrino Capsules</li>
                            <li>GI Super Mover Capsules</li>
                            <li>Blood Purifier Capsules</li>
                            <li>Calcium Tri-Phosphate Capsules</li>
                            <li>Atomic Strengthener Capsules</li>
                            <li>Lymphatic System Detox Capsules</li>
                            <li>Cayenne Pepper Capsules</li>
                            <li>Adult All Purpose Vitamin Capsules</li>
                            <li>Turmeric Infusion Capsules</li>
                            <li>Superfood Powder Plus Capsules</li>
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
                            <li>Brain Nerve Vitalmax Tincture</li>
                            <li>Inner-Cellular Cleanse Tincture</li>
                            <li>Parasite Elimination Tincture</li>
                            <li>Brain, Nerve, &amp; Adrenal Tincture</li>
                            <li>Endocrino Tincture</li>
                            <li>GI Super Mover Tincture</li>
                            <li>Blood Purifier Tincture</li>
                            <li>Calcium Tri-Phosphate Tincture</li>
                            <li>Atomic Strengthener Tincture</li>
                            <li>Lymphatic System Sweep Tonic Tincture</li>
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
                            <li>IV Elements</li>
                            <li>Burdock Root Tea</li>
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

export default ReproductiveSystem;

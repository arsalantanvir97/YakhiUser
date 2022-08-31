import React from "react";
import AllHerbs from "../components/AllHerbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import ShopnowButton from "../components/ShopnowButton";
let capsules = [
  'Brain, Nerve & Vital Max Capsules	',
  'CardioTonic Capsules',
  'Inner-Cellular Cleanse Capsules',
  'Circulatory System HIGH Capsules',
  'Circulatory System LOW Capsules',
  'Iron Phosphate Capsules',
  'Atomic Strengthener Capsules',
  'Liver and Gall Bladder Capsules	',
  'Brain, Nerve & Adrenal Capsules',
  'Astringent X Capsules',
  'Foundation Fours Capsules'
];

let Tinctures = [
  'Brain Nerve Vitalmax Tincture',
'CardioTonic Tincture',
'Inner-Cellular Cleanse Tincture',
'Circulatory System HIGH Tincture',
'Circulatory System LOW Tincture',
'Iron Phosphate Tincture',
'Atomic Strengthener Tincture',
'Liver and Gall Bladder Tincture',
'Brain, Nerve &amp; Adrenal Tincture',
'Astringent X Tincture',
'Foundation Fours Tincture'
];

let Teas = [
  'Brain Nerve Vitalmax Tea',
'CardioTonic Tea',
'Cellular Regeneration Tea',
'Revitalizer Tea',
'3BITTERS',
'IV Elements',
'Neem Leaf Tea',
'Hibiscus Tea'
];
let powders = [
  'Sea Moss Raw, Organic Wildcrafted',
  'IV Elements Infusion',
  'Bladderwrack from the Aeolian Islands',
  'Superfood+ Powder',
  'Kelp Granules from Ireland'
];
let bundles = [
  'Brain & Nervous System Kit',
  'Brain, Nerve & Adrenal Support Bundle'
];
const NervousSystem = ({history}) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider/>

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
                          {capsules?.length > 0 &&
                              capsules?.map((cap) => (
                                <li className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`);
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
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
                          {Tinctures?.length > 0 &&
                              Tinctures?.map((cap) => (
                                <li className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`);
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
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
                          {Teas?.length > 0 &&
                              Teas?.map((cap) => (
                                <li className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`);
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
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
                          {powders?.length > 0 &&
                              powders?.map((cap) => (
                                <li className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`);
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
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
                          {bundles?.length > 0 &&
                              bundles?.map((cap) => (
                                <li className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`);
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ShopnowButton/>

                </div>
              </div>
            </div>
            <AllHerbs/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NervousSystem;

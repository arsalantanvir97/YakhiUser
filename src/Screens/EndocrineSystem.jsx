import React from "react";
import AllHerbs from "../components/AllHerbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import ShopnowButton from "../components/ShopnowButton";
let capsules = [
'Brain Nerve Vitalmax Capsules',
'CardioTonic Capsules',
'Inner-Cellular Cleanse Capsules',
'Parasitic Elimination Capsules',
'Brain, Nerve and Adrenal Support Capsules',
'Endocrino Balance Capsules',
'Iron Phosphate Biomineral Balance Capsules',
'Lymphatic System Detox Capsules',
'Atomic Strengthener Capsules',
'GI Super Mover Capsules',
'Superfood Powder Plus Capsules',
'Cayenne Pepper Capsules',
'Adult All Purpose Vitamins',
'Turmeric Infusion Capsules',
'Liver Detox Capsules',
'Foundation Fours Capsules',
];

let Tinctures = [
'Brain Nerve Vitalmax Tincture',
'CardioTonic Tinctures',
'Inner-Cellular Cleanse Tincture',
'Parasite Elimination Tinctures',
'Brain-Nerve Adrenal Support Tincture',
'Endocrino Balance Tincture',
'Iron Phosphate Tincture',
'Lymphatic System Detox Tincture',
'Atomic Strengthener Tincture',
'GI Super Mover Tincture',
'Superfood Plus Powder Tincture',
'Foundation Fours Tincture',
];

let Teas = [
'Brain Nerve Vitalmax Tea',
'CardioTonic Tea',
'Cellular Regeneration Tea',
'Revitalizer Tea',
'3BITTERS',
'IV Elements',
'Neem Leaf Tea',
'Red Clover Leaf Tea',
'Raspberry Leaf Tea',
'Hibiscus Leaf Tea',
'Burdock Root Tea',
'Soursop Leaf Very High Potency Tea',
];
let powders = [
  'Sea Moss Raw, Organic Wildcrafted',
  'IV Elements Infusion',
  'Bladderwrack from the Aeolian Islands',
  'Superfood+ Powder',
  'Kelp Granules from Ireland',
  'Lung Cleanser (Tar Remover) Powder',
];

let bundles = [
'Essential Glandular Endocrine Kit',
'Foundation Fours Bundle',
'Diabetes Reversal Kit (Pancreas Healing)',
];
let oils = ["Black seed Oil"];
const EndocrineSystem = ({history}) => {
  return (
    <>
      <Header />
        <PrivateRouteSlider/>

      <div className="container-fluid my-5 py-4">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-12 text-center my-3">
                <h4 className="sub-heading">Hormones</h4>
                <h3 className="main-heading">Endocrine System</h3>
              </div>
            </div>
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10 text-center">
                  <img
                    src="images/endocrine-system.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <p className="general-para">
                    The endocrine system is made up of glands that secrete
                    hormones into the blood, which carries the hormones
                    throughout the body. Endocrine hormones are chemical
                    messengers that control many body functions, including
                    metabolism, growth, and sexual development. The master gland
                    of the endocrine system is the pituitary gland, which
                    produces hormones that control other endocrine glands. Some
                    of the other endocrine glands include the pancreas, thyroid
                    gland, and adrenal glands.
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
                                <li
                                  className="abccccc"
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
                                <li
                                  className="abccccc"
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
                                <li
                                  className="abccccc"
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
                                <li
                                  className="abccccc"
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
                                <li
                                  className="abccccc"
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

export default EndocrineSystem;

import React from "react";
import AllHerbs from "../components/AllHerbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import ShopnowButton from "../components/ShopnowButton";
let capsules = [
'Brain Nerve Vitalmax Capsules',
'Brain, Nerve & Adrenal Capsules',
'Lymphatic System Capsules',
'Black Seed Oil (Nigella Sativa) Capsules',
'Inner-Cellular Cleanse Capsules',
'Iron Phosphate Capsules',
'Cayenne Pepper Capsules',
'GI Supermover Capsules',
'Blood Purifier Capsules',
'Parasite Elimination Capsules',
'Liver Detox Capsules',
'Foundation Fours Capsules',
];

let Tinctures = [
  'Brain Nerve Vitalmax Tincture',
  'Brain, Nerve, & Adrenal Tincture',
  'Lymphatic System Tincture',
  'Black Seed Oil (Nigella Sativa) Tincture',
  'Inner-Cellular Cleanse Tincture',
  'Iron Phosphate Tincture',
  'Blood Purifier Tincture',
  'Parasite Elimination Tincture',
  'Liver Detox Tincture',
  'Foundation Fours Tincture',
];

let Teas = [
'Brain Nerve Vitalmax Tea',
'Cellular Regeneration Tea',
'Revitalizer Tea',
'3BITTERS',
];
let powders = [

'Lung Cleanser (Tar Remover) Powder',
];
let oils=['Black seed Oil']
let bundles=[

'Lymphatic System Sweep Kit',
'Foundation Fours Bundle',
'Parasite Elimination Bundle',
'Brain, Nerve & Adrenal Support Bundle',
'Blood Purifier Bundle',
'Inner-Cellular Cleanse Bundle',
'Tonic Kit',
]
const LymphaticSystem = ({history}) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider/>

      <div className="container-fluid my-5 py-4">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row">
              <div className="col-12 text-center my-3">
                <h4 className="sub-heading">Lymph Nodes, Vessels, Spleen</h4>
                <h3 className="main-heading">Lymphatic System</h3>
              </div>
            </div>
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10 text-center">
                  <img
                    src="images/lymphatic-system.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <p className="general-para">
                    The lymphatic system is sometimes considered to be part of
                    the immune system. It consists of a network of lymph vessels
                    and ducts that collect excess fluid (called lymph) from
                    extracellular spaces in tissues and transport the fluid to
                    the bloodstream. The lymphatic system also includes many
                    small collections of tissue, called lymph nodes, and an
                    organ called the spleen, both of which remove pathogens and
                    cellular debris from the lymph or blood. In addition, the
                    thymus gland in the lymphatic system produces some types of
                    white blood cells (lymphocytes) that fight infections.
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
                            <li> {powders?.length > 0 &&
                              powders?.map((cap) => (
                                <li
                                  className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${cap}`);
                                  }}
                                >
                                  {cap}
                                </li>
                              ))}</li>
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
                          {oils?.length > 0 &&
                              oils?.map((cap) => (
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

export default LymphaticSystem;
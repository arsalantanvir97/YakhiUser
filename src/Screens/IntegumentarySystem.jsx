import React from "react";
import { Link } from "react-router-dom";
import AllHerbs from "../components/AllHerbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import ShopnowButton from "../components/ShopnowButton";
let capsules = [
'Intracellular Cleanse Capsules',
'Parasite Elimination Capsules',
'Brain-Nerve Vital Max Capsules',
'Brain-Nerve &amp; Adrenal Support Capsules',
'Endocrino Balance Capsules',
'Blood Purifier Capsules',
'Liver and Gall Bladder Capsules',
'Atomic Strengthener Capsules',
'Cayenne Pepper Capsules',
'Turmeric Infusion Capsules',
'Adult All Purpose Vitamin Capsules',
];
let Tinctures = [
'Intracellular Cleanse Tincture',
'Parasite Elimination Tincture',
'Brain-Nerve Vital Max Tincture',
'Brain-Nerve &amp; Adrenal Support Tincture',
  'Endocrino Balance Tincture',
  'Blood Purifier Tincture',
  'Liver and Gall Bladder Tincture',
  'Atomic Strengthener Tincture',
  'Cayenne Pepper Tincture',
  'Turmeric Infusion Tincture',
  'Lymphatic Sweep Tonic Tincture',
  'Heavy Metal Tincture',
  'Iron Phosphate Tincture',
  'Thyroid Support Tincture',
  'Parathyroid Support Tincture'
,
];
let Teas = [
  'Brain Nerve Vitalmax Tea',
  'Cellular Regeneration Tea',
  'Revitalizer Tea',
  '3BITTERS',

];
let Oils = [
  'Wild Neem Oil',
  'Mediterranean Oregano Oil'
];
const IntegumentarySystem = ({history}) => {
  return (
    <>
      <Header />
      <PrivateRouteSlider/>

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
                              Tinctures?.map((tin) => (
                                <li
                                  className="abccccc"
                                  onClick={() => {
                                    history?.push(`/ProductViewByName/${tin}`);
                                  }}
                                >
                                  {tin}
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
                          {Oils?.length > 0 &&
                              Oils?.map((cap) => (
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
                  <ShopnowButton />
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

export default IntegumentarySystem;

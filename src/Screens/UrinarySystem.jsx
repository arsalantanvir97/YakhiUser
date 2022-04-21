import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopnowButton from "../components/ShopnowButton";

let capsules = [
  "Inner-Cellular Cleanse Capsules",
  "Blood Purifier Capsules",
  "Parasite Elimination Capsules",
  "Heavy Metal Detox Capsules",
  "Lymphatic Sweep Tonic Capsules",
  "Circulatory System LOW Capsules",
  "Liver & Gall Bladder Capsules",
  "Brain, Nerve &amp; Adrenal Capsules",
  "Astringent X Capsules",
  "Foundation Fours Capsules"
];

let Tinctures = [
  'Inner-Cellular Cleanse Tincture',
  'Blood Purifier Tincture',
  'Parasite Elimination Tincture',
  'Heavy Metal Detox Tincture',
  'Lymphatic Sweep Tonic Tincture',
  'Circulatory System LOW Tincture',
  'Liver and Gall Bladder Tincture',
  'Brain, Nerve, & Adrenal Tincture',
  'Astringent X Tincture',
  'Foundation Fours Tincture'
];

let Teas = [
  'Cellular Regeneration Tea',
  'Revitalizer Tea',
  '3BITTERS',
  'IV Elements',
  'Neem Leaf Tea',
  'Red Clover Tea',
  'Raspberry Leaf Tea',
  'Burdock Root Tea',
  'Soursop Leaf Very High Potency Tea',
  'Hibiscus Leaf Tea',
];

let powders = [
'Sea Moss Raw, Organic Wildcrafted',
'IV Elements Infusion',
'Bladderwrack from the Aeolian Islands',
'Superfood+ Powder',
'Kelp Granules from Ireland',
];
let tonics = [
  'Lymphatic Sweep Tonic',
'Bitter Liquid Mineral Balance Tonic'
  ];
const UrinarySystem = ({ history }) => {
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
                <h4 className="sub-heading">Kidneys, Bladder</h4>
                <h3 className="main-heading">The Urinary System</h3>
              </div>
            </div>
            <div className="about-company">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-10 text-center">
                  <img
                    src="images/urinary-system.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="col-xl-6 col-12 mt-xl-0 mt-5">
                  <p className="general-para">
                    The Renal System (urinary system) includes the pair of
                    kidneys, which filter excess water and a waste product
                    called urea from the blood and form urine. Two tubes called
                    ureters carry the urine from the kidneys to the urinary
                    bladder, which stores the urine until it is excreted from
                    the body through another tube named the urethra. The kidneys
                    also produce an enzyme called renin and a variety of
                    hormones. These substances help regulate blood pressure, the
                    production of red blood cells, and the balance of calcium
                    and phosphorus in the body.
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
                    {/* Powders */}
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
                    {/* Tonics */}
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
                            href="#tonic"
                            aria-expanded="false"
                            aria-controls="tonic"
                          >
                            TONICS
                          </a>
                        </h4>
                      </div>
                      <div
                        id="tonic"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <ul className="system-list ml-4 py-4">
                          {tonics?.length > 0 &&
                              tonics?.map((cap) => (
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
                  <ShopnowButton />
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

export default UrinarySystem;

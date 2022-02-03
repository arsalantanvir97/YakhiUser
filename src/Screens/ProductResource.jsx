import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductResource = () => {
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

      <section className="about-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 mx-auto">
              <div className="row">
                <div className="col-md-8 text-center mx-auto">
                  <h4 className="sub-heading">
                    There's No Such Thing As A Disease That Can't Be Cured!
                  </h4>
                  <h3 className="main-heading">Product Resource</h3>
                  <p className="general-para">
                    Here is a list of resources on where to purchase items
                    required for your healing journey.
                  </p>
                </div>
              </div>
              {/* Resources Dropdowns */}
              <div className="row mt-5 justify-content-lg-center justify-content-left align-items-start">
                {/* Water Filters */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#waterFilters"
                      aria-expanded="false"
                      aria-controls="waterFilters"
                    >
                      Water Filters
                    </button>
                    <div className="collapse" id="waterFilters">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Therapy */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#therapy"
                      aria-expanded="false"
                      aria-controls="therapy"
                    >
                      Therapy
                    </button>
                    <div className="collapse" id="therapy">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Juicers */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#Juicers"
                      aria-expanded="false"
                      aria-controls="Juicers"
                    >
                      Juicers
                    </button>
                    <div className="collapse" id="Juicers">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Natural Pads */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#naturalPads"
                      aria-expanded="false"
                      aria-controls="naturalPads"
                    >
                      Natural Pads
                    </button>
                    <div className="collapse" id="naturalPads">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BPA Free Cups */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#bpa"
                      aria-expanded="false"
                      aria-controls="bpa"
                    >
                      BPA Free Cups
                    </button>
                    <div className="collapse" id="bpa">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cooper/Glass Cookware */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#cookware"
                      aria-expanded="false"
                      aria-controls="cookware"
                    >
                      Cooper/Glass Cookware
                    </button>
                    <div className="collapse" id="cookware">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wooden Dishware */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#dishware"
                      aria-expanded="false"
                      aria-controls="dishware"
                    >
                      Wooden Dishware
                    </button>
                    <div className="collapse" id="dishware">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Detergents & Cleaning */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#cleaning"
                      aria-expanded="false"
                      aria-controls="cleaning"
                    >
                      Detergents &amp; Cleaning
                    </button>
                    <div className="collapse" id="cleaning">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Retails Store Sources */}
                <div className="col-lg-4 col-md-6 col-10 mx-auto mx-md-0 mr-md-auto">
                  <div className="mx-2 mb-5">
                    <button
                      className="btn btn-resource"
                      type="button"
                      data-toggle="collapse"
                      data-target="#retails"
                      aria-expanded="false"
                      aria-controls="retails"
                    >
                      Retails Store Sources
                    </button>
                    <div className="collapse" id="retails">
                      <div className="card card-body resource-body">
                        <ul>
                          <li className="mb-4">
                            <p>
                              Fluoride and Chemical/Metal Carbon Charcoal Water
                              Filter
                            </p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>Pelican Water House Filter</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                          <li className="mb-4">
                            <p>HP Test Strips</p>
                            <a
                              href="#"
                              className="btn red-btn-solid btn-sm mt-lg-4 mt-3"
                            >
                              Purchase
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Retail Sources */}
              <div className="row mt-5">
                <div className="col-12 text-left">
                  <h3 className="main-heading">Retail Sources</h3>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h4 className="retail-title">
                    Distilled Water/ Spring Water
                  </h4>
                  <ul className="retail-resources">
                    <li>Walmart</li>
                    <li>Wholefoods</li>
                    <li>Sprouts</li>
                    <li>Schunks</li>
                    <li>Family Dollar</li>
                    <li>Target</li>
                    <li>Dollar Tree</li>
                    <li>Publix</li>
                    <li>Amazon</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h4 className="retail-title">House Plants Rich In Oxygen</h4>
                  <ul className="retail-resources">
                    <li>Walmart</li>
                    <li>Target</li>
                    <li>Home Depot</li>
                    <li>Lowe’s</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h4 className="retail-title">100% Cotton Underwear</h4>
                  <ul className="retail-resources">
                    <li>Target</li>
                    <li>Walmart</li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h4 className="retail-title">100% Cotton Sheets</h4>
                  <ul className="retail-resources">
                    <li>Amazon</li>
                    <li>Walmart</li>
                    <li>Target</li>
                  </ul>
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
      </section>
      <Footer />
    </>
  );
};

export default ProductResource;

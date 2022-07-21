import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ListSkeleton } from "../components/MultipleSkeleton";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
const Document = () => {
  const [docs, setdocs] = useState([]);
  const [loading, setloading] = useState(false);

  const gettingAllDOucs = async () => {
    setloading(true);
    const res = await axios.get(`${baseURL}/document/getallDocuments/`);
    setloading(false);

    console.log("res", res);
    setdocs(res?.data?.getAlldocss);
  };
  useEffect(() => {
    gettingAllDOucs();
  }, []);

  return (
    <>
      <Header />
      <PrivateRouteSlider/>


      <section className="body-system py-5 my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-9 mx-auto text-center">
                  <h4 className="sub-heading">
                    Yah'ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <h3 className="main-heading">Document Downloads</h3>
                  <p className="general-para mb-4">
                    The Best Way To Ensure You Order The Appropriate Herbal
                    Botanicals For Healing, Is By Cooking A Conusltation
                  </p>
                </div>
              </div>
              <div className="row mt-5">
              {loading ? (
                      <ListSkeleton listsToRender={16} />
               
                    ) : (
                docs?.length > 0 &&
                  docs?.map((doc, index) => (
                    <div className="col-lg-4 col-md-6">
                      <div className="body-system-type">
                        <img
                          src={
                            doc?.pdfimage?.length > 0 &&
                            ` ${imageURL}${doc?.pdfimage}`
                          }
                          alt=""
                          className="img-fluid"
                        />
                        <div className="body-system-content">
                          <h6>Document</h6>
                          <h4>{doc?.pdfname}</h4>
                          <Link
                            to="#"
                            onClick={() =>
                              window.open(
                                `${baseURL}/download/${doc?.pdfdocs}`,
                                "_blank"
                              )
                            }
                            className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                          >
                            Download
                          </Link>
                        </div>
                      </div>
                    </div>
                  )))}
                {/* Castor Packs */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/castor-packs.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>Castor Packs</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Ear Candling */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/ear-candling.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>Ear Candling</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* What to Expect While Detoxing */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/detoxing.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>What to Expect While Detoxing </h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Geo'Genetics Therapy Diet Program */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/diet-program.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4> Geo'Genetics Therapy Diet Program</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Herbal Instructions */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/herbal-instructions.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>Herbal Instructions</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Alkaline Food Combination Chart */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/alkaline-foods.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>Alkaline Food Combination Chart</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Kidney Filtration Sheet */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/kidney-filtration.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>Kidney Filtration Sheet</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
                {/* Healing Preparation Sheet */}
                {/* <div className="col-lg-4 col-md-6">
                  <div className="body-system-type">
                    <img
                      src="images/healing-preparation.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="body-system-content">
                      <h6>Document</h6>
                      <h4>Healing Preparation Sheet</h4>
                      <a
                        href="#"
                        className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div> */}
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

export default Document;

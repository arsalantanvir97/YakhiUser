import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../utils/api";
import { Link } from "react-router-dom";
const Document = () => {
  const [docs, setdocs] = useState([]);
  const [docsimages, setdocsimages] = useState([
    "images/abdominal-massage.jpg",
    "images/neuro-points.jpg",
    "images/lemonade.jpg",
    "images/gallbladder-flush.jpg",
    "images/herbal-enema.jpg",
    "images/herbal-douche.jpg",
  ]);
  const gettingAllDOucs = async () => {
    const res = await axios.get(`${baseURL}/document/getallDocuments/`);
    console.log("res", res);
    setdocs(res?.data?.getAlldocss);
  };
  useEffect(() => {
    gettingAllDOucs();
  }, []);

  return (
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
              {/* <div className="col-lg-4 col-md-6">
                <div className="body-system-type">
                  <img
                    src="images/abdominal-massage.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="body-system-content">
                    <h6>Document</h6>
                    <h4>Abdominal Massage</h4>
                    <a
                      href="#"
                      className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="body-system-type">
                  <img
                    src="images/neuro-points.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="body-system-content">
                    <h6>Document</h6>
                    <h4>Neuro Lymphatic Points</h4>
                    <a
                      href="#"
                      className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="body-system-type">
                  <img src="images/lemonade.jpg" alt="" className="img-fluid" />
                  <div className="body-system-content">
                    <h6>Document</h6>
                    <h4>Fresh Lemonade Fast</h4>
                    <a
                      href="#"
                      className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="body-system-type">
                  <img
                    src="images/gallbladder-flush.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="body-system-content">
                    <h6>Document</h6>
                    <h4>Liver &amp; Gallbladder Flush</h4>
                    <a
                      href="#"
                      className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="body-system-type">
                  <img
                    src="images/herbal-enema.jpg"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="body-system-content">
                    <h6>Document</h6>
                    <h4>Herbal Enema</h4>
                    <a
                      href="#"
                      className="btn red-btn-solid mt-lg-4 mt-3 ml-3 ml-md-0"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div> */}
              {docs?.length > 0 &&
                docs?.map((doc, index) => (
                  <div className="col-lg-4 col-md-6">
                    <div className="body-system-type">
                      <img
                        src={docsimages[index]}
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
                ))}
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
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
    </section>
  );
};

export default Document;

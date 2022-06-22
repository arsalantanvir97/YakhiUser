import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ListSkeleton } from "../components/MultipleSkeleton";
import { baseURL, imageURL } from "../utils/api";

const Instruction = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [instructions, setinstructions] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getInstructions();
  }, []);

  const getInstructions = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(
        `${baseURL}/instruction/getallinstructions`
      );
      setloading(false);

      console.log("data", data);
      setinstructions(data?.getallinstructions);
    } catch (error) {
      console.log("error", error);
    }
    setloading(false);
  };
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
                <div className="col-md-12 text-center">
                  <h4 className="sub-heading">
                    Yah'ki Awakened Eye of Lotus Botanical Health Club
                  </h4>
                  <h3 className="main-heading">INSTRUCTIONS</h3>
                  <p className="general-para">
                    Take all take herbs on empty stomach. While taking herbal
                    compounds at least 64 oz. of spring water must be consumed
                    daily. Unless told otherwise by Yah’ki, Spring water is the
                    most recommended drink while on herbal compounds. A raw
                    alkaline plant based diet is required when detoxing the
                    Mind, Body, and Spirit. The effectiveness of herbal
                    compounds are greatly compromised when diet is not followed.
                    Optimal results are only achievable when herbal diet and
                    regimen are followed correctly.
                  </p>
                </div>
              </div>
              {loading ? (
                <ListSkeleton listsToRender={16} />
              ) : (
                <div className="row mt-4">
                  {instructions?.length > 0 &&
                    instructions?.map((inst, index) => (
                      <div className="col-xl-4 col-md-6">
                        <div className="product-card">
                          {inst?.videouri && (
                            <video width="100%" height="60%" controls>
                              <source
                                src={`${imageURL}${inst?.videouri}`}
                                type="video/ogg"
                              />
                            </video>
                          )}
                          <h5
                            style={{
                              fontSize: 20,
                              maxHeight: 50,
                              minHeight: 50,
                              marginTop: 15
                            }}
                            // className="product-name"
                          >
                            {inst?.videotitle}
                          </h5>
                          <p>{inst?.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
              <div className="row align-items-center justify-content-between my-5">
                <div className="col-lg-8 col-12">
                  <h4 className="cta-line">
                    NO YEAST, SUGAR, MEAT, ALCOHOL, OR DAIRY PRODUCTS MAY BE
                    CONSUMED WITH HERBAL COMPOUNDS.
                  </h4>
                </div>
                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-right">
                  <Link to="/Document" className="btn red-btn-solid ml-md-0">
                    Download Document
                  </Link>
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

export default Instruction;

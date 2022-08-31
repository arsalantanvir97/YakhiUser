import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ListSkeleton } from "../components/MultipleSkeleton";
import { baseURL, imageURL } from "../utils/api";
import { Parser } from "html-to-react";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import AllHerbs from "../components/AllHerbs";

const htmlToReactParser = new Parser();

const Instruction = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [instructiontext, setinstructiontext] = useState(()=>{
    ''
  });

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
      setinstructiontext(data?.instructiontext?.text) 
      setinstructions(data?.getallinstructions);
    } catch (error) {
      console.log("error", error);
    }
    setloading(false);
  };
  return (
    <>
      <Header />
      <PrivateRouteSlider/>

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
                  {htmlToReactParser.parse(instructiontext)}

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
              <AllHerbs/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Instruction;

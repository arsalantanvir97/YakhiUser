import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PrivateRouteSlider from "../components/PrivateRouteSlider";
import { baseURL } from "../utils/api";

const Faqs = () => {
  const [faqs, setfaqs] = useState([]);
  const [faqid, setfaqid] = useState([]);

  useEffect(() => {
    gettingallFAQS();
  }, []);
  const gettingallFAQS = async () => {
    const res = await axios.get(`${baseURL}/faq/getallfaqs`, {});
    console.log("res", res);
    setfaqs(res?.data?.faqs);
  };
  useEffect(() => {
   console.log('faqid',faqid)
  }, [faqid])
  const handleid=(id)=>{
    if(faqid.includes(id)){
      console.log('insideblock');
      // let faqidd=[]
      // faqidd=[...faqid]
      setfaqid(faqid.filter(faq=>(faq!==id)))
    } 
    else {
      let faaiqid=[]
      console.log('outblock',id);
      faaiqid=[...faqid,id]
      setfaqid(faaiqid)
    }
  }
  return (
    <>
      <Header />
      <PrivateRouteSlider />

      <div className="container-fluid py-3 my-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <section className="faqs-video">
              <div className="row">
                <div className="col-12 text-center">
                  <h2>For Membership Assistance, Watch the Video Below</h2>
                  <div className="f-video-container my-5">
                    <img
                      src="images/faq-video-thumbnail.jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <button type="button" className="play-banner" tabIndex={0}>
                      <i className="fas fa-play" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="faqs">
              <div className="row">
                <div className="col-12 text-center">
                  <h4 className="sub-heading">Faqs</h4>
                  <h3 className="main-heading">Frequently Asked Questions</h3>
                </div>
                <div className="col-10 mx-auto mt-3">
                  {/* FAQS container starts */}
                  <div className="faq-container">
                    {/* FAQ 1 */}
                    {faqs?.length > 0 &&
                      faqs?.map((faq) => (
                        <div
                          className={`faq ${faqid?.includes(faq?._id) && "active"}`}
                          key={faq?._id}
                        >
                          <h3 className="faq-title">{faq?.question}</h3>
                          <p className="faq-text">{faq?.answer}</p>
                          <button
                            className="faq-toggle"
                            onClick={() => {
                              handleid(faq?._id)
                            }}
                          >
                            <i className="fas fa-chevron-down" />
                            <i className="fas fa-times" />
                          </button>
                        </div>
                      ))}
                    {/* FAQS container ends */}
                  </div>
                </div>
              </div>
            </section>
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
      <Footer />
    </>
  );
};

export default Faqs;

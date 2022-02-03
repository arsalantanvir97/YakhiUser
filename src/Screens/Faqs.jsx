import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Faqs = () => {
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
                    <div className="faq ">
                      <h3 className="faq-title">How Much Does It Cost?</h3>
                      <p className="faq-text">
                        $1500 dollars per week includes herbs. There is a
                        one-week minimum stay. Full payment will be required to
                        book your stay.
                      </p>
                      <button className="faq-toggle">
                        <i className="fas fa-chevron-down" />
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* FAQ 2 */}
                    <div className="faq ">
                      <h3 className="faq-title">How Long I Can Stay?</h3>
                      <p className="faq-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sit, reprehenderit!
                      </p>
                      <button className="faq-toggle">
                        <i className="fas fa-chevron-down" />
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* FAQ 3 */}
                    <div className="faq">
                      <h3 className="faq-title">
                        Can the Yahki Detoxification Home Accommodate Everyone?
                      </h3>
                      <p className="faq-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta, vel.
                      </p>
                      <button className="faq-toggle">
                        <i className="fas fa-chevron-down" />
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* FAQ 4 */}
                    <div className="faq ">
                      <h3 className="faq-title">What Do I Need to Bring?</h3>
                      <p className="faq-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam, ipsum.
                      </p>
                      <button className="faq-toggle">
                        <i className="fas fa-chevron-down" />
                        <i className="fas fa-times" />
                      </button>
                    </div>
                    {/* FAQ 3 */}
                    <div className="faq ">
                      <h3 className="faq-title">
                        Can I Bring Someone With Me?
                      </h3>
                      <p className="faq-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Animi, placeat.
                      </p>
                      <button className="faq-toggle">
                        <i className="fas fa-chevron-down" />
                        <i className="fas fa-times" />
                      </button>
                    </div>
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

import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, imageURL } from "../utils/api";
import { Link } from "react-router-dom";
import HomeSlider from "../components/HomeSlider";
import ProductSlider from "../components/ProductSlider";
import ClientsSlider from "../components/ClientsSlider";
import { useSelector } from "react-redux";
const Index = ({ history }) => {
  const [product, setproduct] = useState([]);
  const [allofcategory, setallofcategory] = useState([]);
  const [catid, setcatid] = useState("");
  const [prdouctbycategories, setprdouctbycategories] = useState([]);

  useEffect(() => {
    gettingProducts();
  }, []);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const gettingProducts = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getlimitedProducts`,
        method: "GET"
      });
      console.log("res", res);
      setproduct(res?.data?.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gettingallCategoriesHandler();
  }, []);

  const gettingallCategoriesHandler = async () => {
    const res = await axios.get(`${baseURL}/category/allOfCategories`, {});
    console.log("res", res);
    setallofcategory(res?.data?.getAllCategories);
  };

  const gettingproductsbyCategoryidHandler = async (id) => {
    const res = await axios.get(
      `${baseURL}/product/getproductsbycategoryid/${id}`
    );
    console.log("res", res);
    setprdouctbycategories(res?.data?.products);
  };
  const productViewRedirectHandler = async (id) => {
    history?.push(`/ProductView/${id}`);
  };
  return (
    <>
      <Header />

      <section className="main-banner">
        <div className="container-fluid h-100">
          <div className="row align-items-start justify-content-center h-100 pt-5">
            <div className="col-xl-5 col-lg-7 col-md-10 ml-auto mt-5 pt-5 text-right pr-5">
              <h1
                className="banner-h1 mb-4 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
              >
                the body was created <br />{" "}
                <span className="heading-break">to heal itself...</span>{" "}
              </h1>
              <h2
                className="banner-h2 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
                data-aos-delay={300}
              >
                if provided with the right environmental conditions!
              </h2>
              <Link
                to="#"
                className="btn banner-btn mt-4 mr-5 aos-init aos-animate"
                data-aos="zoom-in-left"
                data-aos-duration={1500}
                data-aos-delay={400}
              >
                find out how
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row align-items-center justify-content-center my-5 pt-5 pb-3">
          <div
            className="col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration={3000}
          >
            <img
              src="images/Yahki-awakened-welcome-image.jpg"
              alt=""
              className="img-fluid"
            />
          </div>

          <div
            className="col-lg-6 col-md-8 mx-auto my-3 aos-init aos-animate"
            data-aos="fade-down"
            data-aos-duration={3000}
          >
            <p className="yahki-p pl-4">
              Welcome to Yah’ki Awakened LLC, where Peace, Health, Energy and
              Awareness is always first priority. Our purpose is to provide life
              changing information to a brilliant, intelligent people who have
              been deceived and misinformed for centuries. Experience the true
              power of alkaline herbal therapy with Master Herbalist Yah’ki.
            </p>
            <img
              src="images/yahki-awakened.png"
              alt=""
              className="img-fluid w-55 mt-4"
            />
          </div>
          <div className="filteration">
            <div className="container py-4">
              <div className="row my-5 align-items-start justify-content-between">
                <div className="col-12">
                  {" "}
                  <h6 className="text-uppercase">SEARCH PRODUCTS</h6>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-group my-3">
                    <select
                      className="form-control"
                      id="helpWith"
                      // value={catid}
                      // onChange={(event) => {
                      //   setcatid(event.target.value);
                      //   gettingproductsbyCategoryidHandler(event.target.value);
                      // }}
                    >
                      <option>I need help with</option>
                      {allofcategory?.length > 0 &&
                        allofcategory?.map((cat) => (
                          <option value={cat?._id}>{cat?.categorytitle}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-group my-3">
                    <select
                      className="form-control"
                      id="formula"
                      onChange={(event) => {
                        productViewRedirectHandler(event.target.value);
                      }}
                    >
                      <option>Products</option>
                      {prdouctbycategories?.length > 0 &&
                        prdouctbycategories?.map((prod) => (
                          <option value={prod?._id}>{prod?.name}</option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-group my-3">
                    <select
                      className="form-control"
                      id="helpWith"
                      value={catid}
                      onChange={(event) => {
                        setcatid(event.target.value);
                        gettingproductsbyCategoryidHandler(event.target.value);
                      }}
                    >
                      <option>Categories</option>
                      {allofcategory?.length > 0 &&
                        allofcategory?.map((cat) => (
                          <option value={cat?._id}>{cat?.categorytitle}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="col-12 my-2 text-center">
                  <Link
                    to="#"
                    className="btn maroon-btn-solid d-inline-block py-2 px-5"
                  >
                    Find
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="yahki-features">
        <div className="container mt-5 pt-3">
          <div className="row text-center">
            <div className="col-lg-4">
              <img
                src="images/consultant.png"
                alt=""
                className="img-fluid mx-auto"
              />
              <h3 className="my-4">CONSULT AN EXPERT</h3>
              <p>Members can chat one on one with a counselor or therapist</p>
              <Link to="#" className="linear-white-link my-5">
                learn more
              </Link>
            </div>
            <div className="col-lg-4">
              <img
                src="images/shop-online.png"
                alt=""
                className="img-fluid mx-auto"
              />
              <h3 className="my-4">SHOP ONLINE</h3>
              <p>
                Members can shop online 24/7 from our exclusive Members Only Top
                Quality Herbal Alkaline products.
              </p>
              <Link to="/Capsules" className="linear-white-link my-5">
                learn more
              </Link>
            </div>
            <div className="col-lg-4">
              <img
                src="images/multimedia.png"
                alt=""
                className="img-fluid mx-auto"
              />
              <h3 className="my-4">MULTIMEDIA COURSES</h3>
              <p>
                Premiere Members can view our media gallery with exclusive
                access to all of our videos and courses.
              </p>
              <Link to="#" className="linear-white-link my-5">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-3">
        <div className="row my-4">
          <div className="col-12 text-center">
            <p className="yahki-blockquote">
              “And by the river upon the bank thereof, on this side and on that
              side, shall grow all trees for meat, whose leaf shall not fade,
              neither shall the fruit thereof be consumed: it shall bring forth
              new fruit according to his months, because their waters they
              issued out of the sanctuary: and the fruit thereof shall be for
              meat, and the leaf thereof for medicine.”
            </p>
          </div>
        </div>
      </div>

      <section className="featured">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h4>Tranding Products</h4>
                  <h3>Featured Products</h3>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-10 mx-auto text-center">
                  <div id="">
                    {/* <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-1.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-2.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-3.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-4.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-1.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-2.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-3.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div>
                    <div className="featured-product animate__animated animate__slideInUp">
                      <img
                        src="images/featured-prod-4.jpg"
                        alt=""
                        className="img-fluid mx-auto"
                      />
                      <h4 className="prod-title">
                        White Handmade Organic Soap
                      </h4>
                      <h5 className="prod-price">$350.00</h5>
                    </div> */}
                    <ProductSlider
                      history={history}
                      images={product}
                      userInfo={userInfo}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="must-watch-video">
        <div className="container-fluid">
          <div className="row g-0">
            <div className="col-12 px-0">
              <div className="video-container">
                <video autoPlay muted loop>
                  <source src="images/must-watch.mp4" type="video/mp4" />
                </video>
                <div className="caption">
                  <h4 className="mb-4">MUST WATCH</h4>
                  <Link to="#" className="play-btn" id="headerVideoLink">
                    <i className="far fa-play my-4" />
                  </Link>
                  <p className="mt-4">
                    ALL DISEASE, INFECTIONS, AND VIRUSES CAN BE COMPLETELY
                    HEALED IF YOU LEARN THIS SIMPLE SYSTEM!!
                  </p>
                </div>
              </div>
              <div
                id="headerPopup"
                className="mfp-hide embed-responsive embed-responsive-21by9"
              >
                <iframe
                  className="embed-responsive-item"
                  width={854}
                  height={480}
                  src="https://www.youtube.com/embed/ebzbKa32kuk"
                  frameBorder={0}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="offer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-start justify-content-center text-center">
                <div className="col-xl-3 col-lg-5 col-md-10 mx-auto">
                  {/* <div class="offer-box animate__animated animate__fadeInUp">
                      <img src="images/leaf.png" alt="" class="img-fluid mb-3 curve-leaf ">
                      <h4>Iv Elements</h4>
                      <div class="overlay-heading">
                          <h5 class="purple">40
                              <span class="characters">
                                  %<br> Off
                              </span>
                          </h5>
                          <h5 class="maroon">40
                              <span class="characters">
                                  %<br> Off
                              </span>
                          </h5>
                      </div>
                      <a href="#" class="red-link">Shop Now</a>
                  </div> */}
                  <div className="animate__animated animate__fadeInUp my-5 py-5">
                    <img
                      src="images/three-bitters.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <img
                    src="images/elementsCircle.png"
                    alt=""
                    className="img-fluid elementsCircle"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-10 mx-auto offset-lg-1">
                  <img
                    src="images/IVElements.png"
                    alt=""
                    className="img-fluid animate__animated animate__fadeInUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="offer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-start justify-content-center text-center">
                <div className="col-xl-3 col-lg-5 col-md-10 mx-auto">
                  <div className="offer-box animate__animated animate__fadeInUp">
                    <img
                      src="images/leaf.png"
                      alt=""
                      className="img-fluid mb-3 curve-leaf "
                    />
                    <h4>Iv Elements</h4>
                    <div className="overlay-heading">
                      <h5 className="purple">
                        40
                        <span className="characters">
                          %<br /> Off
                        </span>
                      </h5>
                      <h5 className="maroon">
                        40
                        <span className="characters">
                          %<br /> Off
                        </span>
                      </h5>
                    </div>
                    <Link to="/Capsules" className="red-link">
                      Shop Now
                    </Link>
                  </div>
                  <img
                    src="images/elementsCircle.png"
                    alt=""
                    className="img-fluid elementsCircle"
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-10 mx-auto offset-lg-1">
                  <img
                    src="images/IVElements.png"
                    alt=""
                    className="img-fluid animate__animated animate__fadeInUp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="container my-5 py-3">
        <div className="row my-4">
          <div className="col-12 text-left">
            <p className="yahki-blockquote f-24 mb-1">
              “And God said, Behold, I have given you every herb bearing seed,
              which [is] upon the face of all the earth, and every tree, in the
              which [is] the fruit of a tree yielding seed; to you it shall be
              for meat. And to every beast of the earth, and to every fowl of
              the air, and to every thing that creepeth upon the earth, wherein
              [there is] life, [I have given] every green herb for meat: and it
              was so.And God saw every thing that he had made, and, behold, [it
              was] very good. And the evening and the morning were the sixth
              day.”
            </p>
            <p className="text-right quote-author">Genesis 1:29 – 1:31</p>
          </div>
        </div>
      </div>

      <div className="yahki-features">
        <div className="container py-3">
          <div className="row text-center">
            <div className="col-12 text-center">
              <div className="fixed-banner">
                <h4>
                  ALL HERBS ARE ORGANIC ALKALINE BOTANICALS AND ARE NATURALLY
                  WILDCRAFTED FROM THE LAND OF THEIR ORIGIN
                </h4>
                <p className="mt-5">
                  All herbs used in our products are 100% naturally organic and
                  are selectively picked and tested by a laboratory before use.
                  Each herbal compound is personally prepared with gratification
                  for the purpose of restoring health to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index;

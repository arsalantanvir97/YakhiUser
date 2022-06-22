import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import InnerPageBanner from "./InnerPageBanner";
import ProductSlider from "../components/ProductSlider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ListSkeleton } from "../components/MultipleSkeleton";
import { SliderSkeleton } from "../components/SliderSkeleton";

const GeoGenetics = ({history}) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [organicproductlist, setorganicproductlist] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getDetoxProducts();
  }, []);

  const getDetoxProducts = async () => {
    setloading(true)
    try {
      const { data } = await axios.get(`${baseURL}/product/geoGeneticsProducts`);
      setloading(false)

      console.log("data", data);
      setorganicproductlist(data);
    } catch (error) {
      console.log("error", error);
    }
    setloading(false)

  };
  return (
    <>
      <Header />
      <section className="inner-banner" id="geo">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-6 col-sm-7 col-10 offset-sm-3 offset-1">
              <div className="banner-content">
                <div className="banner-outline">
                  <h1 className="slider-heading">Geo'Genetics</h1>
                  <p className="slider-para mt-2">
                    You deserve healing! We are not currently accepting detox
                    home clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bread-crumbs">
        <div className="container-fluid">
          <div className="row mt-3 mb-5 pb-5">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-md-6">
                  <ul className="crumbs">
                    <li>
                      <Link to="/">Homepage</Link>
                    </li>
                    <li>GEO’GENETIC HERBAL THERAPY</li>
                  </ul>
                </div>
                <div className="col-md-6 text-right">
                  <h5>HEALING THE ILLUSION WE CALL DISEASE</h5>
                  <p className="mt-5">
                    TO HAVE YOUR QUESTIONS ON TUESDAYS LIVE, SEND THEM TO
                    QUESTIONS@YAHKIAWAKENED.COM
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <ul className="media-icon">
                  <li>
                    <Link to="#">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row py-5 mt-5 intro-geo">
          <div className="col-12 text-center">
            <p>
              Yah’ki uses a very unique and effective herbal therapy approach
              when addressing disease!
            </p>
          </div>
          <div className="col-12 mt-4 text-left">
            <p>
              The Geo’Genetics Therapeutic Package was created to cleanse every
              cellular structure and system of your body. It breaks up mucus and
              calcification, kills parasites, and revitalizes and rinses the
              cells while supplying carbon, oxygen, and hydrogen, pairing them
              with a monosaccharide sugar, phosphate and nitrogen base!
            </p>
          </div>
        </div>
      </div>

      <section className="yahki-protocols py-5">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-12">
              <h3 className="protocol-heading orange  mb-4">GEO'GENETICS PACKAGES</h3>
            </div>
          </div>
          {loading ? (
                      <SliderSkeleton listsToRender={4} />
               
                    ) : (
          <ProductSlider
            images={organicproductlist?.geoGeneticsproduct}
            userInfo={userInfo}
            history={history}
          />)}
          {/* <div className="row">
            <div className="col-12 my-5">
              <div id="protocols" className="owl-carousel owl-theme">
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-1.jpeg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">DE-VAXXED HERBAL THERAPY</p>
                      <div className="d-flex flex-column">
                        <p className="discount-price">900.00</p>
                        <p className="product-price">750.00</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-2.jpg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">
                        WEEK 1-2 GEO’GENETICS PROTOCOL (formerly amino acid
                        herbal protocol)
                      </p>
                      <p className="product-price">600.00</p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-2.jpg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">
                        WEEK 11-12 GEO’GENETICS PROTOCOL (formerly amino acid
                        herbal protocol)
                      </p>
                      <p className="product-price">300.00</p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-2.jpg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">
                        WEEK 13-14 GEO’GENETICS PROTOCOL(formerly amino acid
                        herbal protocol)
                      </p>
                      <p className="product-price">300.00</p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-1.jpeg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">
                        WEEK 3-4 GEO’GENETICS PROTOCOL(formerly amino acid
                        herbal protocol)
                      </p>
                      <div className="d-flex flex-column">
                        <p className="discount-price">300.00</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-2.jpg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">
                        ELDERBERRY (Sambucus Nigra) Whole Berries
                      </p>
                      <p className="product-price">70.00</p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-2.jpg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">Black Seed Oil</p>
                      <p className="product-price">45.00</p>
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="#">
                    <div className="product-box">
                      <img
                        src="images/pckg-2.jpg"
                        alt=""
                        className="img-fluid protocol"
                      />
                      <div className="product-actions">
                        <button
                          type="button"
                          href="#"
                          className="quickview-button"
                        >
                          <i className="fas fa-eye" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="wishlist_button"
                        >
                          <i className="far fa-heart" />
                        </button>
                        <button
                          type="button"
                          href="#"
                          className="cart-_button"
                          title="Add to cart"
                        >
                          <i className="fal fa-shopping-cart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-meta mt-3">
                      <p className="product-title">
                        PARASITIC ELIMINATION PRO TINCTURE
                      </p>
                      <p className="product-price">60.00</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

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

export default GeoGenetics;

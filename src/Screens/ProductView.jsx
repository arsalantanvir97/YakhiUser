import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import axios from "axios";
import InnerPageBanner from "./InnerPageBanner";
const ProductView = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [product, setproduct] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [recommendedproducts, setrecommendedproducts] = useState([]);
  useEffect(() => {
    getSingleProduct();
  }, []);

  useEffect(() => {
    console.log("quantity", quantity);
  }, [quantity]);

  const getSingleProduct = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getProductDetails/${match?.params?.id}`,
        method: "GET",
      });
      console.log("res", res?.data?.product?.category);
      setproduct(res?.data?.product);
      const category = await res?.data?.product?.category;
      console.log("category", category);
      const { data } = await axios.post(`${baseURL}/product/detoxProducts`, {
        category: category,
      });
      console.log("data", data);
      setrecommendedproducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const addToCartHandler = async () => {
    console.log("addToCartHandler");
    history.push(`/MyCart/${match.params.id}?qty=${quantity}`);
  };
  const addtoWishLIstHandler = async (product) => {
    console.log("product", product);
    const formData = new FormData();
    formData.append("user_image", product?.productimage);
    formData.append("id", userInfo?._id);
    formData.append("price", product?.price);
    formData.append("brand", product?.brand);
    formData.append("weight", product?.weight);
    formData.append("category", product?.category);
    formData.append("countInStock", product?.countInStock);
    formData.append("name", product?.name);

    formData.append("description", product?.description);

    const body = formData;
    try {
      console.log("createWishList");

      const res = await axios.post(`${baseURL}/wishList/createWishList`, body);

      console.log("res", res);
      if (res?.status == 201) {
        history.replace("/WishList");
      }
      // else if(res?.status==201){
      //   Toasty('error',`Invalid Email or Password`);
      //   dispatch({
      //     type: ADMIN_LOGIN_FAIL,
      //     payload:
      //     res?.data?.message
      //   })
      //   document.location.href = '/'

      // }
    } catch (error) {
      console.log("error", error);
      Swal.fire({
        icon: "error",
        title: "ERROR",
        text: "Internal Server Error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const subQuantity = async () => {
    quantity == 0 || quantity <= 0
      ? setquantity(0)
      : setquantity(Number(quantity - 1));
  };
 
  return (
    <>
      <InnerPageBanner />
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto">
            {/* product grid and add to cart option */}
            <section className="product-grid">
              <div className="row align-items-start justify-content-center my-5 py-5">
                <div className="col-lg-6 col-md-8">
                  <div className="p-view-main">
                    <img
                      src={`${imageURL}${product?.productimage}`}
                      alt=""
                      className="img-fluid h-100"
                    />
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className="p-view-thumb">
                        <img
                          src={`${imageURL}${product?.productimage}`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-view-thumb">
                        <img
                          src={`${imageURL}${product?.productimage}`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="p-view-thumb">
                        <img
                          src={`${imageURL}${product?.productimage}`}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-10">
                  <h2 className="p-title">{product?.name}</h2>
                  <ul className="list-inline py-4">
                    <li className="list-inline-item">
                      <i
                        style={{ color: "#F3DE43" }}
                        className={
                          product?.rating >= 1
                            ? "fas fa-star"
                            : product?.rating >= 0.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }
                      />
                    </li>
                    <li className="list-inline-item">
                      <i
                        style={{ color: "#F3DE43" }}
                        className={
                          product?.rating >= 2
                            ? "fas fa-star"
                            : product?.rating >= 1.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }
                      />
                    </li>
                    <li className="list-inline-item">
                      <i
                        style={{ color: "#F3DE43" }}
                        className={
                          product?.rating >= 3
                            ? "fas fa-star"
                            : product?.rating >= 2.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }
                      />
                    </li>
                    <li className="list-inline-item">
                      <i
                        style={{ color: "#F3DE43" }}
                        className={
                          product?.rating >= 4
                            ? "fas fa-star"
                            : product?.rating >= 3.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }
                      />
                    </li>
                    <li className="list-inline-item">
                      <i
                        style={{ color: "#F3DE43" }}
                        className={
                          product?.rating >= 5
                            ? "fas fa-star"
                            : product?.rating >= 4.5
                            ? "fas fa-star-half-alt"
                            : "far fa-star"
                        }
                      />
                    </li>
                  </ul>
                  <p className="short-desc">{product?.description} </p>
                  <h4 className="big-price">${product?.price} </h4>
                  <div id="field1">
                    Quantity
                    <div className="quantifier">
                      <button
                        type="button"
                        id="sub"
                        className="minus"
                        value={quantity}
                        onClick={() =>
                          // setquantity(Number(quantity - 1))
                          subQuantity()
                        }
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <input
                        type="number"
                        id={1}
                        min={0}
                        className="quantity quantity p-2"
                        value={quantity}
                        onChange={(e) => {
                          setquantity(Number(e.target.value));
                        }}
                        max={product?.countInStock}
                      />
                      <button
                        type="button"
                        id="add"
                        className="plus"
                        value={quantity}
                        onClick={
                          () => 
                          setquantity(Number(quantity + 1))
                        }
                      >
                        <i className="fas fa-plus" />
                      </button>
                    </div>
                  </div>
                  <div className="weight my-4">
                    <p>
                      Weight<span>{product?.weight}</span>
                    </p>
                  </div>
                  <button
                    onClick={addToCartHandler}
                    type="button"
                    className="btn maroon-btn-solid px-5 py-2"
                    disabled={product?.countInStock == 0}
                  >
                    <img
                      src="images/add-to-cart.png"
                      alt=""
                      className="img-fluid mr-2 pt-1"
                    />
                    Add to cart
                  </button>
                </div>
              </div>
            </section>
            {/* specifications */}
            <section className="specifications">
              <div className="row">
                <div className="col-11">
                  <h3>Product Specification</h3>
                  <p className="my-3">{product?.description}</p>
                </div>
              </div>
            </section>
            {/* reviews */}
            <section className="reviews-detail mt-5 border-top border-grey pt-5">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <h3>Reviews</h3>
                  <p className="star-numbers">4.5 Star</p>
                  <ul className="list-inline mb-3">
                    <li className="list-inline-item">
                      <i className="fas fa-star rate" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star rate" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star rate" />
                    </li>
                    <li className="list-inline-item">
                      <i className="fas fa-star rate" />
                    </li>
                    <li className="list-inline-item">
                      <i className="far fa-star rate" />
                    </li>
                  </ul>
                  <span className="rate-total">
                    4.5 Ratings &amp; 2 Reviews
                  </span>
                </div>
                <div className="col-lg-6 col-md-10 mt-lg-0 mt-5">
                  <div className="row justify-content-center align-items-center text-center">
                    {/* 1  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">1 Star</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">10 %</span>
                    </div>
                    {/* 2  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">2 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">20 %</span>
                    </div>
                    {/* 3  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">3 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">10 %</span>
                    </div>
                    {/* 4  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">4 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">50 %</span>
                    </div>
                    {/* 5  STAR*/}
                    <div className="col-2 mb-4">
                      <span className="star-number">5 Stars</span>
                    </div>
                    <div className="col-8 mb-4">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-2 mb-4">
                      <span className="star-percent">10 %</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* user review cards */}
            <section className="user-reviews">
              <div className="row">
                <div className="col-12">
                  <div className="review-card">
                    <div className="row">
                      <div className="col-lg-1 col-5">
                        <img
                          src="images/commentor-avatar.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-10 col-12">
                        <h4 className="commentor-name">Ben Döring</h4>
                        <p className="comment-date">Oct 27 - 8 Minutes read</p>
                        <p className="comment">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet
                        </p>
                        <ul className="list-inline py-2">
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="far fa-star rate" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review-card">
                    <div className="row">
                      <div className="col-lg-1 col-5">
                        <img
                          src="images/commentor-avatar.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                      <div className="col-lg-10 col-12">
                        <h4 className="commentor-name">Ben Döring</h4>
                        <p className="comment-date">Oct 27 - 8 Minutes read</p>
                        <p className="comment">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet
                        </p>
                        <ul className="list-inline py-2">
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="fas fa-star rate" />
                          </li>
                          <li className="list-inline-item mr-0">
                            <i className="far fa-star rate" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* recommended products */}
            <section className="recomended-products mt-5 border-top border-grey pt-4">
              <div className="row">
                <div className="col-12 mb-4">
                  <h3>Recommended Products</h3>
                </div>
                {recommendedproducts?.detoxproduct?.length > 0 &&
                  recommendedproducts?.detoxproduct?.map((rec) => (
                    <div className="col-xl-3 col-md-6">
                      {/* Product 4 */}
                      <div className="product-card">
                        <button
                          type="button"
                          className="wishlist-btn"
                          onClick={() => {
                            addtoWishLIstHandler(rec);
                          }}
                        >
                          <i className="wishlist-icon far fa-heart maroon" />
                        </button>
                        <a href="product-view.php">
                          {" "}
                          <img
                            src={`${imageURL}${rec?.productimage}`}
                            style={{width:238,height:239}}
                            alt=""
                            className="img-fluid"
                          />{" "}
                        </a>
                        <h5 className="product-name">
                          <Link
                            to={`/ProductView/${rec?._id}`}
                            className="f-21"
                          >
                            {" "}
                            {rec?.name}
                          </Link>
                        </h5>
                        <ul className="list-inline py-2">
                          <li className="list-inline-item">
                            <i
                              style={{ color: "#F3DE43" }}
                              className={
                                rec?.rating >= 1
                                  ? "fas fa-star"
                                  : rec?.rating >= 0.5
                                  ? "fas fa-star-half-alt"
                                  : "far fa-star"
                              }
                            />
                          </li>
                          <li className="list-inline-item">
                            <i
                              style={{ color: "#F3DE43" }}
                              className={
                                rec?.rating >= 2
                                  ? "fas fa-star"
                                  : rec?.rating >= 1.5
                                  ? "fas fa-star-half-alt"
                                  : "far fa-star"
                              }
                            />
                          </li>
                          <li className="list-inline-item">
                            <i
                              style={{ color: "#F3DE43" }}
                              className={
                                rec?.rating >= 3
                                  ? "fas fa-star"
                                  : rec?.rating >= 2.5
                                  ? "fas fa-star-half-alt"
                                  : "far fa-star"
                              }
                            />
                          </li>
                          <li className="list-inline-item">
                            <i
                              style={{ color: "#F3DE43" }}
                              className={
                                rec?.rating >= 4
                                  ? "fas fa-star"
                                  : rec?.rating >= 3.5
                                  ? "fas fa-star-half-alt"
                                  : "far fa-star"
                              }
                            />
                          </li>
                          <li className="list-inline-item">
                            <i
                              style={{ color: "#F3DE43" }}
                              className={
                                rec?.rating >= 5
                                  ? "fas fa-star"
                                  : rec?.rating >= 4.5
                                  ? "fas fa-star-half-alt"
                                  : "far fa-star"
                              }
                            />
                          </li>
                        </ul>
                        <div className="row justify-content-between align-items-center mt-3">
                          <div className="col-4">
                            <p className="p-price">Price</p>
                            <span className="red-color">${rec?.price}</span>
                          </div>
                          <div className="col-8 text-right">
                            <Link
                              to="#"
                              className="btn maroon-btn-solid "
                              onClick={() => {
                                addToCartHandler(rec?._id, 1);
                              }}
                            >
                              <img
                                src="images/add-to-cart.png"
                                alt=""
                                className="img-fluid mr-2 pt-1"
                              />
                              Add to cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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
    </>
  );
};

export default ProductView;

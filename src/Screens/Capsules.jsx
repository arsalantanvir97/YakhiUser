import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import Pagination from "../components/Padgination";
import InnerPageBanner from "./InnerPageBanner";
const Capsules = ({history}) => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("");
  const [productlogs, setproductlogs] = useState("");

  useEffect(() => {
    getProducts();
  }, [page, perPage, from, to, status, searchString]);

  const getProducts = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/productlogs`,
        method: "GET",
        params: {
          page,
          perPage,
          searchString,
          from,
          to,
          status,
        },
      });

      console.log("res", res);
      setproductlogs(res.data?.product);
    } catch (err) {
      console.log("err", err);
    }
  };
  const addToCartHandler=async(productId, qty)=>{
    history.push(`/MyCart/${productId}?qty=${qty}`);
  }
  return (
    <>
      <section className="capsules">
        <InnerPageBanner />
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row justify-content-center my-5 py-5">
                <div className="col-lg-3 col-md-10">
                  <button
                    className="btn btn-categories"
                    type="button"
                    data-toggle="collapse"
                    data-target="#waterFilters"
                    aria-expanded="true"
                    aria-controls="waterFilters"
                  >
                    Product Categories
                  </button>
                  <div className="collapse" id="waterFilters">
                    <div className="card card-body categories-body px-0">
                      {/* categories */}
                      <ul className="px-4">
                        <li className="mb-4">
                          <a href="#">Capsules</a>{" "}
                        </li>
                        <li className="mb-4">
                          <a href="#">Children Products</a>{" "}
                        </li>
                        <li className="mb-4">
                          <a href="#">Consultations</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">
                            Crystals, Stones, and Spiritual Healing
                          </a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Detox Home</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Geo’Genetic Packages</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Geo’Genetic Protocols</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Hygiene</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Sacred Vaginal Line</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Soaps</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Kits and Bundles</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Oils</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Powders</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Salve</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Seaweed Herbs</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Support</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Teas</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Tinctures</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Tonics</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Uncategorized</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Whole Herbs</a>
                        </li>
                      </ul>
                      {/* Sorted By */}
                      <h4 className="border-bottom border-grey sidebar-heading px-4">
                        Sorted By
                      </h4>
                      <ul className="px-4 pt-3">
                        <li className="mb-4">
                          <a href="#">Popularity</a>{" "}
                        </li>
                        <li className="mb-4">
                          <a href="#">Avg. Rating</a>{" "}
                        </li>
                        <li className="mb-4">
                          <a href="#">Latest</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Price Low To High</a>
                        </li>
                        <li className="mb-4">
                          <a href="#">Price High To Low</a>
                        </li>
                      </ul>
                      {/* Price Range */}
                      <h4 className="border-bottom border-grey sidebar-heading px-4">
                        Price Range
                      </h4>
                      <form className="form-inline mt-3">
                        <input
                          type="number"
                          className="form-control mb-2 mr-sm-2 range-field"
                          placeholder={1000}
                        />
                        <label htmlFor>To</label>
                        <input
                          type="number"
                          className="form-control mb-2 mr-sm-2 range-field"
                          placeholder={10000}
                        />
                      </form>
                      {/* Rating */}
                      <h4 className="border-bottom border-grey sidebar-heading px-4 my-4">
                        Rating
                      </h4>
                      <ul className="list-inline px-4 py-2">
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
                          <i className="fas fa-star rate" />
                        </li>
                      </ul>
                      <ul className="list-inline px-4  py-2">
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
                          <i className="fas fa-star rate" />
                        </li>
                      </ul>
                      <ul className="list-inline px-4  py-2">
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
                          <i className="fas fa-star rate" />
                        </li>
                      </ul>
                      <ul className="list-inline px-4  py-2">
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
                          <i className="fas fa-star rate" />
                        </li>
                      </ul>
                      <ul className="list-inline px-4 py-2">
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
                          <i className="fas fa-star rate" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-10 my-4 my-lg-0">
                  <div className="row justify-content-between align-items-center mb-4">
                    <div className="col-12 mb-3">
                      <div className="search">
                        <input
                          type="text"
                          className="searchTerm form-control"
                          placeholder="What are you looking for?"
                        />
                        <button type="submit" className="clearBtn">
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 col-4">
                      <form action className="form-inline">
                        <label htmlFor="sortBy" className="sortby-label">
                          Sorted By
                        </label>
                        <select className="form-control ml-md-4" id="sortBy">
                          <option>A - Z</option>
                          <option>--</option>
                        </select>
                      </form>
                    </div>
                    <div className="col-md-6 col-8 text-right">
                      <p className="showing-results">
                        Showing 1–09 of 50 results
                      </p>
                    </div>
                  </div>
                  {/* products grid */}
                  <div className="row">
                    {productlogs?.docs?.length > 0 &&
                      productlogs?.docs?.map((prod, index) => (
                        <div className="col-xl-4 col-md-6">
                          <div className="product-card">
                            <button type="button" className="wishlist-btn">
                              <i className="wishlist-icon fas fa-heart maroon" />
                            </button>
                            <Link  to={`/ProductView/${prod?._id}`}>
                              {" "}
                              <img
                                src={`${imageURL}${prod?.productimage}`}
                                alt=""
                                className="img-fluid"
                              />{" "}
                            </Link>
                            <h5 className="product-name">
                              <a href="product-view.php"> {prod?.name}</a>
                            </h5>
                            <ul className="list-inline py-2">
                              <li className="list-inline-item">
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    prod?.rating >= 1
                                      ? "fas fa-star"
                                      : prod?.rating >= 0.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                              </li>
                              <li className="list-inline-item">
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    prod?.rating >= 2
                                      ? "fas fa-star"
                                      : prod?.rating >= 1.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                              </li>
                              <li className="list-inline-item">
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    prod?.rating >= 3
                                      ? "fas fa-star"
                                      : prod?.rating >= 2.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                              </li>
                              <li className="list-inline-item">
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    prod?.rating >= 4
                                      ? "fas fa-star"
                                      : prod?.rating >= 3.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                              </li>
                              <li className="list-inline-item">
                                <i
                                  style={{ color: "#F3DE43" }}
                                  className={
                                    prod?.rating >= 5
                                      ? "fas fa-star"
                                      : prod?.rating >= 4.5
                                      ? "fas fa-star-half-alt"
                                      : "far fa-star"
                                  }
                                />
                              </li>
                            </ul>
                            <div className="row justify-content-between align-items-center mt-3">
                              <div className="col-4">
                                <p className="p-price">Price</p>
                                <span>${prod?.price}</span>
                              </div>
                              <div className="col-8 text-right">
                                <Link to="#" className="btn maroon-btn-solid "   onClick={()=>{
                        addToCartHandler(prod?._id,1)
                      }}>
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

                  {/* pagination */}
                  {productlogs?.docs?.length > 0 && (
                    <Pagination
                      totalDocs={productlogs?.totalDocs}
                      totalPages={productlogs?.totalPages}
                      currentPage={productlogs?.page}
                      setPage={setPage}
                      hasNextPage={productlogs?.hasNextPage}
                      hasPrevPage={productlogs?.hasPrevPage}
                    />
                  )}
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
    </>
  );
};

export default Capsules;

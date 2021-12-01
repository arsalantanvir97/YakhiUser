import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const WishList = () => {
  const [wishtlistuser, setwishtlistuser] = useState([]);
  const [quantity, setquantity] = useState([]);
  const [rerenderWishList, setrerenderWishList] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    getUsersWishList();
  }, [rerenderWishList]);

  const getUsersWishList = async () => {
    const res = await axios.post(`${baseURL}/wishList/userWishList`, {
      id: userInfo?._id,
    });
    console.log("res", res);
    setwishtlistuser(res?.data?.wishListofUser);
  };

  const deleteWishHandler = async (id) => {
    const res = await axios({
      url: `${baseURL}/wishList/deleteAWish/${id}`,
      method: "GET",
    });
    if (res?.status == 200) {
      setrerenderWishList(!rerenderWishList);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-11 mx-auto">
          <section className="my-cart mt-5">
            <div className="row align-items-start">
              <div className="col-12 my-4">
                <h2>WhishList</h2>
              </div>
              <div className="col-xl-11 col-md-12">
                {/* cart table */}
                <div className="table-responsive">
                  <table
                    className="table table-borderless text-center"
                    id="cart-table"
                  >
                    <thead>
                      <tr>
                        <th>IMAGE</th>
                        <th>PRODUCT</th>
                        <th>QUANTITY</th>
                        <th>UNIT PRICE</th>
                        <th>Availability</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                     
                      {wishtlistuser?.length > 0 &&
                        wishtlistuser?.map((wish, index) => (
                          <tr>
                            <td>
                              <div className="cart-product">
                                <img
                                  src={`${imageURL}${wish?.productimage}`}
                                  alt=""
                                  className="img-fluid mx-auto"
                                />
                              </div>
                            </td>
                            <td>{wish?.name}</td>
                            <td>
                              <div id="field1">
                                <div className="quantifier ml-0">
                                  <button
                                    type="button"
                                    id="sub"
                                    className="minus"
                                  >
                                    <i className="fas fa-minus" />
                                  </button>
                                  <input
                                    type="number"
                                    id={1}
                                    min={1}
                                    className="quantity p-md-2 p-0"
                                    max={10}
                                    value={quantity[index]}
                                    onChange={(e) => {
                                      setquantity(Number(e.target.value));
                                    }}
                                    max={wish?.countInStock}
                                  />
                                  <button
                                    type="button"
                                    id="add"
                                    className="plus"
                                  >
                                    <i className="fas fa-plus" />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>£100.00</td>
                            <td>
                              <span className="instock-label">
                                {wish?.countInStock > 0
                                  ? "In Stock"
                                  : "Out of Stock"}
                              </span>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn trash-btn"
                                onClick={() => {
                                  deleteWishHandler(wish?._id);
                                }}
                              >
                                <i className="far fa-trash-alt" />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
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
    </div>
  );
};

export default WishList;

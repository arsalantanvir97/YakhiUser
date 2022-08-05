import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { baseURL, imageURL } from "../utils/api";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import InnerPageBanner from "./InnerPageBanner";
import UnauthorizedAlert from "../components/UnauthorizedAlert";
import Toasty from "../utils/toast";
import { Parser } from "html-to-react";
import DetailsofProduct from "../components/DetailsofProduct";
const htmlToReactParser = new Parser();

const ProductViewByName = ({ match, history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [product, setproduct] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [recommendedproducts, setrecommendedproducts] = useState([]);
  useEffect(() => {
    getSingleProduct();
  }, [match?.params?.id]);

  useEffect(() => {
    console.log("quantity", quantity);
  }, [quantity]);

  const getSingleProduct = async () => {
    try {
      const res = await axios({
        url: `${baseURL}/product/getProductDetailsByName/${match?.params?.id}`,
        method: "GET"
      });
      console.log("res", res?.data?.product);
      setproduct(res?.data?.product);
      const category = await res?.data?.product?.category;
      console.log("category", category);
      const { data } = await axios({
        url: `${baseURL}/product/productsbycategoryid`,
        method: "GET",
        params: {
          productid: res?.data?.product?._id,
          id: res?.data?.product?.category?._id
        }
      });

      console.log("data", data);
      setrecommendedproducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  const addToCartHandler = async () => {
    if (product?.category?.categorytitle == "Geo'Genetics") {
      console.log("abc");
      history?.push(`/GeoGeneticsCheckout/${product?._id}?qty=${quantity}`);
    } else {
      console.log("addToCartHandler");
      history.push(`/MyCart/${product?._id}?qty=${quantity}`);
    }
  };
 
  const subQuantity = async () => {
    quantity == 0 || quantity <= 0
      ? setquantity(0)
      : setquantity(Number(quantity - 1));
  };
  return (
    <>
      <DetailsofProduct
        product={product}
        quantity={quantity}
        subQuantity={subQuantity}
        setquantity={setquantity}
        addToCartHandler={addToCartHandler}
        htmlToReactParser={htmlToReactParser}
        recommendedproducts={recommendedproducts}
        history={history}
        userInfo={userInfo}
        UnauthorizedAlert={UnauthorizedAlert}
      />
    </>
  );
};

export default ProductViewByName;

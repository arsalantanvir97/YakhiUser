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
      history?.push(`/GeoGeneticsCheckout/${match.params.id}?qty=${quantity}`);
    } else {
      console.log("addToCartHandler");
      history.push(`/MyCart/${match.params.id}?qty=${quantity}`);
    }
  };
  const addtoWishLIstHandler = async (product) => {
    console.log("product", product);
    const formData = new FormData();
    formData.append("user_image", product?.productimage);
    formData.append("id", userInfo?._id);
    formData.append("price", product?.price);
    formData.append("brand", product?.brand);
    // formData.append("weight", product?.weight);
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
        await Swal.fire({
          icon: "success",
          title: "",
          text: "Added to Wislist",
          showConfirmButton: false,
          timer: 1500
        });
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
        timer: 1500
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
      <DetailsofProduct
        product={product}
        quantity={quantity}
        subQuantity={subQuantity}
        setquantity={setquantity}
        addToCartHandler={addToCartHandler}
        htmlToReactParser={htmlToReactParser}
        recommendedproducts={recommendedproducts}
        addtoWishLIstHandler={addtoWishLIstHandler}
        userInfo={userInfo}
        UnauthorizedAlert={UnauthorizedAlert}
      />
    </>
  );
};

export default ProductViewByName;

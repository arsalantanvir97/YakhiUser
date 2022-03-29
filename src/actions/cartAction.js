import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_CONSULTATION_ADDRESS
} from "../constants/cartConstants";
import { baseURL } from "../utils/api";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  console.log('addToCartid',id,qty)
  const { data } = await axios.get(
    `${baseURL}/product/getProductDetails/${id}`
  );
  console.log("cartdata", data);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data?.product._id,
      name: data?.product.name,
      image: data?.product.productimage,
      price: data?.product.price,
      countInStock: data?.product.countInStock,
      qty,
    },
  });
  console.log("getState().cart.cartItems", getState()?.cart?.cartItems);
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
console.log('shippingAddressshippingAddresss')
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
export const savConsultaionAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_CONSULTATION_ADDRESS,
    payload: data,
  });
console.log('consultationAddressconsultationAddress')
  localStorage.setItem("consultationAddress", JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  console.log("savePaymentMethoddata", data);
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

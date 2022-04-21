import axios from "axios";
import { CART_CLEAR_ITEMS } from "../constants/cartConstants";
import Swal from "sweetalert2";

import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_CREATE_RESET
} from "../constants/orderConstants";
import { logout } from "../actions/userAction";
import { baseURL } from "../utils/api";
import Toasty from "../utils/toast";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const { data } = await axios.post(`${baseURL}/order/addOrderItems`, order);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    });
    localStorage.removeItem("cartItems");
  } catch (error) {
    Toasty("error", `Order not created`);
  }
};
export const createGeoGeneticsOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const { data } = await axios.post(`${baseURL}/order/addGeoGeneticsOrderItems`, order);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  
  } catch (error) {
    Toasty("error", `Order not created`);
  }
};
export const resetOrder = () => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_CREATE_RESET,
    });

   
  } catch (error) {
    Toasty("error", `Something went wrong`);
  }
};

export const payOrder =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      });

      const { data } = await axios.put(
        `${baseURL}/order/${orderId}/pay`,
        paymentResult
      );
      console.log("payOrderdata", data);
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      });
      Swal.fire({
        icon: "success",
        title: "",
        text: "Order Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Toasty("error", `Order not Updated`);
    }
  };

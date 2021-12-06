import api from "../utils/api";
import Toasty from "../utils/toast";
import { baseURL, imageURL } from "../utils/api";
import axios from "axios";
import Swal from "sweetalert2";

import {
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  NOTIFICATION_FAIL,
  USER_SIGNUP_FAIL,
  NOTIFICATION_REQUEST,
  NOTIFICATION_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userSignUpAction =
  (name, email, password, confirmpassword, history) => async (dispatch) => {
    try {
      // dispatch({
      //   type: ADMIN_LOGIN_REQUEST,
      // })
      console.log("adminLoginAction");

      const body = { firstName: name, email, password, confirmpassword };

      const res = await api.post("/auth/registerUser", body);

      console.log("adminLoginActionres", res);
      if (res?.status == 201) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        history?.replace("/Home");
      }
      //   else if (res?.status == 400) {
      //     Toasty("error", res?.data?.message);
      //     dispatch({
      //       type: USER_SIGNUP_FAIL,
      //       payload: res?.data?.message,
      //     });
      //   }
    } catch (error) {
      console.log("error", error);
      Toasty("error", "error?.response?.data?.message");

      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };

export const userLoginAction =
  (email, password, history) => async (dispatch) => {
    try {
      // dispatch({
      //   type: ADMIN_LOGIN_REQUEST,
      // })
      console.log("adminLoginAction");

      const body = { email, password };

      const res = await api.post("/auth/authUser", body);

      console.log("adminLoginActionres", res);
      if (res?.status == 200) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        history?.replace("/");
      } else if (res?.status == 201) {
        Toasty("error", `Invalid Email or Password`);
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: res?.data?.message,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };
export const userResetPasswordAction =
  (password, confirm_password, code, email,history) => async (dispatch) => {
    try {
      // dispatch({
      //   type: ADMIN_LOGIN_REQUEST,
      // })
      console.log("userReset");

      const body = { password, confirm_password, code, email };

      const res = await api.post("/auth/userresetPassword", body);

      console.log("res", res);
      if (res?.status == 201) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: res?.data,
        });

        localStorage.setItem("userInfo", JSON.stringify(res?.data));
        history.push('/Home')
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
      console.log("reseterror", error?.response?.data?.message);
      Toasty("error", error?.response?.data?.message);

      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      });
    }
  };
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  localStorage.removeItem("cartNumber");

  dispatch({ type: USER_LOGOUT });

  window.location.reload();
};

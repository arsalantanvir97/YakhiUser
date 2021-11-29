import axios from 'axios'
import { CART_CLEAR_ITEMS } from '../constants/cartConstants'

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
} from '../constants/orderConstants'
import { logout } from '../actions/userAction'
import { baseURL } from '../utils/api'
import Toasty from '../utils/toast'

export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      })
  
    
    
  
      const { data } = await axios.post(`${baseURL}/order/addOrderItems`, order, )
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: CART_CLEAR_ITEMS,
        payload: data,
      })
      localStorage.removeItem('cartItems')
    } catch (error) {
     
        Toasty("error", `Order not created`);
    }
  }
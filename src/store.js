import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { UserLoginReducer } from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  orderListReducer,
} from "./reducers/orderReducers";
// import { NotifReducer } from './reducers/notifReducers'

const reducer = combineReducers({
  userLogin: UserLoginReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
  const consultationAddressFromStorage = localStorage.getItem("consultationAddress")
  ? JSON.parse(localStorage.getItem("consultationAddress"))
  : {};
const paymentInfoFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

  const cartnumberFromStorage = localStorage.getItem("cartNumber")
  ? JSON.parse(localStorage.getItem("cartNumber"))
  : {};

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  cart: {
    cartItems: cartItemsFromStorage,
    cartnumber:cartnumberFromStorage,
    shippingAddress: shippingAddressFromStorage,
    consultationAddress:consultationAddressFromStorage,
    paymentInfo: paymentInfoFromStorage,
  },

  // Notif: { notifcationdata:notifdataFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

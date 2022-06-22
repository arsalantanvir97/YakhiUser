import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "react-datepicker/dist/react-datepicker.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'

import { ToastContainer } from "react-toastify";
ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import store from "./redux/store";
import "./i18n/config";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";

axios.defaults.headers["x-icode"] = "qKhDxI15yz";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

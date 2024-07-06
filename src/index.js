import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "routes";
import { Provider } from "react-redux";
import store from "store";
import { createStandaloneToast } from "@chakra-ui/toast";

const { ToastContainer } = createStandaloneToast();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
    <ToastContainer />
  </Provider>
);

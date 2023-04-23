import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; //  Provider of the redux tool/kit
import store from "./Store/Store";

import "./Scss/main.scss"; // Import the main file of the scss
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <App />
    </BrowserRouter>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import LanguageWrapper from "../src/components/LenguageWrapper";
import { Provider } from "react-redux";
import store from "./redux/store";
import Main from "./screens/Main";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./utils/styles/fonts.css";
import "./utils/styles/index.css";

ReactDOM.render(
  <LanguageWrapper>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Main} />
      </BrowserRouter>
    </Provider>
  </LanguageWrapper>,
  document.getElementById("root")
);

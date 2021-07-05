import React, { useState, useReducer } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Spanish from "../../translations/en-es/index.json";
import English from "../../translations/en-us/index.json";
import { lenguageReducer, initialState } from "./reducer";

export const Context = React.createContext();
const LanguageWrapper = (props) => {
  let { Provider } = Context;
  const [state, dispatch] = useReducer(lenguageReducer, initialState);

  const changeLanguage = (e) => {
    state.locale === "en-us"
      ? dispatch({ type: "en-es" })
      : dispatch({ type: "en-us" });
  };
  return (
    <Provider value={{ changeLanguage, locale: state.locale }}>
      <IntlProvider messages={state.messages} locale={state.locale}>
        {props.children}
      </IntlProvider>
    </Provider>
  );
};

LanguageWrapper.propTypes = {
  children: PropTypes.object,
};

export default LanguageWrapper;

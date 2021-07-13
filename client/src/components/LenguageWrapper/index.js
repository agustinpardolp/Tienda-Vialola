import React, { useState, useReducer } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Spanish from "../../translations/en-es/index.json";
import English from "../../translations/en-us/index.json";
import { lenguageReducer, initialState } from "./reducer";
import { lenguageTypes } from "./constants";

export const Context = React.createContext();
const LanguageWrapper = (props) => {
  let { Provider } = Context;
  const [state, dispatch] = useReducer(lenguageReducer, initialState);

  const changeLanguage = (e) => {
    state.locale === lenguageTypes.en_us
      ? dispatch({ type: lenguageTypes.en_es})
      : dispatch({ type: lenguageTypes.en_us});
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

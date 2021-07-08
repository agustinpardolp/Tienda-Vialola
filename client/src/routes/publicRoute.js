/* eslint-disable no-debugger */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ token, component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(localStorage.getItem("token_data"));
    console.log(tokenData, token);
    if (tokenData || token) {
      debugger
      return false;
    }
    else return true;

  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth(props) ? (
          <Redirect from="/*" to="/auth/home" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};


export default PublicRoute;

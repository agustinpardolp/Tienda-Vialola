/* eslint-disable no-debugger */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ token, component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(localStorage.getItem("token_data"));
    if (tokenData) {
      return true;
    } else return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth(props) ? (
          <Redirect from="/*" to="/admin/edit-artwork" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

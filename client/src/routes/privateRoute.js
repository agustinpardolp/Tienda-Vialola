import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ token, component: Component, ...rest }) => {
  const checkAuth = () => {
    let tokenData = JSON.parse(localStorage.getItem("token_data"));
    if (tokenData) {
      return true;
    } else return false;
  };

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          checkAuth(props) ? (
            <Component {...props} />
          ) : (
            <Redirect to="/admin/login" />
          )
        }
      />
    </>
  );
};

export default connect(null, null)(PrivateRoute);

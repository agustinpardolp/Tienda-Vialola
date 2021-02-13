import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({ token, component: Component, ...rest }) => {
  const checkAuth = () => {
    // let tokenData = JSON.parse(localStorage.getItem("token_data"));

    // if (tokenData || token) return true;
    // else return false;
    return false
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
export const mapStateToProps = (state) => {
  // const {
  //   user: { token },
  // } = state;
  // return {
  //   token: !!Object.keys(token).length,
  // };
};

export default connect(mapStateToProps, null)(PublicRoute);

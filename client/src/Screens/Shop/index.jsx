import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { NAVBAR } from "../../constants";
import Product from "./product";
import Products from "./products";
import Divider from "../../components/Divider";

export default function Shop(props) {
  let {
    location: { pathname },
    match
  } = props;
  let path = pathname.split("/")[2];
  return (
    <>
      <Divider titleElements={NAVBAR.SHOPOPTIONS} />
      <Switch>
        <Route exact path={`${match.path}:section`} component={Products} />
        <Route path={`${props.match.path}:section/:productId`} component={Product} />
      </Switch>
    </>
  );
}

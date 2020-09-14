import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { NAVBAR } from "../../constants";
import Product from "./product";
import Products from "./products";
import Divider from "../../components/Divider";

export default function Shop({ match }) {
  return (
    <>
      <Divider titleElements={NAVBAR.SHOPOPTIONS} />
      <Switch>
        <Route exact path={`${match.path}:section`} component={Products} />
        <Route path={`${match.path}:section/:productId`} component={Product} />
      </Switch>
    </>
  );
}

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { NAVBAR } from "../../constants";
import ShopHome from "../Home";
import Products from "./products";
import Divider from "../../components/Divider";

export default function Shop(props) {
  let {
    location: { pathname },
  } = props;
  let path = pathname.split("/")[2];
  return (
    <>
      <Divider titleElements={NAVBAR.SHOPOPTIONS} />
      <Switch>
        <Route path={`${props.match.path}:section`} component={Products} />
      </Switch>
    </>
  );
}

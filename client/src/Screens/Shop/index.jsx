import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {NAVBAR} from "../../constants";
import ShopHome from "./home";
import Products from "./products";
import Divider from "../../components/Divider";

export default function Shop(props) {

    let {
        location: { pathname },
      } = props;
      let path = pathname.split("/")[2];

    
    return (
        <>
        <Divider titleElements={NAVBAR.SHOPOPTIONS}/>
        <Switch>
            <Route   exact
              path={`${props.match.path}home`}
              component={ShopHome}/>
             <Route   exact
              path={`${props.match.path}products/:set?`}
              component={Products}/>
              <Redirect from="/shop" to="/shop/home" />
        </Switch>
        </>
    )
}

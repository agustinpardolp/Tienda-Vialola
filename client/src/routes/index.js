import React, { useCallback, Suspense } from "react";
import { Switch, __RouterContext, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
import Login from "../screens/Login";
import Gallery from "../screens/Gallery";
import Product from "../screens/Artwork";
import Shop from "../screens/Shop";
import Cart from "../screens/Cart";
import Contact from "../screens/Contact";
import Home from "../screens/Home/index";
import Welcome from "../screens/Welcome";
import About from "../screens/About";
import Spinner from "../components/Modals&Spinners/spinner";
import Admin from "../screens/AdminViews";

const Series = React.lazy(() => import("../screens/Series"));

const Routes = () => {
  return (
    <>
      <PublicRoute exact path="/" component={Welcome} />
      <Switch>
        <PublicRoute exact path="/home" component={Home} />
        <PublicRoute path="/gallery/:category/:serie" component={Product} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/cart" component={Cart} />
        <PublicRoute exact path="/contact" component={Contact} />
        <PublicRoute exact path="/about" component={About} />
        <PublicRoute exact path="/gallery" component={Gallery} />
        <PublicRoute path="/shop/" component={Shop} />
        <PublicRoute path="/admin/login" component={Login} />
        <Suspense fallback={<Spinner active></Spinner>}>
          <PublicRoute path="/gallery/:category" component={Series} />
        </Suspense>
      </Switch>
      <PrivateRoute exact path="/admin/edit-artwork" component={Admin} />
    </>
  );
};

export default Routes;

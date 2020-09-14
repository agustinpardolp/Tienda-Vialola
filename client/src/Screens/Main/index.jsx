import React, { useCallback, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, __RouterContext, Redirect } from "react-router-dom";

import { BACKGROUND_IMAGES } from "../../constants";
import NavBar from "../../components/NavBar";
import Login from "../Login";
import Gallery from "../Gallery";
import Product from "../Artwork";
import Shop from "../Shop";
import Cart from "../Cart";
import About from "../About";
import Contact from "../Contact";
import Spinner from "../../components/Modals&Spinners/spinner";
import { StyledMain } from "./styledComponents";
import Home from "../Home/index";
import Welcome from "../Welcome";
import Footer from "../../components/Footer";
const Products = React.lazy(() => import("../Series"));

const Main = ({ location }) => {
  let { pathname } = location;

  const locationSelector = (location) => {
    switch (location) {
      case "/home":
        return BACKGROUND_IMAGES.DEFAULT;
      case "/about":
        return BACKGROUND_IMAGES.ABOUT;
      case "/contact":
        return BACKGROUND_IMAGES.CONTACT;
      default:
        return BACKGROUND_IMAGES.DEFAULT;
    }
  };
  return (
    <>
      <StyledMain img={locationSelector(pathname)} pageTransition={"all 1.8s"}>
        {pathname !== "/" ? <NavBar /> : null}
        <Route exact path="/" component={Welcome} />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/gallery/:name/:serie" component={Product} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
          <Route path="/shop/" component={Shop} />
          <Suspense fallback={<Spinner active></Spinner>}>
            <Route path="/gallery/:name" component={Products} />
          </Suspense>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </StyledMain>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {};
const mapDispatchToProps = (dispatch) => {
  return {
    // fetchloggedUser: () => dispatch(fetchloggedUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

{
}

import React, { useCallback, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch, __RouterContext, Redirect } from "react-router-dom";
import Routes from "../../routes";
import { BACKGROUND_IMAGES } from "../../constants";
import NavBar from "../../components/NavBar";
import { StyledMain } from "./styledComponents";
import {ModalProvider} from "../../context/ModalContext";
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
        <ModalProvider>
          <Routes />
        </ModalProvider>
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

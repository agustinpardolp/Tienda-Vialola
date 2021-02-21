import React from "react";

import Routes from "../../routes";
import { BACKGROUND_IMAGES } from "../../constants";
import NavBar from "../../components/NavBar";
import {ModalProvider} from "../../context/ModalContext";

import { StyledMain } from "./styledComponents";

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


export default Main;


import React from "react";

import Routes from "../../routes";
import { BACKGROUND_IMAGES } from "./constants";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { ModalProvider } from "../../context/ModalContext";

import { StyledMain } from "./styledComponents";

const Main = ({ location }) => {
  let { pathname } = location;

  return (
    <>
      <StyledMain img={BACKGROUND_IMAGES.DEFAULT} pageTransition={"all 1.8s"}>
        {pathname !== "/" ? <NavBar /> : null}
        <ModalProvider>
          <Routes />
          <Footer />
        </ModalProvider>
      </StyledMain>
    </>
  );
};

export default Main;

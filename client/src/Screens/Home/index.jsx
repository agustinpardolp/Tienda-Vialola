import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Carousele from "../../components/Carousel";
import CrossfadeImage from "react-crossfade-image";
import HomeProducts from "./components/HomeProducts";
import HomeText from "./components/HomeText";
import HomeContact from "./components/HomeContact";
import {
  StyledMainHomeProducts,
  StyledHomeContainer,
} from "./styled-components";
import { initialImage, shopProducts, IMAGES } from "./constants";
import { useSlider } from "../../hooks";

function Home() {
  const { imageData, visible } = useSlider(IMAGES);

  const url = `/images/img-background/${imageData}.jpg`;
  return (
    <StyledMainHomeProducts>
      <Carousele img={imageData}>
        <StyledHomeContainer
          img={imageData ? imageData : initialImage}
          pageTransition="all 1.8s"
        ></StyledHomeContainer>
      </Carousele>
      <HomeText />
      <HomeProducts shopProducts={shopProducts} />
      <HomeContact />
    </StyledMainHomeProducts>
  );
}

export default Home;

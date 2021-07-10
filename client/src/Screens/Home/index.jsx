import React, { useState, useEffect } from "react";

import Slider from "../../components/Slider";
import HomeProducts from "./components/HomeProducts";
import HomeText from "./components/HomeText";
import HomeContact from "./components/HomeContact";
import CarouselSlider from "../../components/CarouseleSlider";
import { StyledMainHomeProducts } from "./styled-components";
import { shopProducts, IMAGES } from "./constants";
import { MEDIA_SIZES } from "../../constants";


function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile((window.innerWidth || 0) <= parseInt(MEDIA_SIZES.tablet));
  }, [window.innerWidth]);

  return (
    <StyledMainHomeProducts>
      {isMobile ? <CarouselSlider sliders={IMAGES} /> : <Slider />}
      <HomeText />
      <HomeProducts shopProducts={shopProducts} />
      <HomeContact />
    </StyledMainHomeProducts>
  );
}

export default Home;

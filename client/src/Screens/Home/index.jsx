import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Carousele from "../../components/Carousel";
import { fetchSlider } from "../../redux/slider/actions";
import ImageSlider from "../../components/ImageSlider";
import HomeProducts from "./components/HomeProducts";
import HomeText from "./components/HomeText";
import HomeContact from "./components/HomeContact";
import {
  StyledMainHomeProducts,
  StyledHomeContainer,
} from "./styled-components";
import { initialImage, images, shopProducts } from "./constants";

function Home({ fetchSlider }) {
  useEffect(() => {
    fetchSlider();
  }, []);

  const [imageData, setImageData] = useState({
    homeImage: initialImage,
    heigth: 0,
    initialEffect: "all 1.8s",
  });
  useEffect(() => {
    setImageData({
      homeImage: "slide12",
      heigth: 0,
      initialEffect: "all 1.8s",
    });
  }, []);

  const getImageSlider = (image) => {
    setImageData({
      ...imageData,
      homeImage: image,
    });
  };
  return (
    <StyledMainHomeProducts>
      <Carousele>
        <StyledHomeContainer
          img={imageData.homeImage}
          pageTransition={imageData.initialEffect}
        >
          <ImageSlider getImageSlider={getImageSlider} IMAGES={images} />
        </StyledHomeContainer>
      </Carousele>
      <HomeText />
      <HomeProducts shopProducts={shopProducts} />
      <HomeContact />
    </StyledMainHomeProducts>
  );
}

const mapStateToProps = (state) => {
  const {
    slider: { data: sliders, status },
  } = state;

  return {
    status,
    sliders,
  };
};

export default connect(mapStateToProps, {
  fetchSlider,
})(Home);

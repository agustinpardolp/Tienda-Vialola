import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Carousele from "../../components/Carousel";
import { fetchSlider } from "../../redux/slider/actions";
import ImageSlider from "../../components/ImageSlider";
import HomeProducts from "./components/HomeProducts";
import HomeText from "./components/HomeText";
import {
  StyledMainHomeProducts,
  StyledHomeContainer,
} from "./styled-components";
import HomeContact from "./components/HomeContact";

function Home({ fetchSlider, sliders }) {
  useEffect(() => {
    fetchSlider();
  }, []);
  const shopProducts = [
    {
      id: 6,
      name: "Piezas de arte unicas",
      description: "Piezas de arte unicas",
      img: "pintura-indomitos3.jpg",
      category: { name: "paints" },
    },
    {
      id: 7,
      name: "Bandejas para el mate!",
      description: "Todo para el desayuno",
      img: "bandeja.jpg",
      category: { name: "objets" },
    },
    {
      id: 8,
      name: "Personajes en madera, pintados!",
      description: "Personajes en madera, pintados!",
      img: "lostres.jpg",
      category: { name: "objets" },
    },
    {
      id: 9,
      name: "Poupurri!",
      description: " Oleo sobre lienzo. 90x90",
      img: "pintura-indomitos10.jpg",
      category: { name: "paints" },
    },
  ];
  const initialImage = "slide11";

  const images = [
    { NAME: "slide8" },
    { NAME: "slide5" },
    { NAME: "slide15" },
    { NAME: "slide6" },
    { NAME: "slide3" },
    { NAME: "slide10" },
    { NAME: "slide13" },
    { NAME: "slide11" },
    { NAME: "slide12" },
    { NAME: "slide4" },
  ];

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

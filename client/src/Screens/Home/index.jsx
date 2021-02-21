import React, { useEffect } from "react";
import { connect } from "react-redux";

import Carousele from "../../components/Carousel";
import { fetchSlider } from "../../redux/slider/actions";

import HomeProducts from "./HomeProducts";
import { StyledMainHomeProducts } from "./styled-components";

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
  return (
    <>
      <StyledMainHomeProducts>
        <Carousele sliders= { sliders } />
        <HomeProducts shopProducts={shopProducts} />
      </StyledMainHomeProducts>
    </>
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

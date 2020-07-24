import React from "react";
import styled from "styled-components";
import Carousele from "../../../components/Carousel";
import HomeProducts from "../home/HomeProducts";

const StyledMainHomeProducts = styled.div`
  margin-top: 2%;
  margin-right: 5%;
    margin-left: 5%;
`;

export default function ShopHome() {
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
        <Carousele />
        <HomeProducts shopProducts={shopProducts} />
      </StyledMainHomeProducts>
    </>
  );
}

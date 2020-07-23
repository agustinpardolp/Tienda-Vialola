import React from "react";
import styled from "styled-components";
import Carousele from "../../../components/Carousel";
import HomeProducts from "../home/HomeProducts";

const StyledMainHomeProducts = styled.div`
  margin-top: 2%;
`;

export default function ShopHome() {
  const shopProducts = [
    {
      id: 6,
      name: "Diablo y pajaro",
      description: "Oleo sobre lienzo. 90x90. ",
      img: "pintura-indomitos3.jpg",
      category: { name: "paints" },
    },
    {
      id: 7,
      name: "Diablo y pajaro - Blanco y Negro",
      img: "pintura-indomitos7.jpg",
      category: { name: "paints" },
    },
    {
      id: 8,
      name: "La charla",
      description: " Oleo sobre lienzo. 90x90",
      img: "pintura-indomitos8.jpg",
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

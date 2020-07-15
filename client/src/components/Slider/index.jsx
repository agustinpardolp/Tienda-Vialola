import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Transition } from "react-transition-group";
import SerieCard from "../Series/serieCards";

const ProductSlider = styled.div`
  display: flex;
  justify-content: center;
  width:${props=>props.imgQuantity && props.imgQuantity*90/7};
`;


const ImgSlider = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 0.8rem;
  transition: all 1.8s;
  -webkit-transform: scale(1);
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
  }
`;

const StyledSlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const StyledSpan = styled.span`
  align-self: center;
  margin-right: 1%;
    margin-left: 1%;
`;


function Slider({ products, handleChangeImage }) {
  const [productIndex, setProductIndex] = useState(0);

  let firstFourProducts =
    products.length > 7
      ? products.slice(productIndex, productIndex + 7)
      : products;

  const nextProduct = () => {
    const lastProdIndex = products.length - 7;
    const resetProductIndex = productIndex === lastProdIndex;
    const index = resetProductIndex ? 0 : productIndex + 1;
    setProductIndex(index);
  };

  const prevProduct = () => {
    const lastProdIndex = products.length - 7;
    const resetProductIndex = productIndex === 0;
    const index = resetProductIndex ? lastProdIndex : productIndex - 1;
    setProductIndex(index);
  };

  return (
    <>
      <StyledSlideContainer>
        <StyledSpan onClick={prevProduct}>Back</StyledSpan>
        <ProductSlider imgQuantity={products.length}>
          {firstFourProducts.length &&
            firstFourProducts.map((product) => {
              return (
                <ImgSlider
                  src={`/images/img-products/${product.category.name}/${product.img}`}
                  onClick={() => {
                    handleChangeImage(product);
                  }}
                ></ImgSlider> 
              );
            })}
        </ProductSlider>
        <StyledSpan onClick={nextProduct}>Next</StyledSpan>
      </StyledSlideContainer>
    </>
  );
}

export default Slider;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Card from "../../components/Card";

const ProductSlider = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `repeat(${props.col.length}, ${(12 * 8) / props.col.length}%)`};
  grid-gap: ${(props) => `${(10 * 7) / props.col.length}px`};
  width: 100%;
  height: 150px;
  justify-content: center;
  width: ${(props) => props.col && (props.col.length * 90) / 8};
`;

const ImgSlider = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
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
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    `${10}% ${(80 * props.col.length) / 8}% ${10}%`};
  justify-content: center;
  margin-top: 2%;
  margin-right: 4%;
  margin-left: 4%;
  width: 80%;
`;

const StyledSlideContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButtonContainer = styled.div`
  align-self: center;
`;

const StyledCarContainer = styled.div`
  width: 150px;
`;

function Slider({ products, handleChangeImage, fontSize }) {
  const [productIndex, setProductIndex] = useState(0);

  let firstSevenProducts =
    products.length > 7
      ? products.slice(productIndex, productIndex + 8)
      : products;

  const nextProduct = () => {
    const lastProdIndex = products.length - 8;
    const resetProductIndex = productIndex === lastProdIndex;
    const index = resetProductIndex ? 0 : productIndex + 1;
    setProductIndex(index);
  };

  const prevProduct = () => {
    const lastProdIndex = products.length - 8;
    const resetProductIndex = productIndex === 0;
    const index = resetProductIndex ? lastProdIndex : productIndex - 1;
    setProductIndex(index);
  };

  return (
    <>
      <StyledSlideContainer>
        <StyledDiv col={firstSevenProducts}>
          <StyledButtonContainer>
            <span onClick={prevProduct}>Back</span>
          </StyledButtonContainer>
          {console.log("LENGTH", firstSevenProducts)}
          <ProductSlider col={firstSevenProducts}>
            {firstSevenProducts.length &&
              firstSevenProducts.map((product) => {
                return (
                  <Card
                    element={product}
                    handleChangeImage={handleChangeImage}
                    category={product.category.name}
                    fontSize={fontSize}
                  ></Card>
                );
              })}
          </ProductSlider>
          <StyledButtonContainer>
            <span onClick={nextProduct}>Next</span>
          </StyledButtonContainer>
        </StyledDiv>
      </StyledSlideContainer>
    </>
  );
}

export default Slider;

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Card from "../../components/Card";

const ElementSlider = styled.div`
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

function Slider({ elements, handleChangeImage, fontSize, noTitle }) {
  const [elementIndex, setElementIndex] = useState(0);

  let firstSevenElements =
    elements.length > 7
      ? elements.slice(elementIndex, elementIndex + 8)
      : elements;

  const nextElement = () => {
    const lastElementIndex = elements.length - 8;
    const resetElementIndex = elementIndex === lastElementIndex;
    const index = resetElementIndex ? 0 : elementIndex + 1;
    setElementIndex(index);
  };

  const prevElement = () => {
    const lastElementIndex = elements.length - 8;
    const resetElementIndex = elementIndex === 0;
    const index = resetElementIndex ? lastElementIndex : elementIndex - 1;
    setElementIndex(index);
  };

  return (
    <>
      <StyledSlideContainer>
        <StyledDiv col={firstSevenElements}>
          <StyledButtonContainer>
            <span onClick={prevElement}>Back</span>
          </StyledButtonContainer>
          <ElementSlider col={firstSevenElements}>
            {firstSevenElements.length &&
              firstSevenElements.map((element) => {
                console.log("noTitle", noTitle)
                return (
                  <Card
                    element={element}
                    handleChangeImage={handleChangeImage}
                    category={element.category.name}
                    fontSize={fontSize}
                    noTitle={noTitle}
                  ></Card>
                );
              })}
          </ElementSlider>
          <StyledButtonContainer>
            <span onClick={nextElement}>Next</span>
          </StyledButtonContainer>
        </StyledDiv>
      </StyledSlideContainer>
    </>
  );
}

export default Slider;

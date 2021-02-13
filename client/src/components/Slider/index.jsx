import React, { useState } from "react";
import Card from "../../components/Card";
import {
  ElementSlider,
  StyledDiv,
  StyledSlideContainer,
  StyledButtonContainer,
} from "./styled-components";

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

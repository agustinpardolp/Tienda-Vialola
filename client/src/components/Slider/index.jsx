import React from "react";
import { IMAGES } from "../../constants";
import { useSlider } from "../../hooks/useSlider";
import TransitionWrapper from "../transition";
import { initialImage } from "./constants";

import {
  StyledSliderContainer,
  StyledHomeContainer,
} from "./styled-components";

const Slider = () => {
  const { imageData } = useSlider(IMAGES);
  return (
    <TransitionWrapper>
      <StyledSliderContainer>
        <StyledHomeContainer
          img={imageData ? imageData : initialImage}
          pageTransition="all 1.8s"
        />
      </StyledSliderContainer>
    </TransitionWrapper>
  );
};
export default Slider;

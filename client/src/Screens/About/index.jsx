import React from "react";

import { FadeIn } from "../../components/ImageSlider/animations";

import {
  StyledAboutContainer,
  StyledMainContainer,
  StyledInfoContainer,
} from "./styled-components";

import { BACKGROUND_IMAGES } from "./constants";
import { FormattedMessage } from "react-intl";

function About() {
  return (
    <FadeIn duration="1s">
      <StyledMainContainer>
        <StyledInfoContainer>
          <p>
            <FormattedMessage id="about.info" values={{ html: <br/> }} />
          </p>
        </StyledInfoContainer>
        <StyledAboutContainer
          img={BACKGROUND_IMAGES.ABOUT}
        ></StyledAboutContainer>
      </StyledMainContainer>
    </FadeIn>
  );
}

export default About;

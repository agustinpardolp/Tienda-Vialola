import React from "react";

import { FadeIn } from "../../components/ImageSlider/animations";

import {
  StyledImageContainer,
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
            <FormattedMessage id="about.info" values={{ html: <br /> }} />
          </p>
        </StyledInfoContainer>

        <StyledImageContainer img={BACKGROUND_IMAGES.ABOUT} />
      </StyledMainContainer>
    </FadeIn>
  );
}

export default About;

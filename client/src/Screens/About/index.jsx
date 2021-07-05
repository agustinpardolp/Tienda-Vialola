import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchAbout } from "../../redux/about/actions/about-actions";
import { FadeIn } from "../../components/ImageSlider/animations";

import { StyledAboutContainer, StyledMainContainer, StyledInfoContainer} from "./styled-components";

import { BACKGROUND_IMAGES } from "./constants";

function About({ fetchAbout, aboutInfo }) {
  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  return (
    <FadeIn duration="1s">
      <StyledMainContainer>
        <StyledInfoContainer>
          <p>{aboutInfo.info}</p>
        </StyledInfoContainer>
        <StyledAboutContainer
          img={BACKGROUND_IMAGES.ABOUT}
        ></StyledAboutContainer>
      </StyledMainContainer>
    </FadeIn>
  );
}

const mapStateToProps = (state) => {
  const {
    about: { data: aboutInfo },
  } = state;
  return {
    aboutInfo,
  };
};

export default connect(mapStateToProps, { fetchAbout })(About);

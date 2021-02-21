import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchAbout } from "../../redux/about/actions/about-actions";

import { StyledAboutContainer } from "./styled-components";

function About({ fetchAbout, aboutInfo }) {
  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  return (
    <StyledAboutContainer>
      <div>
        <p>{aboutInfo.info}</p>
      </div>
    </StyledAboutContainer>
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

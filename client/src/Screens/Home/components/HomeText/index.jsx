import React from "react";
import { FormattedMessage } from "react-intl";
import { StyledHomeText } from "./styled-components";

const HomeText = () => {
  return (
    <StyledHomeText>
      <FormattedMessage id="home.invitation" />
    </StyledHomeText>
  );
};

export default HomeText;

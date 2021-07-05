import React from "react";
import { FormattedMessage } from "react-intl";
import Media from "./components/Media";
import { StyledFooter, StyledFooterContainer } from "./styled-components";

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledFooter>
        <Media />
        <p className="footer_copyrigth">
          <FormattedMessage id="footer.copyrigth" />
        </p>
        <p className="footer_developed">
          <FormattedMessage id="footer.developed" />
        </p>
      </StyledFooter>
    </StyledFooterContainer>
  );
}

export default Footer;

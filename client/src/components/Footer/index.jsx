import React from "react";
import { FOOTER } from "../../constants";
import { StyledFooter, StyledSpan, StyledLink } from "./styled-components";

function Footer({ back }) {
  return (
    <StyledFooter>
      <StyledSpan>{FOOTER.RIGHTS}</StyledSpan>
      {back && <StyledLink to={`${back}`}>{FOOTER.BACK}</StyledLink>}
    </StyledFooter>
  );
}

export default Footer;

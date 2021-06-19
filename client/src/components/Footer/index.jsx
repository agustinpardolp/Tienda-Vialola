import React from "react";
import {
  StyledFooter,
  StyledFooterContainer,
  StyledInfo,
} from "./styled-components";
import InfoList from "./components/InfoList";
import { myArt, followMe, writeToMe } from "./constants";

function Footer() {
  return (
    <StyledFooterContainer>
      <StyledInfo>
        <p>
          Copyrigth 2021 | Dolores Pardo | Please don't reproduce my work
          elsewhere without prior consent / Todos los derechos reservados
        </p>
      </StyledInfo>
      <StyledFooter>
        <InfoList list={myArt} label={"MY ART"} />
        <InfoList list={followMe} label={"FOLLOW ME"} />
        <InfoList list={writeToMe} label={"WRITE TO ME"} />
      </StyledFooter>
    </StyledFooterContainer>
  );
}

export default Footer;

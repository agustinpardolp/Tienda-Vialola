import React from "react";

import TransitionWrapper from "../../components/transition";

import { StyledCarouseleContainer } from "./styled-components";

export default function CarouselSlider({ children }) {
  return (
    <TransitionWrapper>
      <StyledCarouseleContainer>
        {children}
      </StyledCarouseleContainer>
    </TransitionWrapper>
  );
}

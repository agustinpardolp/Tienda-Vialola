import React from "react";
import { Carousel } from "react-bootstrap";
import {
  StyledCarouseleContainer,
  StyledCarouseleItem,
} from "./styled-components";

export default function CarouselSlider({ sliders }) {
  return (
      <StyledCarouseleContainer>
        <Carousel controls={false} indicators={false} fade>
          {sliders &&
            sliders.map((slide) => (
              <StyledCarouseleItem key={slide.NAME} img={slide.NAME} />
            ))}
        </Carousel>
      </StyledCarouseleContainer>
  );
}

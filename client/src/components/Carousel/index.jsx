import React from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import TransitionWrapper from "../../components/transition";

import { StyledCarouseleContainer } from "./styled-components";

export default function CarouselSlider({ sliders }) {
  const { history } = useHistory;
  const handleClick = (pathname) => {
    history.push(pathname);
  };
  return (
    <TransitionWrapper>
      <StyledCarouseleContainer>
        <Carousel>
          {sliders &&
            sliders.map((slide) => {
              return (
                <Carousel.Item key={slide.id}>
                  <img
                    className="d-block w-100"
                    src={`/images/img-carousel/${slide.img}`}
                    alt="First slide"
                    onClick={() =>
                      slide.pathname ? handleClick(slide.pathname) : null
                    }
                  />
                  <Carousel.Caption>
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </StyledCarouseleContainer>
    </TransitionWrapper>
  );
}

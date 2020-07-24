import React from 'react';
import styled from "styled-components";
import {Carousel} from "react-bootstrap";
import TransitionWrapper from "../../components/transition";

const StyledCarouseleContainer = styled.div`
display:grid;
.carousel-inner img {
    width: 100%;
    max-height: 60vh;
    height: 60vh;
}

.carousel-inner{
 height: 60vh;
}


`;

export default function CarouselSlider() {
    return (
      <TransitionWrapper>
      <StyledCarouseleContainer>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/img-carousel/11.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Macetas super coloridas</h2>
            <p>Encontrá toda la variedad que buscas para darle color jardin</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/img-carousel/9.jpg"}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h2>¿Lo tenes a este loquillo?</h2>
            <p>Este y muchos mas te esperan; Hechos en madera y pintados a mano.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/img-carousel/1.jpg"}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h2>La banda</h2>
            <p>Colgantes, llaveros, </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </StyledCarouseleContainer>
      </TransitionWrapper>
    )
}

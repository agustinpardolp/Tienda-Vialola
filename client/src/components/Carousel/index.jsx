import React from 'react';
import styled from "styled-components";
import {Carousel} from "react-bootstrap";

const StyledCarouseleContainer = styled.div`
display:grid;
.carousel-inner img {
    width: 100%;
    max-height: 70vh;
}

.carousel-inner{
 height: 70vh;
}


`;

export default function CarouselSlider() {
    return (
      <StyledCarouseleContainer>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/img-products/paints/milPiernas.jpg"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/img-products/paints/pintura-elementos1.jpg"}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={"/images/img-products/paints/pintura-elementos2.jpg"}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </StyledCarouseleContainer>
    )
}

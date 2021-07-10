import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const StyledCarouseleContainer = styled.div`
  display: grid;
  .carousel-inner img {
    height: 60vh;
    max-height: 60vh;
    width: 100%;
  }
  .carousel-inner {
    height: 60vh;
  }
`;
const StyledCarouseleItem = styled(Carousel.Item)`
  background-size: cover;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat center;`};
  height: 80vh;
  position: absolute;
`;

export { StyledCarouseleContainer, StyledCarouseleItem };

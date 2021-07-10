import styled from "styled-components";

const StyledSliderContainer = styled.div`
  display: grid;
  height: 80vh;
  .carousel-inner img {
    width: 100%;
    max-height: 60vh;
    height: 60vh;
  }

  .carousel-inner {
    height: 70vh;
  }
`;

const StyledHomeContainer = styled.img`
  background-size: cover;
  position: absolute;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat center;`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 80vh;
  text-align: center;
  transition: ${(props) => `${props.pageTransition}`};
  transition-delay: 100ms;
  width: 100%;
`;


export { StyledSliderContainer, StyledHomeContainer };

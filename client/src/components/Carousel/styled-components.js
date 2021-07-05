import styled from "styled-components";

const StyledCarouseleContainer = styled.div`
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

export { StyledCarouseleContainer };

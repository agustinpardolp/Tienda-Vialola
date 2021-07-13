import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledMain = styled.div`
  height: 80vh;
  max-height: 100vh;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
  }
`;
const StyledContainer = styled.div`
  height: 70vh;
  width: 100%;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    height: 45vh;
  }
`;

const StyledShopImage = styled.div`
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/shop.jpg") no-repeat center;`};
  background-size: contain;
  height: 100%;
  margin: 0 10%;
  position: relative;
  @media ${DEVICES_MAX_WIDTH.laptop} {
    margin: 0 3%;
    height: 100%;
  }
`;

const StyledTextContainer = styled.div`
  position: absolute;
  right: 10%;
  text-align: justify;
  top: 40%;
  width: 25rem;
  h2,
  p,
  a {
    color: var(--wildSand);
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.2em;
  }
  a{
    cursor: pointer;
  }
  @media ${DEVICES_MAX_WIDTH.laptop} {
    right: 5%;
  }
  @media ${DEVICES_MAX_WIDTH.tablet} {
    right: 6%;
    width: 20rem;
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1em;
    }
  }
`;

export { StyledMain, StyledShopImage, StyledContainer, StyledTextContainer };

import styled from "styled-components";
import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledMainHomeProducts = styled.div`
  margin: 0 0 5% 0;
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
  @media ${DEVICES_MAX_WIDTH.tablet} {
    background: ${(props) =>
      `url("${process.env.PUBLIC_URL}/images/img-background/slide11.jpg") no-repeat center;`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
`;

export { StyledMainHomeProducts, StyledHomeContainer };

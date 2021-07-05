import styled from "styled-components";

const StyledMainHomeProducts = styled.div`
  margin: 0 0 5% 0;
`;

const StyledHomeContainer = styled.div`
  background-size: cover;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat center;`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100%;
  text-align: center;
  transition: ${(props) => `${props.pageTransition}`};
  transition-delay: 300ms;
  width: 100%;
`;

export { StyledMainHomeProducts, StyledHomeContainer };

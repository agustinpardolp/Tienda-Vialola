import styled from "styled-components";

export const StyledMain = styled.div `
background-size: cover;
height: 100%;
width: 100%;
background: ${(props) =>
  `url("${process.env.PUBLIC_URL}/images/img-background/${props.img}.jpg") no-repeat fixed center;`};
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
transition: ${(props) => `${props.pageTransition}`};
text-align: center;
transition-delay: 300ms;
`;
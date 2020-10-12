import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPhotoDiv = styled.div`
  margin: 1%;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    !props.filePath
      ? `url("${process.env.PUBLIC_URL}/images/img-artwork/${props.category}/${props.img}") no-repeat center;`
      : `url("${process.env.PUBLIC_URL}${props.filePath}${props.img}") no-repeat center;`};
  background-size: cover;
  position: relative;
  -webkit-transform: scale(1);
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  backface-visibility: hidden;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
  }
`;

const StyledContainer = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const StyledLink = styled(Link)`
  text-decoration: none !important;
  color: var(--mainColorFont) !important;
  display: block;
  width: 100%;
  font-size: 35px;
  text-transform: capitalize;
  font-family: var(--fontVar);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  &:hover {
    color: var(--mainColorFont) !important;
  }
`;

const StyledCategoryTittle = styled.div`
  text-decoration: none !important;
  transition: all 0.5s;
  position: absolute;
  color: var(--mainColorFont) !important;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2rem")};
  :hover {
    color: var(--mainColorFont);
    transition: all 0.4s ease 0s;
  }
`;

export { StyledCategoryTittle, StyledLink, StyledContainer, StyledPhotoDiv };

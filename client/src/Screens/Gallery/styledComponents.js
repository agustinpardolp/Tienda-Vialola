import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCardCategory = styled.div`
  height: 100%;
  width: 100%;
  margin: 0.5%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-products/${props.category}/${props.img}") center;`};
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

export const StyledLink = styled(Link)`
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
  &:hover{
    color: var(--mainColorFont) !important;
  }
`;

export const StyledCategoryTittle = styled.div`
  text-decoration: none !important;
  transition: all 0.5s;
  position:absolute;
  :hover {
    color: "var(--mainColorFont)";
    transition: all 0.4s ease 0s;
  }
`;

export const CategoriesContainer = styled.div`
   display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 1%;
    margin: 3%;
    height: 65vh;

`;

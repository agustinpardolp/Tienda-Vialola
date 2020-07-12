import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCardCategory = styled.div`
  height: 60vh;
  width: 15%;
  margin: 0.5%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-products/${props.category}/${props.img}") center;`};
  object-fit: contain;
  -webkit-background-size: cover;
  transition-duration: 2s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none !important;
  display: block;
  width: 100%;
  font-size: 35px;
  text-transform: capitalize;
  font-family: var(--fontVar);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledCategoryTittle = styled.span`
  text-decoration: none !important;
  transition: all 0.5s;
  :hover {
    color: "var(--mainColorFont)";
    transition: all 0.4s ease 0s;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

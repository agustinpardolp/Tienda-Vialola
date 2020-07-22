import React from "react";
import styled from "styled-components";
import { OverlayAnimation } from "../../utils/baseStyleAnimations";
import {
  StyledCardCategory,
  StyledLink,
  StyledCategoryTittle,
} from "./styledComponents";

const StyledContainer = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
`;

const CategoryCard = ({ category }) => {
  return (
    <StyledContainer>
    <StyledCardCategory
      key={category.id}
      img={category.img}
      category={category.name}
    >
      <StyledLink to={`/gallery/${category.name.toLowerCase()}`}>
        <OverlayAnimation>
          <StyledCategoryTittle>{category.name}</StyledCategoryTittle>
        </OverlayAnimation>
      </StyledLink>
    </StyledCardCategory>
    </StyledContainer>
  );
};
export default React.memo(CategoryCard, (prevProps, nextProps) => {
  return prevProps.category.id === nextProps.category.id;
});

import React from "react";

import { OverlayAnimation } from "../../utils/baseStyleAnimations";
import {
  StyledCardCategory,
  StyledLink,
  StyledCategoryTittle,
} from "./styledComponents";

const CategoryCard = ({ category }) => {
  return (
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
  );
};
export default React.memo(CategoryCard, (prevProps, nextProps) => {
  return prevProps.category.id === nextProps.category.id;
});

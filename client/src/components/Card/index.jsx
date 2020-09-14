import React from "react";
import {
  StyledCategoryTittle,
  StyledLink,
  StyledContainer,
  StyledPhotoDiv,
} from "./styled-components";

import { OverlayAnimation } from "../../utils/baseStyleAnimations";
import TransitionWrapper from "../../components/transition";

export default function StyledCard({
  element,
  handleChangeImage,
  fontSize,
  category,
  path,
  noTitle,
  filePath,
  img,
  callBack,
  height,
  width,
}) {
  return (
    <StyledContainer height={height} width={width}>
      <TransitionWrapper>
        <StyledPhotoDiv
          key={element.id}
          filePath={filePath}
          img={img ? img : element.img}
          category={
            category
              ? category
              : element.category
              ? element.category.name
              : null
          }
          onClick={
            handleChangeImage
              ? () => {
                  handleChangeImage(element);
                }
              : callBack
          }
        >
          {handleChangeImage ? (
            <OverlayAnimation>
              <StyledCategoryTittle fontSize={fontSize}>
                {!noTitle ? element.name : null}
              </StyledCategoryTittle>
            </OverlayAnimation>
          ) : (
            <StyledLink to={path}>
              <OverlayAnimation>
                <StyledCategoryTittle fontSize={fontSize}>
                  {!noTitle ? element.name : null}
                </StyledCategoryTittle>
              </OverlayAnimation>
            </StyledLink>
          )}
        </StyledPhotoDiv>
      </TransitionWrapper>
    </StyledContainer>
  );
}

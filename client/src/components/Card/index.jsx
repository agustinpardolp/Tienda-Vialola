import React from "react";

import { OverlayAnimation } from "../../utils/baseStyleAnimations";
import TransitionWrapper from "../Transition";

import {
  StyledCategoryTittle,
  StyledLink,
  StyledContainer,
  StyledPhotoDiv,
} from "./styled-components";
import { PATHS } from "../../routes/constants";

export default function StyledCard({
  element,
  handleChangeImage,
  fontSize,
  category,
  path = PATHS.home,
  noTitle,
  filePath,
  img,
  callBack,
  height,
  width,
  backgroundSize,
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
          backgroundSize={backgroundSize}
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

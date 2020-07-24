import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OverlayAnimation } from "../../utils/baseStyleAnimations";
import TransitionWrapper from "../../components/transition";

const StyledPhotoDiv = styled.div`
  margin: 1%;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-products/${props.category}/${props.img}") no-repeat center;`};
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

const StyledButton = styled(Link)`
  color: white;
  padding: 1%;
  top: 80%;
  right: 5%;
`;
const StyledInfo = styled.h4`
  color: white;
  padding: 1%;
  top: 80%;
  right: 5%;
`;
const StyledContainer = styled.span`
  position: relative;
  display: block;
  overflow: hidden;
  height: 100%;
  width: 100%;
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
  &:hover {
    color: var(--mainColorFont) !important;
  }
`;

export const StyledCategoryTittle = styled.div`
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
export default function StyledCard({
  element,
  handleChangeImage,
  fontSize,
  category,
  path,
  noTitle
}) {
  return (
    <StyledContainer>
      <TransitionWrapper>
        <StyledPhotoDiv
          key={element.id}
          img={element.img}
          category={category ? category : element.category.name}
          onClick={
            handleChangeImage
              ? () => {
                  handleChangeImage(element);
                }
              : null
          }
        >
          {handleChangeImage ? (
            <OverlayAnimation>
              <StyledCategoryTittle fontSize={fontSize}>
              {!noTitle?element.name:null}
              </StyledCategoryTittle>
            </OverlayAnimation>
          ) : (
            <StyledLink to={path}>
              <OverlayAnimation>
                <StyledCategoryTittle fontSize={fontSize}>
                  {!noTitle?element.name:null}
                </StyledCategoryTittle>
              </OverlayAnimation>
            </StyledLink>
          )}
        </StyledPhotoDiv>
      </TransitionWrapper>
    </StyledContainer>
  );
}




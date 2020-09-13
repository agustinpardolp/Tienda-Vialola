import React from "react";
import styled from "styled-components";
import { DEVICES, MEDIA_SIZES } from "../../constants";

const rowHandler = (screenWidth, columns, elementsLength) => {
  let width = parseInt(screenWidth.match(/\d/g).join(""));
  return Math.ceil(((width / columns) * elementsLength) / width);
};
const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: ${(props) =>
    props.row ? `repeat(${props.row}, 100%)` : "repeat(1, 100%)"};
  padding: 3%;
  height: 60vh;

  @media ${DEVICES.desktop} {
    grid-template-columns: repeat(5, 0.5fr);
  }
  @media ${DEVICES.tablet} {
    display: block;
    grid-template-columns: repeat(2, 0.5fr);
  }
  @media ${DEVICES.laptop} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: ${(props) =>
      props.elementsLength &&
      `repeat(
        ${rowHandler(MEDIA_SIZES.laptop, 2, props.elementsLength)},
        100%
      )`};
  }
  @media ${DEVICES.mobileL} {
    display: block;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${DEVICES.mobileM} {
    display: block;
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${DEVICES.mobileS} {
    display: block;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function CardGrid({ children, row, elementsLength }) {
  return (
    <StyledPhotoGrid row={row} elementsLength={elementsLength}>
      {children}
    </StyledPhotoGrid>
  );
}

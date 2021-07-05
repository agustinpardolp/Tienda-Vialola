import React from "react";

import { StyledPhotoGrid } from "./styled-components";

export const rowHandler = (screenWidth, columns, elementsLength) => {
  let width = parseInt(screenWidth.match(/\d/g).join(""));
  return Math.ceil(((width / columns) * elementsLength) / width);
};

export default function CardGrid({ children, row, col, elementsLength, heigth, width, gap }) {
  return (
    <StyledPhotoGrid row={row} col={col} elementsLength={elementsLength} heigth={heigth} width={width} gap={gap}>
      {children}
    </StyledPhotoGrid>
  );
}

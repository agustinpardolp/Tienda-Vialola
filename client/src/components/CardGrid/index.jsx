
import React from 'react'
import styled from "styled-components";

const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: repeat(5, 50%);
  padding: 3%;
  height: inherit;
`;


export default function CardGrid({children}) {
    return (
        <StyledPhotoGrid>
            {children}
        </StyledPhotoGrid>
    )
}

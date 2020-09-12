import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledPhotoDiv = styled.div`
  margin: 1%;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-artwork/${props.category}/${props.img}") no-repeat center;`};
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

const StyledPhotoOverlay = styled.span`
  width: 100%;
  height: 100%;
  
  background: rgba(0, 0, 0, 0);
  right: 0%;
  position: absolute;
  z-index: 10000;
  &:hover {
  }
  div {
    opacity: 0;
    transition: 0.4s ease-in-out;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 4%;
    &:hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.6);
    }
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
`;

export default function SerieCards({ serie, handleChangeImage }) {

  return (
    <StyledContainer >
      <StyledPhotoDiv
        key={serie.id}
        img={serie.img}
        category={serie.category.name}
        onClick={handleChangeImage?()=>{handleChangeImage(serie)}:null }
      >
        <StyledPhotoOverlay>
          <div>
            {handleChangeImage ? (
              <StyledInfo>{serie.name}</StyledInfo> 
            ) : (
              <StyledButton
                to={`/gallery/${serie.category.name}/${serie.name}`}
              >
                {serie.name}
              </StyledButton>
            )}
          </div>
        </StyledPhotoOverlay>
      </StyledPhotoDiv>
    </StyledContainer>
  );
}

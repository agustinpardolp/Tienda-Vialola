import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledPhotoDiv = styled.div`
  margin: 1%;
  width:100%;
  height:100%;
  background: ${(props) =>
    `url("${process.env.PUBLIC_URL}/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  background-size: cover;
  position: relative;
  -webkit-transform: scale(1);
    transform: scale(1);
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
  &:hover{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: transform .3s ease-in-out;
    backface-visibility: hidden;
  }
  /*transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  &:hover {
    opacity: 1;
    filter: alpha(opacity=100);
    background: rgba(0, 0, 0, 0.6);
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
  } */
`;

const StyledPhotoOverlay = styled.span`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  height: 100%;
  right: 0%;
  position: absolute;
  z-index: 10000;
  /* transition: 0.4s ease-in-out; */
  &:hover {
    
  }
  div {
    opacity: 0;
    transition: 0.4s ease-in-out;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: flex-end;
    padding: 4%;
    &:hover {
        opacity: 1;
    background: rgba(0, 0, 0, 0.6);
    }
  }
`;
const StyledButton = styled(Link)`
color:white;
padding:1%;
top: 80%;
right: 5%;
`;
const StyledContainer = styled.span`
position: relative; 
    display: block;
    overflow: hidden;

`;

export default function SerieCards({product}) {
    return (
      <StyledContainer>        
          <StyledPhotoDiv
        key={product.id}
        img={product.img}
        category={product.category.name}
      >
        <StyledPhotoOverlay>
          <div>
          {console.log(`${process.env.PUBLIC_URL}/images/img-products/${product.category.name}/${product.img}`)}
            <StyledButton
              to={`/gallery/${product.category.name}/${product.id}`}
            >
              More...
            </StyledButton>
          </div>
        </StyledPhotoOverlay> 
      </StyledPhotoDiv>
      </StyledContainer>

    )
}

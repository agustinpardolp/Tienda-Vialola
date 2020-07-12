import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledPhotoDiv = styled.div`
  margin: 1%;
  background: ${(props) =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`};
  background-size: cover;
  transition-duration: 2s;
  position: relative;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const StyledPhotoOverlay = styled.span`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  height: 100%;
  right: 0%;
  position: absolute;
  z-index: 10000;
  transition: 0.4s ease-in-out;
  &:hover {
    transition: 0.4s ease-in-out;
    background: rgba(0, 0, 0, 0.6);
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
      transition: 0.4s ease-in-out;
      opacity: 1;
    }
  }
`;
const StyledButton = styled(Link)`
color:white;
padding:1%;
top: 80%;
right: 5%;
`;


export default function ProductCards({product, toggleModal}) {
    return (
        <StyledPhotoDiv
        key={product.id}
        img={product.img}
        category={product.category.name}
      >
        <StyledPhotoOverlay>
          <div>
            <FontAwesomeIcon
              icon={faExpand}
              size="1x"
              className="cart"
              onClick={toggleModal?(e) => toggleModal(product):null}
              style={{
                fontSize: "25px",
                color: "var(--mainColorFont)",
              }}
            />
            <StyledButton
              to={`/gallery/${product.category.name}/${product.id}`}
            >
              More...
            </StyledButton>
          </div>
        </StyledPhotoOverlay>
      </StyledPhotoDiv>
    )
}

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon, Accordion, Form, Menu } from "semantic-ui-react";
import { PRODUCTS } from "../../constants";

const styledButton = styled(Link)``;

const StyledModalContainer = styled.div`
  width: 85%;
  height: 85%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "rgba(0, 0, 0, 0.7)"};
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  left: 0;
  min-height: 400px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9998;

  /* -webkit-transition: all 2s opacity 2.0s ease-in-out; */
`;

const StyledCancelButton = styled(Icon)`
  width: 6%;
  height: 38%;
`;

const StyledModal = styled.div`
  background: white;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.width ? props.height : "100%")};
`;

const StyledImage = styled.div`
  /* background: ${(props) =>
    `url("/images/img-products/${props.category}/${props.img}") no-repeat center;`}; */
  background-size: contain;
 
  height: 100%;
  width: 100%;
  img{
    object-fit: scale-down;
    max-width: 100%;
  max-height:100%;
  }

}
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2%;
  div {
    transition-duration: 2s;
    &:hover {
      transform: scale(1.1, 1.2);
    }
  }
`;

const StyledModalFooter = styled.div``;

const StyledDivImageContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 2%;
  justify-content: center;
  height: 100%;
  grid-template-rows: 100%;
  & div:first-child {
    display: flex;
    justify-content: center;
  }
`;
const StyledImageInfo = styled.div`
  display: grid;
  grid-template-rows:  50% 40%;
  grid-template-columns: 80%;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    text-align: center;
    width: 90%;
    margin: 4%;
    font-size: 1.3rem;
    align-self: end;
  }
  li {
    margin: 3%;
  }
`;
const StyledModalTitle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2%;
`;

export default function ModalViewer({
  children,
  backButtonText,
  backgroundClose,
  width,
  height,
  toogleFunction,
  show,
  close,
  color,
  imageData,
}) {
  const handleConfim = (callback) => {
    callback && callback();
  };
  const SizeForm = (
    <Form>
      <Form.Group grouped>
        <Form.Radio label="Small" name="size" type="radio" value="small" />
        <Form.Radio label="Medium" name="size" type="radio" value="medium" />
        <Form.Radio label="Large" name="size" type="radio" value="large" />
        <Form.Radio label="X-Large" name="size" type="radio" value="x-large" />
      </Form.Group>
    </Form>
  );
  const AccordionData = {
    data: [
      {
        key: "acquire-product",
        title: {
          content: "How do you acquire this peace of art?",
          icon: "question",
        },
        content: {
          content: (
            <span>
              Many of my works are for sale, Please contact me to buy It.
              <br></br>
              <a href="/contact">Lets talk!</a>
            </span>
          ),
        },
      },
      {
        key: "care-for-dogs",
        title: {
          content: "Sizes availables",
          icon: "question",
        },
        content: {
          content: (
            <Menu.Item>
              <Accordion.Title
                content="Size"
                index={0}
                // onClick={this.handleClick}
              />
              <Accordion.Content content={SizeForm} />
            </Menu.Item>
          ),
        },
      },
    ],
  };
  const background = {
    ligthGrey: "rgba(0, 0, 0, 0.7)",
    fullWhite: "rgb(255, 255, 255)",
    ligthWhite: "rgb(255, 255, 255, 0.66)",
  };
  const { img, name, category, description } = imageData;
  return (
    <>
      {show && (
        <StyledModalContainer
          backgroundColor={background[color]}
          onClick={backgroundClose ? toogleFunction : null}
          className="modal"
        >
          <StyledModal width={width} height={height}>
            <StyledDivImageContainer>
              <div>
                <StyledImage>
                  <img
                    src={`/images/img-products/${category.name}/${img}`}
                  ></img>
                </StyledImage>
              </div>
              <StyledImageInfo>
                {/* <div>
                  <StyledCancelButton
                    className="grey large close icon"
                    onClick={toogleFunction}
                  >
                    {backButtonText}
                  </StyledCancelButton>
                </div> */}
                <ul>
                  <li>
                    {" "}
                    <h3>{name}</h3>
                  </li>
                  <li>Technique: {description}</li>
                  <li>Category: {category.name}</li>
                  <li>Date: 2004</li>
                </ul>
                <Accordion panels={AccordionData.data} />
              </StyledImageInfo>
            </StyledDivImageContainer>

            {/* {children} */}
          </StyledModal>
        </StyledModalContainer>
      )}
    </>
  );
}

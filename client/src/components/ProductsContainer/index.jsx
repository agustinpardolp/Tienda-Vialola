import React, { useState, useCallback, useEffect } from "react";

import { FadeIn } from "../ImageSlider/style";
import ModalViewer from "../Modals&Spinners/modalViewer";
import { connect } from "react-redux";
import ProductCards from "./productCards";
import Breadcrumb from "../Breadcrumb";
import styled from "styled-components";
import Spinner from "../Modals&Spinners/spinner";
import { fetchProducts } from "../../redux/products/actions/products-actions";
import Footer from "../FooterContainer/";


const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: repeat(2,0.5fr);
  padding: 3%;
  height: inherit;
  /* display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: auto;
  padding: 3%;
  height: inherit; */
`;

const OptionsMenu = styled.div`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid #efeeee;
  /* li {
    margin: 2%;
    text-decoration: none !important;
    color: ${(props) =>
      props.format
        ? "var(--activeColorFont)!important"
        : "var(--darkGrey) !important"};
    font-size: ${(props) => (props.format ? "26px" : "20px")};
    li:hover {
      color: grey !important;
      transition: all 0.4s ease 0s;
    }
  } */
`;




function Products(props) {
  const {
    match: {
      params: { name: pathName },
    },
  } = props;

  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    props.fetchProducts(pathName);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (product) => {
    setCurrentImage(product);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {props.status !== "LOADED" ? (
        <Spinner></Spinner>
      ) : (
        <>
        <Breadcrumb/>
        <StyledPhotoGrid>
          {props.products.length &&
            props.products.map((product, i) => {
              return (
                <ProductCards product={product} toggleModal={toggleModal}/>
              );
            })}
          <FadeIn duration="2s" delay="0.5s">
            <ModalViewer
              width="60%"
              height="80%"
              color="ligthWhite"
              backgroundClose={true}
              toogleFunction={toggleModal}
              show={isModalOpen}
              imageData={currentImage}
            ></ModalViewer>
          </FadeIn>
        </StyledPhotoGrid>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    products: { data: products, status },
    productsCategories: { data: productsCategories },
  } = state;
  // console.log(productsCategories, "products");
  return {
    products,
    productsCategories,
    status,
  };
};

export default connect(mapStateToProps, {
  fetchProducts,
})(Products);

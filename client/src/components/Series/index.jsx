import React, { useState, useCallback, useEffect } from "react";

import { FadeIn } from "../ImageSlider/style";

import { connect } from "react-redux";
import SerieCards from "./serieCards";
import Breadcrumb from "../Breadcrumb";
import styled from "styled-components";
import Spinner from "../Modals&Spinners/spinner";
import { fetchProducts } from "../../redux/products/actions/products-actions";
import Footer from "../Footer";

const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: repeat(2, 0.5fr);
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

function Series(props) {
  const {
    match: {
      params: { name: pathName },
    },
  } = props;

  useEffect(() => {
    props.fetchProducts(pathName);
  }, []);
  console.log("products", products)
  return (
    <>
      {props.status !== "LOADED" ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Breadcrumb />
          <StyledPhotoGrid>
            {props.products.length &&
              props.products.map((product, i) => {
                return (
                  <SerieCards product={product}  />
                );
              })}
            <FadeIn duration="2s" delay="0.5s"></FadeIn>
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
})(Series);

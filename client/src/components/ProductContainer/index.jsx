import React, { useState, useCallback, useEffect } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import styled from "styled-components";
import Breadcrumb from "../Breadcrumb";
import ProductCards from "../ProductsContainer/productCards";
import { fetchProductsById } from "../../redux/product/actions/product-actions";

const StyleDiv = styled.div`
  padding: 100px;
  img {
    margin: auto;
    width: 50%;
  }
`;

const StyledImg = styled.img`
  display: inline-block !important;
  /* max-width: 80%; */
  /* max-height: 70%; */
  width: auto;
  height: auto;
  justify-self: end;
  margin-right: 8%;
  object-fit: contain;
  height: 100%;
  align-self: center;
`;

const StyledProductContainer = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledInfo = styled.div`
  li {
    list-style: none;
    margin-bottom: 5%;
  }
  figcaption {
    text-align: initial;
  }
`;

const StyledImageContainer = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 75vh;
  align-items: center;
`;

const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: auto;
  padding: 3%;
  height: inherit;
`;


const baseUrl = "/images/img-products/paints";

function Product(props) {
  let {
    match: { params },
  } = props;
  useEffect(() => {
    props.fetchProductsById(params.id);
  }, []);
  const productsSerieList = () => {
    console.log("LALALQL", props.products, props.data);
    return (
      props.products &&
      props.data &&
      props.products.filter(
        (productsBySerie) => productsBySerie.serieId === props.data.serieId
      )
    );
  };

  const settings = {
    customPaging: function (i) {
      return (
        <span>
          <img src={`${baseUrl}/${i + 1}.jpg`} />
        </span>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log("prodseries", productsSerieList());
  return (
    <>
      {/* <Breadcrumb /> */}
      <StyledProductContainer>
        <StyledImageContainer>
          <StyledImg src={`${baseUrl}/${props.data.img}`} />
          <StyledInfo>
            <figcaption>
              <ul>
                <li>
                  <h4>Paintings: </h4>Lorem ipsum dolor sit amet consectetur
                </li>
                <li>
                  <h4>Serie: </h4>Lorem ipsum dolor sit amet consectetur
                </li>
                <li>
                  <h4>Title: </h4>Acrilyc on canvas / 60x80cm / 2016
                </li>
              </ul>
              <p>Prints available, please send a coment</p>
            </figcaption>
          </StyledInfo>
        </StyledImageContainer>
      </StyledProductContainer>
      <StyledPhotoGrid>
      {productsSerieList().map((product) => {
        return <ProductCards product={product} />;
      })}
      </StyledPhotoGrid>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    product: { data },
    products: { data: products, status },
  } = state;
  // console.log("data component", products);
  return {
    data,
    products,
    status,
  };
};

export default connect(mapStateToProps, { fetchProductsById })(Product);

import React, { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { FadeIn, Twister } from "../ImageSlider/style";
import styled from "styled-components";
import { fetchProductsById } from "../../redux/product/actions/product-actions";

const ProductContentImg = styled.div`
    background: ${props => `url("/assets/img/img-products/${props.img}")`};
    width: 100%;
    height: 50%;
    background-size:contain;
    background-position: center;
    transform: scale(1);
    transition-duration: 2s;
    transition-timing-function: ease-in-out;
    &:hover {
      transform: translate(20px, 10px);
      transition-duration: 2s;
      /* transform: rotate(-1turn); */
      /* transform: scale(1.1) */
    }
`;

export function Product(props) {
  let {
    match: { params }
  } = props;

  useEffect(() => {
    props.fetchProductsById(params.id);
  }, []);
  return (
    <div className="product-content">
      <ProductContentImg
        img={props.data ? props.data.img : "default"}
      ></ProductContentImg>
      <div className="product-content__info-container">
        <h2 className="product-content__title">{props.data.name}</h2>
        <h4 className="product-content__subtitle">
          Price:USD {props.data.price}
        </h4>
        <p className="product-content__p-info"> {props.data.description} </p>
        <Twister duration="5s" >
        <button className="product-content__button-cart"> Add to cart</button>
        </Twister>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    product: { data }
  } = state;
  console.log("data component", data);
  return {
    data
  };
};

export default connect(mapStateToProps, { fetchProductsById })(Product);

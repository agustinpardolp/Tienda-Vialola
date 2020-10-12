import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import CardGrid from "../../../components/CardGrid";
import styled from "styled-components";
import { useCart } from "../../../hooks/index";
import StyledCard from "../../../components/Card";
import { Card, Icon, Image } from "semantic-ui-react";
import { fetchProductsBySection } from "../../../redux/products/actions";
import { receiveCreatedCart } from "../../../redux/cart/actions/cart-actions";
import ModalViewer from "../../../components/Modals&Spinners/modalViewer";

const StyledProductContainer = styled.div`
  height: 100vh;
`;

const Products = ({
  fetchProductsBySection,
  receiveCreatedCart,
  products,
  match,
  history,
  productsToCart,
}) => {
  const {
    params: { section: pathName },
    url,
  } = match;

  let { setToCart } = useCart(productsToCart, receiveCreatedCart);

  useEffect(() => {
    fetchProductsBySection(pathName);
  }, [pathName]);

  const handleRedirect = (url, product) => {
    history.push(`${url}/${product.id}`);
  };

  return (
    <StyledProductContainer>
      <Card.Group itemsPerRow={6} centered style={{ marginTop: "2%" }}>
        {products.length &&
          products.map((product, i) => {
            return (
              <>
                <Card to={`${url}/${product.id}`} raised fluid>
                  <StyledCard
                    element={product}
                    img={product.img1}
                    filePath={`/images/img-products/${product.section.name}/`}
                    callBack={() => handleRedirect(url, product)}
                    height={"30vh"}
                  />
                  <Button onClick={() => setToCart(product)}>
                    Add to cart
                  </Button>
                </Card>
              </>
            );
          })}
      </Card.Group>
    </StyledProductContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    products: { data: products, status },
    cart: { data: productsToCart },
  } = state;

  return {
    products,
    productsToCart,
  };
};

export default connect(mapStateToProps, {
  fetchProductsBySection,
  receiveCreatedCart,
})(Products);

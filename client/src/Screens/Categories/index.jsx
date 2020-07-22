import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { fetchProductsCategories } from "../../redux/productsCategories/actions/product-categories-actions";
import Spinner from "../../components/Modals&Spinners/spinner";
import Card from "../../components/Card";
import { CategoriesContainer } from "./styledComponents";

export function ProductCategories(props) {
  useEffect(() => {
    props.fetchProductsCategories();
  }, []);

  return (
    <>
      {props.status !== "LOADED" ? (
        <Spinner active></Spinner>
      ) : (
        <>
          <CategoriesContainer>
            {props.productsCategories &&
              props.productsCategories.map((category) => {
                return (
                  <Card
                    key={category.id}
                    element={category}
                    category={category.name}
                    path={`/gallery/${category.name}/`}
                  />
                );
              })}
          </CategoriesContainer>
          <Footer back="/home" />
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    productsCategories: { data: productsCategories, status: status },
  } = state;
  return {
    productsCategories,
    status,
  };
};

export default connect(mapStateToProps, {
  fetchProductsCategories,
})(ProductCategories);

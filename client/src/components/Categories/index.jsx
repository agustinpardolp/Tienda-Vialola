import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../Footer";
import { fetchProductsCategories } from "../../redux/productsCategories/actions/product-categories-actions";
import Spinner from "../Modals&Spinners/spinner";
import CategoryCard from "./CategoryCard";
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
                return <CategoryCard key={category.id} category={category} />;
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

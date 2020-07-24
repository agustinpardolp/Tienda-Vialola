import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../../components/Footer";
import { fetchArtworkCategories } from "../../redux/artworkCategories/actions/artwork-categories-actions";
import Spinner from "../../components/Modals&Spinners/spinner";
import Card from "../../components/Card";
import Dividers from "../../components/Divider";
import { CategoriesContainer } from "./styledComponents";

export function Gallery(props) {
  useEffect(() => {
    props.fetchArtworkCategories();
  }, []);

  return (
    <>
      {props.status !== "LOADED" ? (
        <Spinner active></Spinner>
      ) : (
        <>
        <Dividers titleElements={[{name:"Artwork", id:1}]}/>
          <CategoriesContainer>
            {props.artworkCategories &&
              props.artworkCategories.map((category) => {
               
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
    artworkCategories: { data: artworkCategories, status: status },
  } = state;
  return {
    artworkCategories,
    status,
  };
};

export default connect(mapStateToProps, {
  fetchArtworkCategories,
})(Gallery);

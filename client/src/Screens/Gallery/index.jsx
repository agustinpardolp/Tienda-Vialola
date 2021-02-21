import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import Dividers from "../../components/Divider";
import Spinner from "../../components/Modals&Spinners/spinner";
import { REQUEST_STATUS } from "../../constants";
import { fetchArtworkCategories } from "../../redux/artworkCategories/actions/artwork-categories-actions";

export function Gallery(props) {
  useEffect(() => {
    props.fetchArtworkCategories('');
  }, []);

  return (
    <>
      {props.status !== REQUEST_STATUS.LOADED ? (
        <Spinner active></Spinner>
      ) : (
        <>
          <Dividers titleElements={[{ name: "Artwork", id: 1 }]} />
          <CardGrid
            row={"1"}
            elementsLength={
              props.artworkCategories && props.artworkCategories.length
            }
          >
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
          </CardGrid>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
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

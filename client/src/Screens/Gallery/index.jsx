import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import Dividers from "../../components/Divider";
import { fetchArtworkCategories } from "../../redux/artworkCategories/actions/artwork-categories-actions";
import { FadeIn } from "../../utils/baseStyleAnimations";
import { StyledMain } from "./styledComponents";

export function Gallery({ fetchArtworkCategories, artworkCategories, status }) {
  useEffect(() => {
    fetchArtworkCategories("");
  }, [fetchArtworkCategories]);

  return (
    <FadeIn duration="1s">
      <Dividers titleElements={[{ name: "Artwork", id: 1 }]} />
      <StyledMain>
          <CardGrid
            row={"1"}
            elementsLength={artworkCategories && artworkCategories.length}
          >
            {artworkCategories &&
              artworkCategories.map((category) => {
                return (
                  <Card
                    key={category.id}
                    element={category}
                    category={category.name}
                    path={`/gallery/${category.name}/`}
                    height="45vh"
                  />
                );
              })}
          </CardGrid>
      </StyledMain>
    </FadeIn>
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

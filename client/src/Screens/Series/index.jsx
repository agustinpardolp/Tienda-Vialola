import React, { useEffect } from "react";

import { FadeIn } from "../../components/ImageSlider/style";
import { connect } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import styled from "styled-components";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchArtworks } from "../../redux/artworks/actions/artworks-actions";
import { fetchSeries } from "../../redux/series/actions/serie-actions";

const StyledPhotoGrid = styled.div`
  display: grid;
  margin-right: 3%;
  margin-left: 3%;
  grid-gap: 0.5%;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: repeat(5, 50%);
  padding: 3%;
  height: inherit;
`;

const OptionsMenu = styled.div`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 0.5px solid #efeeee;
`;

const StyledTittle = styled.h3`
  color: rgb(115, 112, 110);
`;

function Series(props) {
  const {
    match: {
      params: { name: pathName },
    },
  } = props;

  useEffect(() => {
    props.fetchArtworks(pathName);
    props.fetchSeries(pathName);
  }, []);

  return (
    <>
      {props.status !== "LOADED" ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Breadcrumb />
          <StyledPhotoGrid>
            {props.series.length &&
              props.series.map((serie, i) => {
                return (
                  <Card
                    element={serie}
                    key={serie.id}
                    category={serie.category.name}
                    path={`/gallery/${serie.category.name}/${serie.name}`}
                  />
                );
              })}
          </StyledPhotoGrid>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {
    artworks: { data: artworks, status },
    artworkCategories: { data: artworkCategories },
    series: { data: series },
  } = state;

  return {
    artworks,
    artworkCategories,
    status,
    series,
  };
};

export default connect(mapStateToProps, {
  fetchArtworks,
  fetchSeries,
})(Series);

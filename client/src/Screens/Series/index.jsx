import React, { useEffect } from "react";

import { FadeIn } from "../../components/ImageSlider/style";
import { connect } from "react-redux";
import Dividers from "../../components/Divider";
import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import styled from "styled-components";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchArtworks } from "../../redux/artworks/actions/artworks-actions";
import { fetchSeries } from "../../redux/series/actions/serie-actions";

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
          <Dividers
            titleElements={[
              {
                name: `${
                  props.series.length && props.series[0].category.name
                } / series`,
                id: 1,
              },
            ]}
          />
          <CardGrid row={3}>
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
          </CardGrid>
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

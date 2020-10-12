import React, { useEffect } from "react";
import { connect } from "react-redux";
import { REQUEST_STATUS } from "../../constants";
import Dividers from "../../components/Divider";
import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import styled from "styled-components";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchArtworks } from "../../redux/artworks/actions/artworks-actions";
import { fetchSeries } from "../../redux/series/actions/serie-actions";

const Series = ({ match, fetchArtworks, fetchSeries, status, series }) => {
  const {
    params: { name: pathName },
  } = match;

  useEffect(() => {
    fetchArtworks(pathName);
    fetchSeries(pathName);
  }, []);

  return (
    <>
      {status !== REQUEST_STATUS.LOADED ? (
        <Spinner></Spinner>
      ) : (
        <>
          <Dividers
            titleElements={[
              {
                name: `${series.length && series[0].category.name} / series`,
                id: 1,
              },
            ]}
          />
          <CardGrid row={3}>
            {series.length &&
              series.map((serie, i) => {
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
};

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

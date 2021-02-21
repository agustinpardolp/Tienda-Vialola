import React, { useEffect } from "react";
import { connect } from "react-redux";

import { REQUEST_STATUS } from "../../constants";
import Dividers from "../../components/Divider";
import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchSeries } from "../../redux/series/actions/serie-actions";

const Series = ({ match, fetchSeries, status, series }) => {
  const {
    params: { category },
  } = match;

  useEffect(() => {
    let query = `?category=${category}`
    fetchSeries(query);
  }, [category]);

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
              series.map((serie) => {
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

const mapStateToProps = (state) => {
  const {
    artworks: { data: artworks },
    artworkCategories: { data: artworkCategories },
    series: { data: series, status },
  } = state;

  return {
    artworks,
    artworkCategories,
    status,
    series,
  };
};

export default connect(mapStateToProps, {
  fetchSeries,
})(Series);

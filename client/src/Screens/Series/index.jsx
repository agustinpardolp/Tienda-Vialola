import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { REQUEST_STATUS } from "../../constants";
import Dividers from "../../components/Divider";
import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchSeries } from "../../redux/series/actions/serie-actions";
import { StyledMain } from "./styledComponents";
import { handleSeries } from "./constants";

const Series = ({ match, fetchSeries, status, series }) => {
  const {
    params: { category },
  } = match;

  useEffect(() => {
    let query = `?category=${category}`;
    fetchSeries(query);
  }, [category]);

  const onHandleSeries = useMemo(() => handleSeries(series), [series]);

  return (
    <>
      {status !== REQUEST_STATUS.LOADED ? (
        <Spinner />
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
          <StyledMain>
            <CardGrid row={3}>
              {series.length &&
                onHandleSeries.map((serie) => {
                  return (
                    <Card
                      element={serie}
                      key={serie.id}
                      category={serie.category.name}
                      path={`/gallery/${serie.category.name}/${serie.name}`}
                      height="45vh"
                    />
                  );
                })}
            </CardGrid>
          </StyledMain>
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

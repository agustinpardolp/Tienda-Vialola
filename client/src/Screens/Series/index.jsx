import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import Dividers from "../../components/Divider";
import Card from "../../components/Card";
import CardGrid from "../../components/CardGrid";
import Spinner from "../../components/Modals&Spinners/spinner";
import { fetchSeries } from "../../redux/series/actions/serie-actions";
import { StyledMain } from "./styled-components";
import { handleSeries } from "./constants";
import { FadeIn } from "../../utils/baseStyleAnimations";

const Series = ({ match, fetchSeries, status, series }) => {
  const {
    params: { category },
  } = match;

  useEffect(() => {
    let query = `?category=${category}`;
    fetchSeries(query);
  }, [category]);

  const onHandleSeries = useMemo(() => handleSeries(series), [series]);
  const onRenderDivider = useMemo(() => {
    return (
      series.length > 0 && (
        <Dividers
          titleElements={[
            {
              name: `${series[0]?.category.name} / series`,
              id: 1,
            },
          ]}
        />
      )
    );
  }, [series]);
  return (
    <>
      {!series.length ? (
        <Spinner />
      ) : (
        <FadeIn duration="1s">
          {onRenderDivider}
          <StyledMain>
            <CardGrid row={3}>
              {series.length > 0 &&
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
        </FadeIn>
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

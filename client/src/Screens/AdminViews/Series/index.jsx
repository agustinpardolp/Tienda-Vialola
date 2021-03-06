import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import Table from "../../../components/AdminComponents/Table";
import { FILTER_LABELS, QUERY_PARAMS } from "../../../constants";
import { ModalContext } from "../../../context/ModalContext";
import { fetchArtworkCategories } from "../../../redux/artworkCategories/actions/artwork-categories-actions";
import {
  deleteSerie,
  fetchSeries,
  createSerie,
  editSerie,
} from "../../../redux/series/actions/serie-actions";
import { transformResponse } from "../../../utils";

const EditSeries = ({
  location: { pathname },
  fetchSeries,
  fetchArtworkCategories,
  series,
  artworkCategories,
  deleteSerie,
  createSerie,
  editSerie,
}) => {
  let { dispatch } = useContext(ModalContext);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    fetchSeries(filter);
    fetchArtworkCategories("");
  }, [fetchArtworkCategories, fetchSeries, filter]);

  const handleSeries = (data) => {
    let queryParams = "";
    if (data.placeholder === FILTER_LABELS.categories && data.value) {
      queryParams = `${QUERY_PARAMS.CATEGORIES}${data.value}`;
      setFilter(queryParams);
    } else {
      setFilter("");
    }
  };
  const headerColumns = [
    {
      id: "1",
      name: "Nombre",
      dataField: "name",
    },
    {
      id: "3",
      name: "category",
      dataField: "category",
    },
  ];

  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: "DELETE",
      modalProps: {
        open: true,
        handleConfirm: deleteSerie,
        posResponse: fetchSeries,
        data: data.id,
        title: "¿Esta seguro que desea borrar la fila?",
        message: "La informacion se borrara de forma permantente",
      },
    });
  };
  const handleEdit = (data) => {
    dispatch({
      type: "show",
      modalType: "FORM_SERIE",
      modalProps: {
        open: true,
        handleConfirm: editSerie,
        posResponse: fetchSeries,
        data: data,
        categories: transformResponse(artworkCategories),
      },
    });
  };
  const handleCreate = () => {
    dispatch({
      type: "show",
      modalType: "FORM_SERIE",
      modalProps: {
        open: true,
        handleConfirm: createSerie,
        posResponse: fetchSeries,
        categories: transformResponse(artworkCategories),
        isNew: true,
      },
    });
  };
  return (
    <>
      <Filter
        pathname={pathname}
        dropdowns={[
          {
            name: FILTER_LABELS.categories,
            data: artworkCategories,
            fetch: handleSeries,
          },
        ]}
        handleNewOption={handleCreate}
      />
      <Grid.Row>
        <Table
          headerColumns={headerColumns}
          dataRows={series}
          handleSelectedRow={handleEdit}
          handleDeleteRow={handleDelete}
        />
      </Grid.Row>
    </>
  );
};
const mapStateToProps = (state) => {
  const {
    artworks: { data: artworks },
    series: { data: series, status },
    artworkCategories: { data: artworkCategories },
  } = state;

  return {
    artworks,
    status,
    series,
    artworkCategories,
  };
};

export default connect(mapStateToProps, {
  fetchSeries,
  fetchArtworkCategories,
  deleteSerie,
  createSerie,
  editSerie,
})(EditSeries);

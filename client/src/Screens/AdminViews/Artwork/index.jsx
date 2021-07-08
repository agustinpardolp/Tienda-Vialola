import React, { useState, useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import Table from "../../../components/AdminComponents/Table";
import { FILTER_LABELS, QUERY_PARAMS } from "../../../constants";
import { ModalContext } from "../../../context/ModalContext";
import { fetchArtworkCategories } from "../../../redux/artworkCategories/actions/artwork-categories-actions";
import {
  fetchArtworks,
  deleteArtwork,
  editArtwork,
  createArtwork
} from "../../../redux/artworks/actions/artworks-actions";
import { fetchSeries } from "../../../redux/series/actions/serie-actions";
import { transformResponse } from "../../../utils";
import { headerColumns, MODAL_TYPE } from "./constants";

const EditArtwork = ({
  location: { pathname },
  fetchArtworks,
  fetchSeries,
  fetchArtworkCategories,
  series,
  artworks,
  artworkCategories,
  deleteArtwork,
  editArtwork,
  createArtwork
}) => {
  const [filter, setFilter] = useState("");
  let { dispatch } = useContext(ModalContext);

  useEffect(() => {
    fetchArtworks(filter);
    fetchSeries(filter);
    fetchArtworkCategories("");
  }, [fetchArtworkCategories, fetchArtworks, fetchSeries, filter]);

  
  const handleSeries = (data) => {
    let queryParams = "";
    if (data.placeholder === FILTER_LABELS.series && data.value) {
      queryParams = `${QUERY_PARAMS.SERIES}${data.value}`;
      setFilter(queryParams);
    } else {
      setFilter("");
    }
  };
  
  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.DELETE,
      modalProps: {
        open: true,
        handleConfirm: deleteArtwork,
        posResponse: fetchArtworks,
        data: data.id,
        title:"¿Esta seguro que desea borrar la fila?",
        message: "La informacion se borrara de forma permantente"
      },
    });
  };

  const handleEdit = (data) => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.FORM_ARTWORK,
      modalProps: {
        open: true,
        handleConfirm: editArtwork,
        posResponse: fetchArtworks,
        data: data,
        categories: transformResponse(artworkCategories)
      },
    });
  };

  const handleCreate = () => {
    dispatch({
      type: "show",
      modalType: MODAL_TYPE.FORM_ARTWORK,
      modalProps: {
        open: true,
        handleConfirm: createArtwork,
        posResponse: fetchArtworks,
        categories: transformResponse(artworkCategories),
        isNew: true
      },
    });
  };

  return (
    <>
      <Filter
        pathname={pathname}
        dropdowns={[
          { name: FILTER_LABELS.series, data: series, fetch: handleSeries },
        ]}
        handleNewOption={handleCreate}
      />
      <Grid.Row>
        <Table
          headerColumns={headerColumns}
          dataRows={artworks}
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
  fetchArtworks,
  fetchSeries,
  fetchArtworkCategories,
  deleteArtwork,
  editArtwork,
  createArtwork
})(EditArtwork);

import React, { useState, useCallback, useContext } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import Table from "../../../components/AdminComponents/Table";
import Filter from "../../../components/AdminComponents/Filter";
import ArtworkModalForm from "./ArtworkModalForm";
import {
  fetchArtworks,
  deleteArtwork,
} from "../../../redux/artworks/actions/artworks-actions";
import { fetchSeries } from "../../../redux/series/actions/serie-actions";
import { fetchArtworkCategories } from "../../../redux/artworkCategories/actions/artwork-categories-actions";
import { useModal } from "../../../hooks";
import { FILTER_LABELS, QUERY_PARAMS } from "../../../constants";
import { ModalContext } from "../../../context/ModalContext";
import { MODALS } from "../../../components/Modals&Spinners/modalconstants";

const EditArtwork = ({
  match,
  location: { pathname },
  fetchArtworks,
  fetchSeries,
  fetchArtworkCategories,
  series,
  artworks,
  artworkCategories,
  deleteArtwork
}) => {
  const {
    showModal,
    hideModal,
    openModal,
  } = useModal(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [filter, setFilter] = useState("");
  let { modalType, modalProps, dispatch } = useContext(ModalContext);

  useEffect(() => {
    fetchArtworks(filter);
    fetchSeries(filter);
    fetchArtworkCategories("");
  }, [filter]);

  const headerColumns = [
    {
      id: "1",
      name: "Nombre",
      dataField: "name",
    },
    {
      id: "2",
      name: "Descripcion",
      dataField: "description",
    },
    {
      id: "3",
      name: "Precio",
      dataField: "price",
    },
    {
      id: "4",
      name: "Precio reproduccion",
      dataField: "priceReproduction",
    },
    {
      id: "5",
      name: "Original en venta",
      dataField: "allowOriginal",
    },
    { id: 6, name: "Reproduccion en venta", dataField: "allowReproduction" },
  ];
  const handleSelectedRow = (data) => {
    setSelectedRow(data);
    openModal(true);
  };
  const handleOptions = (data) => {
    let dropdownList =
      data &&
      data.map((serie, index) => {
        let option = {
          key: index,
          text: serie.name,
          value: serie.name,
        };
        return option;
      });
    return dropdownList;
  };

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
      modalType: "DELETE",
      modalProps: {
        open: true,
        handleConfirm: deleteArtwork,
        data: data.id,
        title:"¿Esta seguro que desea borrar la fila?",
        message: "La informacion se borrara de forma permantente"
      },
    });
    // setShowRegularModal(true);
  };
  return (
    <>
      <Filter
        pathname={pathname}
        dropdowns={[
          { name: FILTER_LABELS.series, data: series, fetch: handleSeries },
        ]}
      />
      <Grid.Row>
        <Table
          headerColumns={headerColumns}
          dataRows={artworks}
          handleSelectedRow={handleSelectedRow}
          handleDeleteRow={handleDelete}
        />
      </Grid.Row>
      {showModal && Object.keys(selectedRow) ? (
        <ArtworkModalForm
          show={showModal}
          onHide={hideModal}
          data={selectedRow && selectedRow}
          series={handleOptions(series)}
          categories={handleOptions(artworkCategories)}
        />
      ) : null}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
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
  deleteArtwork
})(EditArtwork);

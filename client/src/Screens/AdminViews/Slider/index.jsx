import React, { useContext } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import Table from "../../../components/AdminComponents/Table";
import { ModalContext } from "../../../context/ModalContext";
import {
  deleteSlider,
  fetchSlider,
  editSlider,
} from "../../../redux/slider/actions/index";
import { transformResponse } from "../../../utils";

const EditSlider = ({
  location: { pathname },
  fetchSlider,
  sliders,
  artworkCategories,
  deleteSlider,
}) => {
  let { dispatch } = useContext(ModalContext);

  useEffect(() => {
    fetchSlider();
  }, [fetchSlider]);

  const headerColumns = [
    {
      id: "2",
      name: "Titulo",
      dataField: "title",
    },
    {
      id: "3",
      name: "Descripcion",
      dataField: "description",
    },
    {
      id: "4",
      name: "Ruta de destino",
      dataField: "pathname",
    },
  ];

  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: "DELETE",
      modalProps: {
        open: true,
        handleConfirm: deleteSlider,
        posResponse: fetchSlider,
        data: data.id,
        title: "¿Esta seguro que desea borrar la fila?",
        message: "La informacion se borrara de forma permantente",
      },
    });
  };
  const handleEdit = (data) => {
    dispatch({
      type: "show",
      modalType: "FORM_SLIDER",
      modalProps: {
        open: true,
        handleConfirm: editSlider,
        posResponse: fetchSlider,
        data: data,
        categories: transformResponse(artworkCategories),
      },
    });
  };

  return (
    <>
      <Filter pathname={pathname} noFilter />
      <Grid.Row>
        <Table
          headerColumns={headerColumns}
          dataRows={sliders}
          handleSelectedRow={handleEdit}
          handleDeleteRow={handleDelete}
        />
      </Grid.Row>
    </>
  );
};
const mapStateToProps = (state) => {
  const {
    slider: { data: sliders, status },
  } = state;

  return {
    status,
    sliders,
  };
};

export default connect(mapStateToProps, {
  fetchSlider,
  deleteSlider,
  editSlider,
})(EditSlider);

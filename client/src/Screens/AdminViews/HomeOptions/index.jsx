import React, { useContext } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import Table from "../../../components/AdminComponents/Table";
import { ModalContext } from "../../../context/ModalContext";
import {
  deleteHomeOptions,
  fetchHomeOptions,
  editHomeOptions,
} from "../../../redux/homeOptions/actions/index";
import { transformResponse } from "../../../utils";
import { headerColumns } from "./constants";

const EditHomeOptions = ({
  location: { pathname },
  fetchHomeOptions,
  HomeOptionss,
  artworkCategories,
  deleteHomeOptions,
}) => {
  let { dispatch } = useContext(ModalContext);

  useEffect(() => {
    fetchHomeOptions();
  }, [fetchHomeOptions]);



  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: "DELETE",
      modalProps: {
        open: true,
        handleConfirm: deleteHomeOptions,
        posResponse: fetchHomeOptions,
        data: data.id,
        title: "¿Esta seguro que desea borrar la fila?",
        message: "La informacion se borrara de forma permantente",
      },
    });
  };
  const handleEdit = (data) => {
    dispatch({
      type: "show",
      modalType: "FORM_HomeOptions",
      modalProps: {
        open: true,
        handleConfirm: editHomeOptions,
        posResponse: fetchHomeOptions,
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
          dataRows={HomeOptionss}
          handleSelectedRow={handleEdit}
          handleDeleteRow={handleDelete}
        />
      </Grid.Row>
    </>
  );
};
const mapStateToProps = (state) => {
  const {
    homeOptions: { data: homeOptionss, status },
  } = state;

  return {
    status,
    homeOptionss,
  };
};

export default connect(mapStateToProps, {
  fetchHomeOptions,
  deleteHomeOptions,
  editHomeOptions,
})(EditHomeOptions);

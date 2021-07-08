import React, { useContext } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import Table from "../../../components/AdminComponents/Table";
import { ModalContext } from "../../../context/ModalContext";
import {
  fetchNews,
  editNews,
} from "../../../redux/news/actions/news-actions";
import { transformResponse } from "../../../utils";
import { headerColumns } from "./constants";

const EditNews = ({
  location: { pathname },
  fetchNews,
  HomeOptionss,
  artworkCategories,
  deleteHomeOptions,
}) => {
  let { dispatch } = useContext(ModalContext);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleDelete = (data) => {
    dispatch({
      type: "show",
      modalType: "DELETE",
      modalProps: {
        open: true,
        handleConfirm: deleteHomeOptions,
        posResponse: fetchNews,
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
        handleConfirm: editNews,
        posResponse: fetchNews,
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
    news: { data: news, status },
  } = state;

  return {
    status,
    news,
  };
};

export default connect(mapStateToProps, {
  fetchNews,
  editNews,
})(EditNews);

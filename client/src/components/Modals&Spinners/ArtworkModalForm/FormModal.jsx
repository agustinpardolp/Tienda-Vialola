import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Message, Popup } from "semantic-ui-react";
import { Image, Modal, Form } from "semantic-ui-react";

import { QUERY_PARAMS } from "../../../constants";
import { transformResponse } from "../../../utils";
import { fetchSeries } from "../../../redux/series/actions/serie-actions";

import {
  StyledFormInput,
  StyledIcon,
  StyledImageLabel,
  StyledButtonContainer,
  StyledFormModal,
} from "./Styled-component";
import ErrorMessage from "../../ErrorMessage";

const FormModal = ({
  values,
  handleChange,
  handleBlur,
  series,
  errors,
  categories,
  setFieldValue,
  handleSubmit,
  fetchSeries,
  isNew,
  initialValues,
  dispatch,
}) => {
  const [localImg, setLocalImg] = useState(null);
  const history = useHistory();

  useEffect(() => {
    let queryParams = `${QUERY_PARAMS.CATEGORIES}${initialValues.category}`;
    fetchSeries(queryParams);
  }, [fetchSeries, initialValues.category]);

  const handleSelect = (e, data, isCategory) => {
    let value = data.options.find((option) => option.value === data.value);
    setFieldValue(data.name, value.id);
    isCategory && setFieldValue("category", value.value);
  };
  const handleCategoryChange = (e, data) => {
    let queryParams = "";
    let value = data.options.find((option) => option.value === data.value);
    queryParams = `${QUERY_PARAMS.CATEGORIES}${value.text}`;
    fetchSeries(queryParams);
    setFieldValue(data.name, value.id);
    setFieldValue("category", data.value);
  };

  const handleChangeFile = (e) => {
    let file = URL.createObjectURL(e.target.files[0]);
    setLocalImg(file);
    setFieldValue("img", e.target.files[0]);
  };
  const errorsFormHandler = useMemo(() => {
    return (
      Object.entries(errors).length > 0 ||
      JSON.stringify(initialValues) === JSON.stringify(values)
    );
  }, [errors, values, initialValues]);
  return (
    <>
      <Modal.Header>{isNew ? "Nueva obra" : "Edicion de Obra"}</Modal.Header>
      <StyledFormModal>
        <Form onSubmit={handleSubmit}>
          {errors.img ? <ErrorMessage errorMessage="foto requerida" /> : null}
          <StyledImageLabel htmlFor={isNew ? "newImage" : "img"}>
            <StyledIcon name="pencil square" />
            {isNew ? (
              <Image
                size="small"
                src={
                  localImg
                    ? localImg
                    : "https://react.semantic-ui.com/images/avatar/large/rachel.png"
                }
                wrapped
                htmlFor="img"
              />
            ) : (
              <Image
                size="small"
                src={
                  localImg
                    ? localImg
                    : `${process.env.PUBLIC_URL}/images/img-artwork/${initialValues.category}/${initialValues.img}`
                }
                wrapped
                htmlFor="img"
              />
            )}
          </StyledImageLabel>

          <StyledFormInput
            type="file"
            onChange={handleChangeFile}
            name="img"
            id={isNew ? "newImage" : "img"}
          />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Nombre"
              name="name"
              id="name"
              handleBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              error={!!errors.name}
            />
            <Form.Input
              fluid
              name="price"
              id="price"
              label="Precio"
              value={values.price}
              onChange={handleChange}
              handleBlur={handleBlur}
              error={!!errors.price}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="priceReproduction"
              id="priceReproduction"
              label="Precio Reproduccion"
              value={values.priceReproduction}
              onChange={handleChange}
              width={6}
              error={!!errors.priceReproduction}
            />
            {isNew ? (
              <Form.Select
                fluid
                name="categoryId"
                id="categoryId"
                label="Categoria"
                options={categories}
                onChange={(e, value) => handleCategoryChange(e, value)}
                placeholder="Categoria"
                width={4}
                error={!!errors.categoryId}
                defaultValue={values.category}
              />
            ) : null}
            <>
              <Form.Select
                fluid
                name="serieId"
                id="serieId"
                label="Serie"
                options={transformResponse(series)}
                placeholder="Serie"
                onChange={(e, value) => handleSelect(e, value)}
                width={6}
                error={!!errors.serieId}
              />
              <StyledButtonContainer basic size="small" width={2}>
                <Popup
                  content="Crear nueva serie..."
                  trigger={
                    <Button
                      icon="add"
                      onClick={() => history.push("/admin/edit-series")}
                    />
                  }
                />
              </StyledButtonContainer>
            </>
          </Form.Group>

          <Form.TextArea
            name="description"
            id="description"
            label="Descripcion"
            placeholder="Descripcion de la obra..."
            value={values.description}
            onChange={handleChange}
            error={!!errors.description}
          />
          <Form.Checkbox
            name="allowOriginal"
            id="allowOriginal"
            label="Original disponible a la venta"
            value={values.allowOriginal}
            onChange={handleChange}
          />
          <Form.Checkbox
            name="allowReproduction"
            id="allowReproduction"
            label="Reproduccion disponible a la venta"
            value={values.allowReproduction}
            onChange={handleChange}
          />
          <Form.Checkbox
            name="externalLink"
            id="externalLink"
            label="Enlace externo de tienda"
            value={values.externalLink}
            onChange={handleChange}
          />
          <Form.Group inline>
            <Form.Button
              basic
              color="olive"
              type="submit"
              disabled={errorsFormHandler}
            >
              Cargar
            </Form.Button>
            <Form.Button
              basic
              color="red"
              onClick={() => dispatch({ type: "hide" })}
            >
              Cancelar
            </Form.Button>
          </Form.Group>
        </Form>
      </StyledFormModal>
    </>
  );
};
const mapStateToProps = (state) => {
  const {
    series: { data: series },
  } = state;

  return {
    series,
  };
};

export default connect(mapStateToProps, {
  fetchSeries,
})(FormModal);

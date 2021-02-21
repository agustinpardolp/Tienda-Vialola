import React, { useState } from "react";
import { Image, Modal, Form } from "semantic-ui-react";

import {
  StyledFormInput,
  StyledIcon,
  StyledImageLabel,
} from "./Styled-component";

const FormModal = ({
  values,
  handleChange,
  handleBlur,
  categories,
  setFieldValue,
  handleSubmit,
  initialValues,
  isNew,
  dispatch,
}) => {
  const [localImg, setLocalImg] = useState(null);

  const handleCategoryChange = (e, data) => {
    let value = data.options.find((option) => option.value === data.value);
    setFieldValue(data.name, value.id);
  };

  const handleChangeFile = (e) => {
    let file = URL.createObjectURL(e.target.files[0]);
    setLocalImg(file);
    setFieldValue("img", e.target.files[0]);
  };
  return (
    <>
      <Modal.Header>Edicion / Creacion de Serie </Modal.Header>
      <Modal.Content>
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
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Nombre"
              name="name"
              id="name"
              handleBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
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
              />
            ) : null}
          </Form.Group>
          <Form.Group inline>
            <Form.Button basic color="olive" type="submit">
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
      </Modal.Content>
    </>
  );
};

export default FormModal;

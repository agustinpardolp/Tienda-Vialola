import React, { useState } from "react";
import { Image, Modal, Form, TextArea } from "semantic-ui-react";

import {
  StyledFormInput,
  StyledIcon,
  StyledImageLabel,
} from "./Styled-component";

const FormModal = ({
  values,
  handleChange,
  handleBlur,
  setFieldValue,
  handleSubmit,
  initialValues,
  dispatch,
}) => {
  const [localImg, setLocalImg] = useState(null);

  const handleChangeFile = (e) => {
    let file = URL.createObjectURL(e.target.files[0]);
    setLocalImg(file);
    setFieldValue("img", e.target.files[0]);
  };
  return (
    <>
      <Modal.Header>Edición de Slider</Modal.Header>
      <Modal.Content>
        <StyledImageLabel htmlFor="img">
          <StyledIcon name="pencil square" />
          <Image
            size="large"
            src={
              localImg
                ? localImg
                : `${process.env.PUBLIC_URL}/images/img-carousel/${initialValues.img}`
            }
            wrapped
            htmlFor="img"
          />
        </StyledImageLabel>
        <StyledFormInput
          type="file"
          onChange={handleChangeFile}
          name="img"
          id="img"
        />
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Título"
              name="title"
              id="name"
              handleBlur={handleBlur}
              value={values.title}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Ruta de destino"
              name="pathname"
              id="pathname"
              handleBlur={handleBlur}
              value={values.pathname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Field>
            <label as="h6">Descripción</label>
            <TextArea
              name="Descripción"
              id="description"
              placeholder="Ingresa una descripcion"
              value={values.description}
            />
          </Form.Field>
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

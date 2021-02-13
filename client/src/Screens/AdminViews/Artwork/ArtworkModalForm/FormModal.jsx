import React, { useState } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Form,
  Dropdown,
  Icon,
} from "semantic-ui-react";
import {
  StyledFormModal,
  StyledFormInput,
  StyledIcon,
  StyledImageLabel,
} from "./Styled-component";

const FormModal = ({
  show,
  onHide,
  values,
  errors,
  handleChange,
  handleBlur,
  series,
  categories,
  setFieldValue,
  handleSubmit
}) => {
  const [localImg, setLocalImg] = useState(null);

  const handleSelect = (e, data, isCategory) => {
    let value = data.options.find((option) => option.value === data.value);
    setFieldValue(data.name, value.key);
    isCategory && setFieldValue('category', value.value);  
  };
  const handleChangeFile = (e) => {
    let file = URL.createObjectURL(e.target.files[0]);
    setLocalImg(file);
    debugger
    setFieldValue("img", e.target.files[0]);
  };
  return (
    <StyledFormModal open={show}>
      <Modal.Header>Edicion de Obra</Modal.Header>
      <Modal.Content>
        <StyledImageLabel htmlFor="img">
          <StyledIcon name="pencil square" />
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
              label="Nombre"
              name="name"
              id="name"
              handleBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
            />
            <Form.Input
              fluid
              name="price"
              id="price"
              label="Precio"
              value={values.price}
              onChange={handleChange}
              handleBlur={handleBlur}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="priceReproduction"
              id="name"
              label="Precio Reproduccion"
              value={values.priceReproduction}
              onChange={handleChange}
            />
            <Form.Select
              fluid
              name="serieId"
              id="serieId"
              label="Serie"
              options={series}
              placeholder="Serie"
              onChange={(e, value) => handleSelect(e, value)}
            />
            <Form.Select
              fluid
              name="categoryId"
              id="categoryId"
              label="Categoria"
              options={categories}
              onChange={(e, value) => handleSelect(e, value, true)}
              placeholder="Categoria"
            />
          </Form.Group>

          <Form.TextArea
            name="description"
            id="description"
            label="Descripcion"
            placeholder="Descripcion de la obra..."
            value={values.description}
            onChange={handleChange}
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
          <Form.Group inline>
            <Form.Button basic color="olive" type="submit">
              Cargar
            </Form.Button>
            <Form.Button basic color="red" onClick={() => onHide()}>
              Cancelar
            </Form.Button>
          </Form.Group>
        </Form>
      </Modal.Content>
    </StyledFormModal>
  );
};

export default FormModal;

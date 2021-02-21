import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, TextArea, Form, Header } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import { editSlider } from "../../../redux/slider/actions/index";

import { StyledForm } from "./Styled-components";

const EditAboutForm = ({ location: { pathname } }) => {
  useEffect(() => {}, []);

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <>
      <Filter pathname={pathname} noFilter />
      <Grid.Row>
        <StyledForm onSubmit={handleSubmit}>
          <Form.Field>
            <Header textAlign="left" as="h3">
              Descripción
            </Header>
            <TextArea
              name="Descripción"
              id="description"
              placeholder="Ingresa una descripcion"
              onChange={handleChange}
              className="text-area"
            />
          </Form.Field>
          <Form.Group inline>
            <Form.Button basic color="olive" type="submit">
              Cargar
            </Form.Button>
          </Form.Group>
        </StyledForm>
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
  editSlider,
})(EditAboutForm);
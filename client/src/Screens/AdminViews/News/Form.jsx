import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, TextArea, Form, Header } from "semantic-ui-react";

import Filter from "../../../components/AdminComponents/Filter";
import { editNews } from "../../../redux/news/actions/news-actions";

import { StyledForm } from "./Styled-components";

const EditNewsForm = ({ location: { pathname } }) => {
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
    news: { data: news, status },
  } = state;

  return {
    status,
    news,
  };
};

export default connect(mapStateToProps, {
  editNews,
})(EditNewsForm);
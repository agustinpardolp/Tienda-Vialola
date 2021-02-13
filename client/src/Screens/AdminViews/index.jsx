import React, { useState, useCallback, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Image, Search, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import EditAbout from "./About";
import EditGallery from "./Gallery";
import EditSeries from "./Series";
import EditArtwork from "./Artwork";
import Dashboard from "./Dashboard";
import Sidebar from "../../components/AdminComponents/Sidebar";
import SubTittle from "../../components/AdminComponents/SubTittle";
import Button from "../../components/Button";
import { NAVBAR, FILTER_KEYS } from "../../constants";
import {
  StyledAdminContainer,
  StyledEditButtonContainer,
} from "./Styled-components";
import { fetchArtworks } from "../../redux/artworks/actions/artworks-actions";

function Admin({ match }) {
  return (
    <StyledAdminContainer columns={2}>
      <Grid.Row>
        <Grid.Column width={2} className="sidebarContainer">
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={14}>
          <Switch>
            <Route path={`${match.path}`} component={EditArtwork} />
            <Route
              exact
              path={`${match.path}edit-gallery`}
              component={EditGallery}
            />
            <Route path={`${match.path}edit-series`} component={EditSeries} />
            <Route path={`${match.path}edit-about`} component={EditAbout} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
          </Switch>
        </Grid.Column>
      </Grid.Row>
    </StyledAdminContainer>
  );
}
const mapDispatchToProps = { fetchArtworks };
export default connect(null, mapDispatchToProps)(Admin);

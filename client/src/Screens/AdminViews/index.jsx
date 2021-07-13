import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

import Sidebar from "../../components/AdminComponents/Sidebar";
import { fetchArtworks } from "../../redux/artworks/actions/artworks-actions";
import ToastNotification from "../../components/ToastNotification";

import EditSeries from "./Series";
import EditArtwork from "./Artwork";
import { StyledAdminContainer } from "./Styled-components";

function Admin({ match }) {
  return (
    <StyledAdminContainer stackable>
      <ToastNotification />
          <Grid.Column width={2} className="sidebarContainer">
            <Sidebar />
          </Grid.Column>
          <Grid.Column width={14}>
            <Switch>
              <Route
                path={`${match.path}edit-artwork`}
                component={EditArtwork}
              />
              <Route
                exact
                path={`${match.path}edit-series`}
                component={EditSeries}
              />
            </Switch>
          </Grid.Column>
    </StyledAdminContainer>
  );
}
const mapDispatchToProps = { fetchArtworks };
export default connect(null, mapDispatchToProps)(Admin);

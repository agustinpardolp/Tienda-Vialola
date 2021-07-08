import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";

import Login from "../screens/Login";
import Gallery from "../screens/Gallery";
import Artwork from "../screens/Artwork";
import Shop from "../screens/Shop";
import Contact from "../screens/Contact";
import Home from "../screens/Home/index";
import About from "../screens/About";
import Spinner from "../components/Modals&Spinners/spinner";
import Admin from "../screens/AdminViews";

import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import { PATHS } from "./constants";

const Series = React.lazy(() => import("../screens/Series"));

const Routes = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<Spinner active></Spinner>}>
          <PublicRoute exact path={PATHS.gallery} component={Gallery} />
          <PublicRoute exact path={PATHS.home} component={Home} />
          <PublicRoute exact path={PATHS.contact} component={Contact} />
          <PublicRoute exact path={PATHS.about} component={About} />
          <PublicRoute path={PATHS.shop} component={Shop} />
          <PublicRoute path={PATHS.login} component={Login} />
          <PublicRoute exact path={PATHS.category} component={Series} />
          <PublicRoute path={PATHS.serie} component={Artwork} />
        </Suspense>
      </Switch>
      <PrivateRoute exact path={PATHS.adminOptions} component={Admin} />
    </>
  );
};

export default Routes;

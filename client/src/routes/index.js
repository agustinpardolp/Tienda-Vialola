import React, { Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Spinner from "../components/Modals&Spinners/spinner";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import { PATHS } from "./constants";

const Series = React.lazy(() => import("../screens/Series"));
const Login = React.lazy(()=> import("../screens/Login"));
const Gallery = React.lazy(()=> import("../screens/Gallery"));
const Artwork = React.lazy(()=> import("../screens/Artwork"));
const Shop = React.lazy(()=> import("../screens/Shop"));
const Contact = React.lazy(()=> import("../screens/Contact"));
const Home = React.lazy(()=> import("../screens/Home/index"));
const About = React.lazy(()=> import("../screens/About"));
const Admin = React.lazy(()=> import("../screens/AdminViews"));

const Routes = () => {
  return (
    <Suspense fallback={<Spinner active />}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <PublicRoute exact path={PATHS.gallery} component={Gallery} />
        <PublicRoute exact path={PATHS.login} component={Login} />
        <PublicRoute exact path={PATHS.home} component={Home} />
        <PublicRoute exact path={PATHS.contact} component={Contact} />
        <PublicRoute exact path={PATHS.about} component={About} />
        <PublicRoute exact path={PATHS.shop} component={Shop} />
        <PublicRoute exact path={PATHS.category} component={Series} />
        <PublicRoute exact path={PATHS.serie} component={Artwork} />
        <PrivateRoute exact path={PATHS.adminOptions} component={Admin} />
        <Route component={() => <div>LALLALALA 404</div>} />
      </Switch>
    </Suspense>
  );
};

export default Routes;

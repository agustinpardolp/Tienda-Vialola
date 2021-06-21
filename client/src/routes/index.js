import React, { Suspense } from "react";
import { Switch, Redirect} from "react-router-dom";

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

const Series = React.lazy(() => import("../screens/Series"));

const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/home" component={Home} />
        <PublicRoute path="/gallery/:category/:serie" component={Artwork} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/contact" component={Contact} />
        <PublicRoute exact path="/about" component={About} />
        <PublicRoute exact path="/gallery" component={Gallery} />
        <PublicRoute path="/shop/" component={Shop} />
        <PublicRoute path="/admin/login" component={Login} />
        <Suspense fallback={<Spinner active></Spinner>}>
          <PublicRoute path="/gallery/:category" component={Series} />
        </Suspense>
        <Redirect from="/*" to="/home" />
      </Switch>
      <PrivateRoute exact path="/admin/:option" component={Admin} />
    </>
  );
};

export default Routes;

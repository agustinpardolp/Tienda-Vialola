import React from "react";
import { Link } from "react-router-dom";

import { SCREENS_LABELS } from "../../constants";

export const InitialPage = () => {
  return (
    <div id="mainImage">
      <Link to="/home" className="btn-2">
        {SCREENS_LABELS.welcome.labels.enter}
      </Link>
    </div>
  );
};

export default InitialPage;

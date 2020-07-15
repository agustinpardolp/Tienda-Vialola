import React from "react";
import { Link } from "react-router-dom";

export const InitialPage = () => {
  return (
    <div id="mainImage">
         <Link to="/home" className="btn-2">
            Enter
          </Link>
    </div>
  )
}

export default InitialPage;

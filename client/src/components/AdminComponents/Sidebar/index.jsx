import React from "react";
import { StyledSidebar } from "./styled-component";
    import { NAVBAR } from "../../../constants";
const Sidebar = () => {
  return (
    <StyledSidebar>
      <ul>
        {NAVBAR.ADMIN.map((tittle) => {
          return <li>{tittle.NAME}</li>;
        })}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;

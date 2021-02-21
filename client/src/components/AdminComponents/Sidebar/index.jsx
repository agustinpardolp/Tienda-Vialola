import React from "react";
import { useHistory } from "react-router-dom";
import { NAVBAR } from "../../../constants";
import { StyledSidebar, StyledLink } from "./styled-component";
const Sidebar = () => {
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  return (  
    <StyledSidebar>
      <ul>
        {NAVBAR.ADMIN.map((title) => {
          return (
            <StyledLink
              format={title.path === pathname ? "true" : undefined}
              onClick={() => history.push(title.path)}
              key={title.NAME}
            >
              {title.NAME}
            </StyledLink>
          );
        })}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;

import styled from "styled-components";
import { Grid } from "semantic-ui-react";

const StyledAdminContainer = styled(Grid)`
  .sidebarContainer {
    background: #17c3b2;
  }
  .tittleContainer {
    background: #227c9d;
  }
`;

const StyledEditButtonContainer = styled.div`
  height: 4rem;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
  margin-bottom:1rem;
`;

export { StyledAdminContainer, StyledEditButtonContainer };

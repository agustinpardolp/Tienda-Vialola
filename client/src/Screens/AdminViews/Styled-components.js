import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import { DEVICES_MAX_WIDTH } from "../../constants";

const StyledAdminContainer = styled(Grid)`
 background: var(--primaryConfirm);
  @media ${DEVICES_MAX_WIDTH.laptop} {
    margin-top: 15px!important;
  }
  .tittleContainer {
    background: var(--primary);
  }
`;

export { StyledAdminContainer };

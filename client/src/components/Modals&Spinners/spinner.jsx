import React from "react";

import { Dimmer, Loader } from "semantic-ui-react";
import { SpinneContainer } from "./styled-component";

function Spinner() {
  return (
    <SpinneContainer>
      <Dimmer active inverted>
        <Loader size="medium"></Loader>
      </Dimmer>
    </SpinneContainer>
  );
}

export default Spinner;

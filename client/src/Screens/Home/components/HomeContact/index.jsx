import React from "react";
import { Link } from "react-router-dom";
import { StyledHomeContact } from "./styled-components";

const HomeContact = () => {
  return (
    <StyledHomeContact>
      Si deseas realizar una consulta sobre una obra en particular o un encargo
      especial <Link to="/contact"> podes contactarme</Link>
    </StyledHomeContact>
  );
};

export default HomeContact;

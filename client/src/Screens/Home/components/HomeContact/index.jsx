import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { StyledHomeContact } from "./styled-components";

const HomeContact = () => {
  return (
    <StyledHomeContact>
     <FormattedMessage id="home.askMe"/> <Link to="/contact"> <FormattedMessage id="home.contactMe"/></Link>
    </StyledHomeContact>
  );
};

export default HomeContact;

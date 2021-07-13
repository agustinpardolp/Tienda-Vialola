import React from "react";
import { Link } from "react-router-dom";
import {
  StyledBrandContainer,
  StyledBrand,
  StyledBrandLink,
} from "../../styled-components";

const BrandInfo = ({ location }) => {
  return (
    <StyledBrandContainer location={location ? location.pathname : null}>
        <StyledBrand>
            <StyledBrandLink to="/home" location={location.pathname}>
              <img src="/images/logo/FIRMA1.png" alt="" />
            </StyledBrandLink>
        </StyledBrand>
    </StyledBrandContainer>
  );
};

export default React.memo(BrandInfo);

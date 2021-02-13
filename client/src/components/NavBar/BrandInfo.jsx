import React from "react";
import { Link } from "react-router-dom";
import {
  StyledBrandContainer,
  StyledBrand,
  StyledBrandLink,
} from "./styled-components";
import { UpperTranslate } from "../ImageSlider/animations";

const BrandInfo = ({ location, isAdmin }) => {
  return (
    <StyledBrandContainer location={location ? location.pathname : null}>
      <UpperTranslate duration="2s" delay="0.5s">
        <StyledBrand>
          {location.pathname === "/home" ? (
            <StyledBrandLink to="/home" location={location.pathname}>
              <img src="/images/logo/FIRMA2.png" alt="" />
            </StyledBrandLink>
          ) : (
            <StyledBrandLink to="/home" location={location.pathname}>
              <img src="/images/logo/FIRMA2.png" alt="" />
            </StyledBrandLink>
          )}
        </StyledBrand>
      </UpperTranslate>
    </StyledBrandContainer>
  );
};

export default React.memo(BrandInfo);

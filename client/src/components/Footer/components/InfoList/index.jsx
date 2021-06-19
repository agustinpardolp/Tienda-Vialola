import React from "react";
import { Link } from "react-router-dom";
import { StyledLi, StyledLiContainer, StyledLabel } from "../../styled-components";

const InfoList = ({ label, list }) => {
  return (
    <StyledLiContainer>
      <StyledLabel>{label}</StyledLabel>
      <ul>
        {list?.map((item) => (
          <StyledLi key={item.name}>
            <Link to={item.path} rel="stylesheet" />
            {item.name}
          </StyledLi>
        ))}
      </ul>
    </StyledLiContainer>
  );
};

export default InfoList;

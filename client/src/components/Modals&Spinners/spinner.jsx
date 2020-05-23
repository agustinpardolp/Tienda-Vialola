import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

const SpinneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;

function Spinner() {
  return (
    <SpinneContainer>
      <Loader type="Oval" color="grey" height={70} width={70} timeout={20000} />
    </SpinneContainer>
  );
}

export default Spinner;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  .btn-groups {
    width: 25%;
  }
  & button:first-child {
    margin-right: 2%;
  }
`;

const ButtonsGroup = ({ path }) => {
  return (
    <StyledButtonGroup>
      <div className="left">
        <Link to={path} className="btn btn-outline-secondary">
          <i className="fa fa-chevron-left"></i> Continue shopping
        </Link>
      </div>
      <div className="btn-groups">
        <Button className="btn btn-outline-secondary" label={"Update cart"} />
        <Button
          type="submit"
          className="btn btn-outline-success"
          label={"Proceed to checkout"}
        />
      </div>
    </StyledButtonGroup>
  );
};

export default ButtonsGroup;

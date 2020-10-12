import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { StyledButtonGroup } from "./styled-components";

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

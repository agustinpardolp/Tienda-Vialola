import React from "react";
import { Link } from "react-router-dom";
import { StyledMenuOptions, StyledLink } from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { NAVBAR } from "../../constants";

const MenuOptions = ({ location, path }) => {
  return (
    <StyledMenuOptions location={location.pathname}>
      {NAVBAR.OPTIONS.map((option) => {
        return (
          <li key={option.id}>
            <StyledLink
              to={`/${option.NAME.toLowerCase()}`}
              format={option.NAME.toLowerCase() === path ? "true" : undefined}
            >
              {option.NAME}
            </StyledLink>
          </li>
        );
      })}
      <li>
        <Link to="/cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            size="1x"
            className="cart"
            style={{ fontSize: "20px", color: "var(--darkGrey)" }}
          />
        </Link>
      </li>
    </StyledMenuOptions>
  );
};

export default MenuOptions;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { NAVBAR } from "../../constants";

const LinkStyled = styled(Link)`
  text-decoration: none !important;
  color: ${(props) =>
    props.format ? "var(--darkGrey)" : "var(--darkGrey) !important"};
  font-size: ${(props) => (props.format ? "22px" : "17px")};

  link:hover {
    color: grey !important;
    transition: all 0.4s ease 0s;
  }
`;
const ShowMenu = styled.ul`
  color: var(--darkGrey);
  padding-top: 6px;
  text-decoration: solid;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 20px;
  margin: 0 !important;
  transform: translate(100px, 0);
  transform: translate(-100px, 0);
  -webkit-transition: all 2s ease-in-out;

  li {
    margin-left: 40px;
    color: var(--darkGrey);
    transition: all 0.4s ease 0s;
  }
`;

const MenuOptions = ({ location, path }) => {
  return (
    <ShowMenu location={location.pathname}>
      {NAVBAR.OPTIONS.map((option) => {
        return (
          <li key={option.id}>
            <LinkStyled
              to={`/${option.NAME.toLowerCase()}`}
              format={option.NAME.toLowerCase() === path ? "true" : undefined}
            >
              {option.NAME}
            </LinkStyled>
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
    </ShowMenu>
  );
};

export default MenuOptions;

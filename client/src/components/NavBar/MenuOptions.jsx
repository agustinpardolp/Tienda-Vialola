import React, { useContext } from "react";
import { StyledMenuOptions, StyledLink } from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { Context } from "../LenguageWrapper";
import { NAVBAR } from "../../constants";

const MenuOptions = ({ location, path }) => {
  const context = useContext(Context);
  return (
    <StyledMenuOptions location={location.pathname}>
      {NAVBAR.OPTIONS.map((option) => {
        return (
          <li key={option.id}>
            <StyledLink
              to={option.path}
              format={option.NAME.toLowerCase() === path ? "true" : undefined}
            >
              <FormattedMessage id={option.NAME} />
            </StyledLink>
          </li>
        );
      })}
      {/* <li onClick={context.changeLanguage}>
        <FontAwesomeIcon
          icon={faLanguage}
          size="2x"
          className="cart"
          style={{ fontSize: "20px", color: "var(--darkGrey)" }}
        />
      </li> */}
    </StyledMenuOptions>
  );
};

export default MenuOptions;

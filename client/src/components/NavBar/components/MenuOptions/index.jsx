import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { StyledMenuOptions, StyledLink } from "../../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { NAVBAR } from "../../../../constants";

const MenuOptions = ({ location, path }) => {
  const intl = useIntl();
  return (
    <StyledMenuOptions location={location.pathname}>
      {NAVBAR.OPTIONS.map((option) => {
        return (
          <li key={option.id}>
            <StyledLink
              to={option.path}
              format={
                intl.formatMessage({ id: option.name }) === path
                  ? "true"
                  : undefined
              }
            >
              <FormattedMessage id={option.name} />
            </StyledLink>
          </li>
        );
      })}
      {/* <li onClick={context.changeLanguage}>
        <FontAwesomeIcon
          icon={faLanguage}
          size="2x"
          className="cart"
          style={{ fontSize: "20px", color: "var(--mineShaft)" }}
        />
      </li> */}
    </StyledMenuOptions>
  );
};

export default MenuOptions;

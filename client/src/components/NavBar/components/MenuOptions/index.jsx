import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { NAVBAR } from "../../constants";

import { StyledMenuOptions, StyledLink } from "../../styled-components";

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

    </StyledMenuOptions>
  );
};

export default MenuOptions;

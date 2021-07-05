import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { NAVBAR } from "../../constants";
import TransitionWrapper from "../transition";
import { StyledLink, StyledSubMenu } from "./styled-components";

const SubMenu = ({ visible, path, isAdmin }) => {
  return (
    <TransitionWrapper>
      {visible ? (
        isAdmin ? (
          <StyledSubMenu visible={visible}>
            <ul>
              <li>
                <StyledLink to="/admin/dashboard">
                  Panel Administrador
                </StyledLink>
              </li>
            </ul>
          </StyledSubMenu>
        ) : (
          <StyledSubMenu visible={visible}>
            <ul>
              {NAVBAR.OPTIONS.map((option) => {
                return (
                  <li key={option.id}>
                    <StyledLink
                      to={option.path}
                      format={
                        option.name.toLowerCase() === path ? "true" : undefined
                      }
                    >
                      <FormattedMessage id={option.name} />
                    </StyledLink>
                  </li>
                );
              })}
            </ul>
          </StyledSubMenu>
        )
      ) : (
        <></>
      )}
    </TransitionWrapper>
  );
};

export default SubMenu;

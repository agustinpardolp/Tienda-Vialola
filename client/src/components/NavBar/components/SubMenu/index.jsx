import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { NAVBAR } from "../../../../constants";
import { lenguageTypes } from "../../../LenguageWrapper/constants";

import TransitionWrapper from "../../../transition";
import { StyledLink, StyledSubMenu, StyledTranslateContainer } from "./styled-components";

const SubMenu = ({ visible, path, isAdmin, handleChangeLanguage, locale }) => {
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
              <li>
              <StyledTranslateContainer>
                <img
                  src={`/images/logo/${
                    locale === lenguageTypes.en_es
                      ? "britain.png"
                      : "spain.png"
                  }`}
                  onClick={handleChangeLanguage}
                />
              </StyledTranslateContainer>

              </li>
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

import React from "react";
import { DEVICES_MIN_WIDTH, NAVBAR } from "../../constants";
import TransitionWrapper from "../transition";
import { StyledLink, StyledSubMenu } from "./styled-components";

const SubMenu = ({ visible, toogleSidebar, path, isAdmin }) => {
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
                      to={`/${option.NAME.toLowerCase()}`}
                      format={
                        option.NAME.toLowerCase() === path ? "true" : undefined
                      }
                    >
                      {option.NAME}
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

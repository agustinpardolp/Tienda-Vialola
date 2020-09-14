import React from "react";
import { Breadcrumb as BreadcrumbContainer } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { StyledContainer, StyledBreadcrumb } from "./styled-components";

const Breadcrumb = (props) => {
  let {
    location: { pathname },
  } = props;
  let pathArray = pathname.split("/");
  pathArray.splice(0, 1, "home");

  return (
    <StyledBreadcrumb>
      {pathname === "/shop" ? (
        <BreadcrumbContainer>
          <>
            <BreadcrumbContainer.Section link>
              Paintings
            </BreadcrumbContainer.Section>
            <BreadcrumbContainer.Divider />
            <BreadcrumbContainer.Section link>
              Series
            </BreadcrumbContainer.Section>
          </>
        </BreadcrumbContainer>
      ) : (
        <StyledContainer>
          <span link>prints</span>
          <span link>small art</span>
          <span link>objets</span>
          <span link>miscellaneous</span>
        </StyledContainer>
      )}
    </StyledBreadcrumb>
  );
};
export default withRouter(Breadcrumb);

import React from "react";
import { Breadcrumb as BreadcrumbContainer } from "semantic-ui-react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledBreadcrumb = styled.div`
  width: 100%;
  height: 4.5%;
  display: flex;
  padding: 1%;
  padding-left: 3.5%;
  align-items: center;
  justify-content: center;
  padding-right: 10%;
  padding-left: 6%;
  margin-top: 3%;
  /* background: #e2dcd047; */
  a {
    font-size: 1.6rem !important;
    color: ${(props) =>
      props.format
        ? "var(--activeColorFont)!important"
        : "var(--darkGrey) !important"};
  }
  h3 {
    color: ${(props) =>
      props.format
        ? "var(--activeColorFont)!important"
        : "rgb(115, 112, 110) !important"};
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin: 0 !important;
  }
`;
const SubMenuContainer = styled.div`
  margin: auto;
  height: 10%;

  h3 {
    color: ${(props) =>
      props.format
        ? "var(--activeColorFont)!important"
        : "var(--darkGrey) !important"};
    font-size: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin: 0 !important;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width:100%
  span {
    margin-right: 2%;
    font-size: 1.6rem;
  }
`;

const Breadcrumb = (props) => {
  // let titleInfo = ()=> {

  //   return(
  //   "/gallery": { path: "Gallery" },
  //   "/shop": { path: "Shop"  },
  //   "/about": { path: "About" },
  //   "/contact": { path: "Contact" },
  // };
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

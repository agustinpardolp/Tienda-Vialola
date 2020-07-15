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
  justify-content: start;
  padding-right: 10%;
  padding-left: 6%;
  background: #e2dcd047;
  a {
    font-size: 1.4rem !important;
    color: #8e8b85!important;
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
      <BreadcrumbContainer>
       
        <BreadcrumbContainer.Section link>paintings</BreadcrumbContainer.Section>
        <BreadcrumbContainer.Divider />
        <BreadcrumbContainer.Section link>series</BreadcrumbContainer.Section>
        {/* <BreadcrumbContainer.Divider />
        <BreadcrumbContainer.Section active>
          T-Shirt
        </BreadcrumbContainer.Section> */}
      </BreadcrumbContainer>
    </StyledBreadcrumb>
  );
};
export default withRouter(Breadcrumb);

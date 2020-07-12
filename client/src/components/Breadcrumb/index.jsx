import React from "react";
import { Breadcrumb as BreadcrumbContainer } from "semantic-ui-react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const StyledBreadcrumb = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  padding: 1%;
  padding-left: 3.5%;
  align-items: center;
  justify-content: space-between;
  padding-right: 10%;
  padding-left: 10%;
  background: #e2dcd059;
  a {
    font-size: 1.2rem !important;
    color: #67666f !important;
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
    margin:0;
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
      <h3>Paintings</h3>

      <BreadcrumbContainer>
        {pathArray.length &&
          pathArray.map((path) => {
            return (
              <>
                <BreadcrumbContainer.Section link>
                  <Link to={`/${path}`}>{path}</Link>
                  {console.log(props, path)}
                </BreadcrumbContainer.Section>
                <BreadcrumbContainer.Divider />
              </>
            );
          })}
        {/* <BreadcrumbContainer.Section link>Home</BreadcrumbContainer.Section>
        <BreadcrumbContainer.Divider />
        <BreadcrumbContainer.Section link>Store</BreadcrumbContainer.Section>
        <BreadcrumbContainer.Divider />
        <BreadcrumbContainer.Section active>
          T-Shirt
        </BreadcrumbContainer.Section>*/}
      </BreadcrumbContainer>
    </StyledBreadcrumb>
  );
};
export default withRouter(Breadcrumb);

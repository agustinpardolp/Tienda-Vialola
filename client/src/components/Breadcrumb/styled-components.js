import styled from "styled-components";

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

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100% span {
    margin-right: 2%;
    font-size: 1.6rem;
  }
`;

export { StyledContainer, StyledBreadcrumb };

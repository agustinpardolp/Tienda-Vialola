import styled from "styled-components";

const StyledSidebar = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  align-items: flex-start;
  justify-content: center;
  color: dimgrey;
  ul {
    display: grid;
    grid-template-rows: 5rem 5rem 5rem 5rem;
    grid-row-gap: 1rem;
    justify-content: center;
    list-style: none;
    align-items: flex-start;
    margin-top: 5rem;
    font-size: 1.5rem;
    color: white;
    text-align: justify;
    li {
      transition: ease-in-out 1s;
    
    }
    li:hover {
      color: lightblue;
      transition: ease-in-out 1s;
      
    }
  }
`;

export { StyledSidebar };

import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

import {FOOTER} from "../../constants";

const StyledFooter = styled.div`
height: 7vh;
background-color: transparent; 
display: grid;
    grid-template-columns: 54% 46%;
    align-items: center;
`;

const StyledSpan = styled.span`
text-align: end;
  color: var(--darkGrey);
`;

const StyledLink = styled(Link)`
  color:var(--darkGrey);
  text-decoration:none!important;
  font-size: 20px;
  text-align: end;
  margin-right: 22%;
`;

function Footer({back}) {
    return (
        <StyledFooter>
           <StyledSpan>{FOOTER.RIGHTS}</StyledSpan>
            { back && (
              <StyledLink to = {`${back}`}>{FOOTER.BACK}</StyledLink>
            )}
        </StyledFooter>
    )
}

export default Footer

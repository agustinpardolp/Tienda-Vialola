import React from "react";
import { Link } from "react-router-dom";
import { Divider, Header } from "semantic-ui-react";
import styled from "styled-components";

const StyledDividerContainer = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  .divider {
    display: flex;
    width: 80%;
  }
  .header {
    align-self: center;
    width: fit-content !important;

    & span {
      font-size: 1.6rem;
      font-weight: 500;
    }
    & a {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export default function Dividers({ titleElements = "" }) {
  return (
    <StyledDividerContainer>
      <Divider horizontal className="divider">
        <Header as="h4" className="header">
          {titleElements &&
            titleElements.map((title) => {
              return (
                <>
                  {title.NAME ? (
                    <Link to={title.path}>{` ${title.NAME} `}</Link>
                  ) : (
                    <span>{title} </span>
                  )}
                </>
              );
            })}
        </Header>
      </Divider>
    </StyledDividerContainer>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import styled from "styled-components";

const StyledDividerContainer = styled.div`
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  .divider {
    display: flex;
    width: 80%;
  }
`;
const StyledSubtitleContainer = styled.div`
  ${(props) => props.isLinked && "width: 25vw"};
  display: flex;
  justify-content: space-between;
  & span {
    font-size: 1.6rem;
    font-weight: 500;
  }
  & a {
    font-size: 1.6rem;
    font-weight: 500;
    margin-right: 1%;
    text-transform: lowercase;
  }
`;

const Dividers = ({ titleElements = "" }) => {
  return (
    <StyledDividerContainer>
      <Divider horizontal className="divider">
        <StyledSubtitleContainer isLinked={titleElements[0].NAME}>
          {/* <Header as="h4" className="header"> */}
          {titleElements &&
            titleElements.map((title) =>
              title.path ? (
                <Link
                  key={title.id}
                  to={`/shop/${title.path}`}
                >{` ${title.NAME.toLowerCase()} `}</Link>
              ) : (
                <span key={title.id}>{title.name} </span>
              )
            )}
          {/* </Header> */}
        </StyledSubtitleContainer>
      </Divider>
    </StyledDividerContainer>
  );
};
export default Dividers;

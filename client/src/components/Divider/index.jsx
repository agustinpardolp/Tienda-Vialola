import React, { Suspense } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import {
  StyledDividerContainer,
  StyledSubtitleContainer,
} from "./styled-components";

const Dividers = ({ titleElements = "" }) => {
  return (
    <StyledDividerContainer>
      <Divider horizontal className="divider">
        {titleElements.length > 0 && (
          <StyledSubtitleContainer isLinked={titleElements[0].NAME}>
            {titleElements.map((title) =>
              title.path ? (
                <Link
                  key={title.id}
                  to={`/shop/${title.path}`}
                >{` ${title.NAME.toLowerCase()} `}</Link>
              ) : (
                <span key={title.id}><FormattedMessage id={title.name}  /></span>
              )
            )}
          </StyledSubtitleContainer>
        )}
      </Divider>
    </StyledDividerContainer>
  );
};
export default Dividers;

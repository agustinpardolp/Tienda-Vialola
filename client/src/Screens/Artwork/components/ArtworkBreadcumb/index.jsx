import React from "react";
import { FormattedMessage } from "react-intl";
import {
  StyledBreadcrumb,
  StyledBreadcrumbSection,
} from "../../styled-components";
const ArtworkBreadcrum = ({ items, history }) => {
  const handleClick = (path) => {
    path && history.push(path);
  };
  return (
    <StyledBreadcrumb>
      {items.map((item) => (
        <>
          <StyledBreadcrumbSection
            key={item.name}
            onClick={() => handleClick(item.path)}
          >
            <FormattedMessage id={item.name} />
          </StyledBreadcrumbSection>
        </>
      ))}
    </StyledBreadcrumb>
  );
};

export default ArtworkBreadcrum;

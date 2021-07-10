import React from "react";
import { FormattedMessage } from "react-intl";
import {
  StyledBreadcrumb,
  StyledBreadcrumbSection,
} from "../../styled-components";
const ArtworkBreadcrum = ({ items, history, position }) => {
  const handleClick = (path) => {
    path && history.push(path);
  };
  return (
    <StyledBreadcrumb position={position}>
      {items.map((item) => (
        <>
          {item.status ? (
            <StyledBreadcrumbSection
              key={item.name}
              onClick={() => handleClick(item.path)}
            >
              <FormattedMessage id={item.name} />
            </StyledBreadcrumbSection>
          ) : null}
        </>
      ))}
    </StyledBreadcrumb>
  );
};

export default ArtworkBreadcrum;

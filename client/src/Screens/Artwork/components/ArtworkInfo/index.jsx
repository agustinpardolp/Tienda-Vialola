import React from "react";
import { FormattedMessage } from "react-intl";
import { PATHS } from "../../../../routes/constants";

import {
  StyledInfo,
  StyledList,
  StyledContainer,
  StyledLink,
} from "../../styled-components";
import ArtworkBreadcrum from "../ArtworkBreadcumb";

const ArtworkInfo = ({ imgInfo, artworksBySerie, history }) => {
  const handleClick = () => {
    history.push({
      pathname: PATHS.contact,
      state: {
        ...imgInfo,
        name: artworksBySerie[0].name,
        description: artworksBySerie[0].description,
        price: artworksBySerie[0].price,
        priceReproduction: artworksBySerie[0].priceReproduction,
      },
    });
  };
  return (
    <StyledInfo>
      <StyledList>
        <li>
          <FormattedMessage id="artwork.infoTitle" />
          {`${imgInfo.name || artworksBySerie[0].name}`}
        </li>
        <li>{`${imgInfo.description || artworksBySerie[0].description}`}</li>
      </StyledList>
      <StyledContainer>
        <ArtworkBreadcrum
          items={[
            { name: "artowork.printsAvailable", path: "" },
            { name: "artwork.originalOnSale", path: "" },
          ]}
          history={history}
        />
        <StyledLink onClick={handleClick}>
          <FormattedMessage id="artwork.here" />
        </StyledLink>
      </StyledContainer>
    </StyledInfo>
  );
};

export default ArtworkInfo;

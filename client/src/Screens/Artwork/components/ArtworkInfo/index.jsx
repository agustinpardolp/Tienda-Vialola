import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { PATHS } from "../../../../routes/constants";

import {
  StyledInfo,
  StyledList,
  StyledContainer,
  StyledLink,
} from "../../styled-components";
import ArtworkBreadcrum from "../ArtworkBreadcumb";

const ArtworkInfo = ({ imgInfo, history }) => {
  console.log(imgInfo)
  const handleClick = () => {
    history.push({
      pathname: PATHS.contact,
      state: {
        ...imgInfo,
        name: imgInfo.name,
        description: imgInfo.description,
        price: imgInfo.price,
        priceReproduction: imgInfo.priceReproduction,
        allowReproduction: imgInfo.allowReproduction,
        allowOriginal: imgInfo.allowOriginal
      },
    });
  };

  const handlePrintsOStatus = useMemo(() => {
    if (!imgInfo.allowOriginal && !imgInfo.allowReproduction) return [];
    let options = [
      {
        name: "artwork.printsAvailable",
        path: "",
        status: imgInfo.allowReproduction,
      },
      {
        name: "artwork.originalOnSale",
        path: "",
        status: imgInfo.allowOriginal,
      },
    ];

    return options;
  }, [imgInfo]);

  return (
    <StyledInfo>
      <StyledList>
        <li>
          <FormattedMessage id="artwork.infoTitle" />
          {` ${imgInfo.name}`}
        </li>
        <li>{`${imgInfo.description}`}</li>
      </StyledList>
      <StyledContainer>
        <ArtworkBreadcrum
          items={handlePrintsOStatus}
          history={history}
          position="center"
        />
        {handlePrintsOStatus.length > 0 && (
          <StyledLink onClick={handleClick}>
            <FormattedMessage id="artwork.here" />
          </StyledLink>
        )}
      </StyledContainer>
    </StyledInfo>
  );
};

export default ArtworkInfo;

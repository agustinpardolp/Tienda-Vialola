import React from "react";
import { Link } from "react-router-dom";
import { SCREENS_LABELS } from "../../constants";
import { StyledInfo } from "./styled-components";

const ArtworkInfo = ({ imgInfo, artworksBySerie }) => {
  return (
    <StyledInfo>
      <div>
        <Link to={`/gallery/${artworksBySerie[0].category.name}`}>back</Link>
      </div>
      <figcaption>
        <ul>
          <li>
            <h4>{SCREENS_LABELS.artwork.labels.title}</h4>
            {`${imgInfo.name || artworksBySerie[0].name}`}
          </li>
          <li>
            <h4>{SCREENS_LABELS.artwork.labels.category}</h4>
            {`${imgInfo.category || artworksBySerie[0].category.name}`}
          </li>
          <li>
            <h4>{SCREENS_LABELS.artwork.labels.serie}</h4>
            {`${imgInfo.serie || artworksBySerie[0].serie.name}`}
            <br></br>
          </li>
          <li>
            <h4>{SCREENS_LABELS.artwork.labels.description} </h4>
            {`${imgInfo.description || artworksBySerie[0].description}`}
          </li>
        </ul>

        <p>{SCREENS_LABELS.artwork.labels.printsAvailable}</p>
      </figcaption>
    </StyledInfo>
  );
};

export default ArtworkInfo;

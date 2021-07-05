import React from "react";
import { StyledMediaContainer } from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaList } from "../../constants";
const Media = () => {
  const handleClick = (path) => {
    window.open(path, "_blank");
  };
  return (
    <StyledMediaContainer>
      {mediaList.map((media) => (
        <FontAwesomeIcon
          key={media.name}
          icon={media.icon}
          size="3x"
          onClick={() => handleClick(media.path)}
        />
      ))}
    </StyledMediaContainer>
  );
};

export default Media;

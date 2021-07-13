import React from "react";
import { StyledMediaContainer } from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaList } from "../../constants";

const Media = ({ size }) => {
  const handleClick = (path) => {
    window.open(path, "_blank");
  };
  return (
    <StyledMediaContainer size={size}>
      {mediaList.map((media) => (
        <FontAwesomeIcon
          key={media.name}
          icon={media.icon}
          onClick={() => handleClick(media.path)}
        />
      ))}
    </StyledMediaContainer>
  );
};

export default Media;

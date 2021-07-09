import React from "react";
import { StyleMedia } from "../../styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarMediaList } from "../../constants";



const MediaInfo = () => {
  const handleClick = (path) => {
    window.open(path, "_blank");
  };
  return (
    <StyleMedia>
      {navbarMediaList.map((media) => (
        <FontAwesomeIcon
          key={media.name}
          icon={media.icon}
          onClick={() => handleClick(media.path)}
          size="1x"
          className="cart"
          style={{ fontSize: "20px", color: "var(--mineShaft)" }}
        />
      ))}
    </StyleMedia>
  );
};

export default MediaInfo;

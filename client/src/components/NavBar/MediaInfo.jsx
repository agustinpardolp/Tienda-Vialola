import React from "react";
import { Link } from "react-router-dom";
import { StyleMedia } from "./styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const MediaInfo = () => {
  return (
    <StyleMedia>
      <Link to={"/"}>
        <FontAwesomeIcon
          icon={faFacebook}
          size="1x"
          className="cart"
          style={{ fontSize: "20px", color: "var(--mineShaft)" }}
        />
      </Link>
      <Link to={"/"}>
        <FontAwesomeIcon
          icon={faTwitter}
          size="1x"
          className="cart"
          style={{ fontSize: "20px", color: "var(--mineShaft)" }}
        />
      </Link>
      <Link to={"/"}>
        <FontAwesomeIcon
          icon={faInstagram}
          size="1x"
          className="cart"
          style={{ fontSize: "20px", color: "var(--mineShaft)" }}
        />
      </Link>
    </StyleMedia>
  );
};

export default MediaInfo;

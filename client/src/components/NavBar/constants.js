import {
  faInstagram,
  faLinkedin,
  faBehanceSquare,
} from "@fortawesome/free-brands-svg-icons";
import { PATHS } from "../../routes/constants";

export const navbarMediaList = [
  {
    name: "Instagram",
    path: "https://www.instagram.com/dibujanta/?hl=es",
    icon: faInstagram,
  },
  {
    name: "LinkedIn",
    path:
      "https://www.linkedin.com/in/dolores-pardo-0a43271b5/?originalSubdomain=ar",
    icon: faLinkedin,
  },
  {
    name: "Behance",
    path: "https://www.behance.net/dolorespardo",
    icon: faBehanceSquare,
  },
];

export const NAVBAR = {
  OPTIONS: [
    { name: "navbar.home", id: 1, path: PATHS.home },
    { name: "navbar.about", id: 2, path: PATHS.about },
    { name: "navbar.gallery", id: 3, path: PATHS.gallery },
    { name: "navbar.shop", id: 4, path: PATHS.shop },
    { name: "navbar.contact", id: 5, path: PATHS.contact },
  ],
  SHOPOPTIONS: [
    { NAME: "prints  ", id: 2, path: "prints" },
    { NAME: "small art  ", id: 3, path: "small-art" },
    { NAME: "objects  ", id: 4, path: "objects" },
    { NAME: "miscellaneous", id: 5, path: "miscellaneous" },
  ],
  ARTIST: {
    NAME: "Dolores Pardo",
  },
  ADMIN: [
    { NAME: "Artwork", id: 1, path: PATHS.adminEditArtwork },
    { NAME: "Series", id: 2, path: PATHS.adminEditSeries },
  ],
};

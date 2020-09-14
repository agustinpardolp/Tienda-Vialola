//ARTWORKS CONSTANTS

export const types = {
  //PRODUCTS
  FETCH_PRODUCTS: "FETCH_PRODUCTS",
  FETCH_PRODUCTS_FAILURE: "FETCH_PRODUCTS_FAILURE",
  FETCH_PRODUCTS_CATEGORIES: "FETCH_PRODUCTS_CATEGORIES",
  FETCH_PRODUCTS_CATEGORIES_SUCCESS: "FETCH_PRODUCTS_CATEGORIES_SUCCESS",
  FETCH_PRODUCTS_CATEGORIES_FAILURE: "FETCH_PRODUCTS_CATEGORIESS_FAILURE",
  FETCH_PRODUCTS_BY_SECTION: "FETCH_PRODUCTS_BY_SECTION",
  FETCH_PRODUCTS_BY_SECTION_SUCCESS: "FETCH_PRODUCTS_BY_SECTION_SUCCESS",
  FETCH_PRODUCTS_BY_SECTION_FAILURE: "FETCH_PRODUCTS_BY_SECTION_FAILURE",
  //ARTWORK
  FETCH_ARTWORKS: "FETCH_ARTWORKS",
  FETCH_ARTWORKS_SUCCESS: "FETCH_ARTWORKS_SUCCESS",
  FETCH_ARTWORKS_FAILURE: "FETCH_ARTWORKS_FAILURE",
  FETCH_ARTWORK_CATEGORIES: "FETCH_ARTWORK_CATEGORIES",
  FETCH_ARTWORK_CATEGORIES_SUCCESS: "FETCH_ARTWORK_CATEGORIES_SUCCESS",
  FETCH_ARTWORK_CATEGORIES_FAILURE: "FETCH_ARTWORK_CATEGORIESS_FAILURE",
  FETCH_ARTWORKS_BY_SERIE: "FETCH_ARTWORKS_BY_SERIE",
  FETCH_ARTWORKS_BY_SERIE_SUCCESS: "FETCH_ARTWORKS_BY_SERIE_SUCCESS",
  FETCH_ARTWORKS_BY_SERIE_FAILURE: "FETCH_ARTWORKS_BY_SERIE_FAILURE",
  //HOME
  UPDATE_HOME_IMAGE: "UPDATE_HOME_IMAGE",
  SET_INITIAL_EFFECT: "SET_INITIAL_EFFECT",
  //USER CONSTANT
  RECEIVE_LOGGED_USER: "RECEIVE_LOGGED_USER",

  //SIDEBAR
  RECEIVE_MENU_OPTION: "RECEIVE_MENU_OPTION",
  //CART
  RECEIVE_CREATED_CART: "RECEIVE_CREATED_CART",

  //SERIES
  FETCH_SERIES: "FETCH_SERIES",
  FETCH_SERIES_SUCCESS: "FETCH_SERIES:_SUCCESS",
  FETCH_SERIES_FAILURE: "FETCH_SERIES:_FAILURE",
  //PRODUCT
  FETCH_PRODUCT_BY_ID: "FETCH_PRODUCT_BY_ID",
  FETCH_PRODUCT_BY_ID_SUCCESS: "FETCH_PRODUCT_BY_ID_SUCCESS",
  FETCH_PRODUCT_BY_ID_FAILURE: "FETCH_PRODUCT_BY_ID_FAILURE",
};

export const NAVBAR = {
  OPTIONS: [
    { NAME: "Home", id: 1, path: "/home" },
    { NAME: "About", id: 2, path: "/about" },
    { NAME: "Gallery", id: 3, path: "/gallery" },
    { NAME: "Shop", id: 4, path: "/shop/prints" },
    { NAME: "Contact", id: 5, path: "/contact" },
    { NAME: "News", id: 6, path: "/news" },
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
};

export const IMAGES = [
  { NAME: "slide8" },
  { NAME: "slide5" },
  { NAME: "slide15" },
  { NAME: "slide6" },
  { NAME: "slide3" },
  { NAME: "slide10" },
  { NAME: "slide13" },
  { NAME: "slide11" },
  { NAME: "slide12" },
  { NAME: "slide4" },
];

export const BACKGROUND_IMAGES = {
  ABOUT: "about",
  CONTACT: "contact2",
  DEFAULT: "fondo4Bis",
};

export const FOOTER = {
  RIGHTS: "All Rights Reserved",
  BACK: "Back",
};

export const PRODUCTS = {
  DESCRIPTION: "Description",
  CATEGORY: "Category",
  DATE: "Date",
};

export const MEDIA_SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const DEVICES_MAX_WIDTH = {
  mobileS: `(max-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(max-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(max-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(max-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(max-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(max-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(max-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(max-width: ${MEDIA_SIZES.desktop})`,
};

export const DEVICES_MIN_WIDTH = {
  mobileS: `(min-width: ${MEDIA_SIZES.mobileS})`,
  mobileM: `(min-width: ${MEDIA_SIZES.mobileM})`,
  mobileL: `(min-width: ${MEDIA_SIZES.mobileL})`,
  tablet: `(min-width: ${MEDIA_SIZES.tablet})`,
  laptop: `(min-width: ${MEDIA_SIZES.laptop})`,
  laptopL: `(min-width: ${MEDIA_SIZES.laptopL})`,
  desktop: `(min-width: ${MEDIA_SIZES.desktop})`,
  desktopL: `(min-width: ${MEDIA_SIZES.desktop})`,
};

export const REQUEST_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  FAILED: "FAILED",
};
export const SCREENS_LABELS = {
  artwork: {
    labels: {
      title: "Title",
      category: "Category:",
      serie: "Serie:",
      description: "Description:",
      printsAvailable: "Prints available, please send a coment",
    },
  },
  welcome: {
    labels: {
      enter: "Enter",
    },
  },
};

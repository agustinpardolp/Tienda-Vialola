export const API_DOMAIN = "/vialola-api";

export const API_LOGIN = `${API_DOMAIN}/users/accounts/login/`;
export const API_LOGOUT = `${API_DOMAIN}/users/accounts/logout/`;
export const API_CATEGORIES = `${API_DOMAIN}/categories/`;
export const API_ARTWORKS = `${API_DOMAIN}/artworks/`;
export const API_SERIES = `${API_DOMAIN}/series/`;
export const API_PRODUCTS = `${API_DOMAIN}/products/`;
export const API_PROFILE = `${API_DOMAIN}/profile/`;
export const API_SLIDER = `${API_DOMAIN}/slider/`;
export const API_ABOUT = `${API_DOMAIN}/users/about/`;
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
  EDIT_ARTWORK: "EDIT_ARTWORK",
  EDIT_ARTWORK_SUCCESS: "EDIT_ARTWORK_SUCCESS",
  EDIT_ARTWORK_FAILURE: "EDIT_ARTWORK_FAILURE",
  DELETE_ARTWORK: "DELETE_ARTWORK",
  DELETE_ARTWORK_SUCCESS: "DELETE_ARTWORK_SUCCESS",
  DELETE_ARTWORK_FAILURE: "DELETE_ARTWORK_FAILURE",
  CREATE_ARTWORK: "CREATE_ARTWORK",
  CREATE_ARTWORK_SUCCESS: "CREATE_ARTWORK_SUCCESS",
  CREATE_ARTWORK_FAILURE: "CREATE_ARTWORK_FAILURE",
  //HOME
  UPDATE_HOME_IMAGE: "UPDATE_HOME_IMAGE",
  SET_INITIAL_EFFECT: "SET_INITIAL_EFFECT",
  //USER CONSTANT
  RECEIVE_LOGGED_USER: "RECEIVE_LOGGED_USER",
  RECEIVE_LOGGED_USER_FAILURE: "RECEIVE_LOGGED_USER_FAILURE",
  RECEIVE_LOGGED_USER_SUCCESS: "RECEIVE_LOGGED_USER_SUCCESS",
  FETCH_ABOUT: "FETCH_ABOUT",
  FETCH_ABOUT_SUCCESS: "FETCH_ABOUT_SUCCESS",
  FETCH_ABOUT_FAILURE: "FETCH_ABOUT_FAILURE",
  EDIT_ABOUT: "EDIT_ABOUT",
  EDIT_ABOUT_SUCCESS: "EDIT_ABOUT_SUCCESS",
  EDIT_ABOUT_FAILURE: "EDIT_ABOUT_FAILURE",
  //SIDEBAR
  RECEIVE_MENU_OPTION: "RECEIVE_MENU_OPTION",
  //CART
  RECEIVE_CREATED_CART: "RECEIVE_CREATED_CART",

  //SERIES
  FETCH_SERIES: "FETCH_SERIES",
  FETCH_SERIES_SUCCESS: "FETCH_SERIES:_SUCCESS",
  FETCH_SERIES_FAILURE: "FETCH_SERIES:_FAILURE",
  EDIT_SERIE: "EDIT_SERIE",
  EDIT_SERIE_SUCCESS: "EDIT_SERIE_SUCCESS",
  EDIT_SERIE_FAILURE: "EDIT_SERIE_FAILURE",
  DELETE_SERIE: "DELETE_SERIE",
  DELETE_SERIE_SUCCESS: "DELETE_SERIE_SUCCESS",
  DELETE_SERIE_FAILURE: "DELETE_SERIE_FAILURE",
  CREATE_SERIE: "CREATE_SERIE",
  CREATE_SERIE_SUCCESS: "CREATE_SERIE_SUCCESS",
  CREATE_SERIE_FAILURE: "CREATE_SERIE_FAILURE",

  //PRODUCT
  FETCH_PRODUCT_BY_ID: "FETCH_PRODUCT_BY_ID",
  FETCH_PRODUCT_BY_ID_SUCCESS: "FETCH_PRODUCT_BY_ID_SUCCESS",
  FETCH_PRODUCT_BY_ID_FAILURE: "FETCH_PRODUCT_BY_ID_FAILURE",

  //SLIDER
  EDIT_SLIDER: "EDIT_SLIDER",
  EDIT_SLIDER_SUCCESS: "EDIT_SLIDER_SUCCESS",
  EDIT_SLIDER_FAILURE: "EDIT_SLIDER_FAILURE",
  FETCH_SLIDER: "FETCH_SLIDER",
  FETCH_SLIDER_SUCCESS: "FETCH_SLIDER_SUCCESS",
  FETCH_SLIDER_FAILURE: "FETCH_SLIDER_FAILURE",
  DELETE_SLIDER: "DELETE_SLIDER",
  DELETE_SLIDER_SUCCESS: "DELETE_SLIDER_SUCCESS",
  DELETE_SLIDER_FAILURE: "DELETE_SLIDER_FAILURE",
};

export const QUERY_PARAMS = {
  SERIES: "?serie=",
  CATEGORIES: "?category=",
  ARTWORK: "?artwork=",
};

export const REGEX = {
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  EMAIL_REGEX_SCHEMA: /^(?=.{1,254}$)((?=.{1,64}@)[ñÑa-zA-Z0-9-`~!@#$%^&*?/()_|+\-=;:'"´¨,.<>\{\}\[\]\\\/]+\.[A-Za-z]{2,4},?)$/,
};

export const NAVBAR = {
  OPTIONS: [
    { NAME: "navbar.home", id: 1, path: "/home" },
    { NAME: "navbar.about", id: 2, path: "/about" },
    { NAME: "navbar.gallery", id: 3, path: "/gallery" },
    { NAME: "navbar.shop", id: 4, path: "/shop" },
    { NAME: "navbar.contact", id: 5, path: "/contact" },
    // { NAME: "News", id: 6, path: "/news" },
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
    { NAME: "Artwork", id: 1, path: "/admin/edit-artwork" },
    { NAME: "Series", id: 2, path: "/admin/edit-series" },
    { NAME: "Slider", id: 3, path: "/admin/edit-slider" },
    { NAME: "About", id: 4, path: "/admin/edit-about" },
  ],
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

export const FILTER_LABELS = {
  series: "Series",
  categories: "Categorias",
  artwork: "Artwork",
};

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

export const FILTER_KEYS = {
  ARTWORK: [
    {
      key: "&artwork",
      text: "Jenny Hess",
      value: "Jenny Hess",
      image: { avatar: true, src: "/images/avatar/small/jenny.jpg" },
    },
    {
      key: "Elliot Fu",
      text: "Elliot Fu",
      value: "Elliot Fu",
      image: { avatar: true, src: "/images/avatar/small/elliot.jpg" },
    },
    {
      key: "Stevie Feliciano",
      text: "Stevie Feliciano",
      value: "Stevie Feliciano",
      image: { avatar: true, src: "/images/avatar/small/stevie.jpg" },
    },
  ],
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

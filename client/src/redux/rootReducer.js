import { combineReducers } from "redux";

import optionSidebar from "./sidebar/reducer/index";
import artworkCategories from "./artworkCategories/reducers/artwork-categories-reducer";
import artworksBySerie from "./artworks/reducers/artworksBySerie-reducer";
import clientConsult from "./artworks/reducers/artwork-client-consult-reducer";
import artworks from "./artworks/reducers/artworks-reducer";
import home from "./home/reducers/home-reducers.js";
import series from "./series/reducer/series-reducer";
import user from "./login/reducers/user-reducer";
import deleteSeries from "./series/reducer/delete-serie-reducer";
import notification from "./notification/reducer/notifications-reducer";
import homeOptions from "./homeOptions/reducer/home-options-reducer";
import news from "./news/reducers/news-reducer";

export default combineReducers({
  artworks,
  optionSidebar,
  home,
  artworkCategories,
  artworksBySerie,
  series,
  user,
  deleteSeries,
  notification,
  homeOptions,
  news,
  clientConsult
});

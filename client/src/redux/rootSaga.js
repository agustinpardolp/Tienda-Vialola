import {  all,  fork } from "redux-saga/effects";
import artworksBySerieWatcher  from './artworks/sagas/fetchArtworksBySerieSaga'; //a modo de ejemplo se importan todos los componentes
import menuOptionsWatcher from "./sidebar/sagas/index";
import artworkCategoriesWatcher from "./artworkCategories/sagas/";
import cartWatcher from "./cart/sagas/index";
import artworksWatcher from "./artworks/sagas/fetchArtworksSaga";
import seriesWatcher from "./series/sagas/index";
export default function* rootSaga() {

    yield all([
      fork(artworksWatcher),
      fork(menuOptionsWatcher),
      fork(artworkCategoriesWatcher),
      fork(cartWatcher),
      fork(artworksBySerieWatcher),
      fork(seriesWatcher)
      ])
  }
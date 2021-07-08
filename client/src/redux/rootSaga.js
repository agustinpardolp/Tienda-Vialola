import {  all,  fork } from "redux-saga/effects";

import artworksBySerieWatcher  from './artworks/sagas/fetchArtworksBySerieSaga';
import menuOptionsWatcher from "./sidebar/sagas/index";
import artworkCategoriesWatcher from "./artworkCategories/sagas/";
import artworksWatcher from "./artworks/sagas/fetchArtworksSaga";
import seriesWatcher from "./series/sagas/";
import loginUserWatcher from "./login/sagas"
import editArtworkWatcher from "./artworks/sagas/editArtworkSaga";
import deleteArtworkSagaWatcher from "./artworks/sagas/deleteArtworkSaga";
import createArtworkSagaWatcher from "./artworks/sagas/createArtworkSaga";
import deleteSerieWatcher from "./series/sagas/deleteSerieSaga";
import createSerieWatcher from "./series/sagas/createSerieSaga";
import editSerieWatcher from "./series/sagas/editSerieSaga";
import sliderWatcher from "./slider/sagas";
import deleteSliderWatcher from "./slider/sagas/deleteSliderSaga"
import newsWatcher from "./news/sagas/fetchNewsSaga"
import createClientConsultSagaWatcher from "./artworks/sagas/createClientConsultSaga";

export default function* rootSaga() {

    yield all([
      fork(artworksWatcher),
      fork(menuOptionsWatcher),
      fork(artworkCategoriesWatcher),
      fork(artworksBySerieWatcher),
      fork(seriesWatcher),
      fork(loginUserWatcher),
      fork(editArtworkWatcher),
      fork(deleteArtworkSagaWatcher),
      fork(createArtworkSagaWatcher),
      fork(deleteSerieWatcher),
      fork(createSerieWatcher),
      fork(editSerieWatcher),
      fork(sliderWatcher),
      fork(deleteSliderWatcher),
      fork(newsWatcher),
      fork(createClientConsultSagaWatcher)
      ])
  }
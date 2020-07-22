import { takeLatest } from "redux-saga/effects";
import fetchArtworkCategoriesSaga from "./fetchArtworkCategoriesSaga";
import { types } from "../../../constants";

export default function* artworkCategoriesWatcher() {
  yield takeLatest(types.FETCH_ARTWORK_CATEGORIES, fetchArtworkCategoriesSaga);
}

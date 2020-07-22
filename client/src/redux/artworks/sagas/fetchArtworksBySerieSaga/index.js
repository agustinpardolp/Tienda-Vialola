import { takeLatest } from "redux-saga/effects";
import fetchArtworksBySerieSaga from "./fetchArtworksBySerie";
import { types } from "../../../../constants";

export default function* artworksBySerieWatcher() {
  yield takeLatest(types.FETCH_ARTWORKS_BY_SERIE, fetchArtworksBySerieSaga);
}

import { takeLatest } from "redux-saga/effects";
import createArtworkSaga from "./createArtworkSaga";
import { types } from "../../../../constants";

export default function* editArtworkWatcher() {
  yield takeLatest(types.CREATE_ARTWORK, createArtworkSaga);
}
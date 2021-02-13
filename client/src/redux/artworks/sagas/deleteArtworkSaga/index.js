import { takeLatest } from "redux-saga/effects";
import deleteArtworkSaga from "./deleteArtworkSaga";
import { types } from "../../../../constants";

export default function* deleteArtworkWatcher() {
  yield takeLatest(types.DELETE_ARTWORK, deleteArtworkSaga);
}
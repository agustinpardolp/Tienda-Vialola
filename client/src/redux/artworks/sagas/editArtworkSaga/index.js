import { takeLatest } from "redux-saga/effects";
import editArtworkSaga from "./editArtworkSaga";
import { types } from "../../../../constants";

export default function* editArtworkWatcher() {
  yield takeLatest(types.EDIT_ARTWORK, editArtworkSaga);
}
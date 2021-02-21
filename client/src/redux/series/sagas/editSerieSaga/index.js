import { takeLatest } from "redux-saga/effects";
import editSerieSaga from "./editSerieSaga";
import { types } from "../../../../constants";

export default function* editSerieWatcher() {
  yield takeLatest(types.EDIT_SERIE, editSerieSaga);
}
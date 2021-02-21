import { takeLatest } from "redux-saga/effects";
import deleteSerieSaga from "./deleteSerieSaga";
import { types } from "../../../../constants";

export default function* deleteSerieWatcher() {
  yield takeLatest(types.DELETE_SERIE, deleteSerieSaga);
}
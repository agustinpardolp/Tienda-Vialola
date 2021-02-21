import { takeLatest } from "redux-saga/effects";
import createSerieSaga from "./createSerieSaga";
import { types } from "../../../../constants";

export default function* createSerieWatcher() {
  yield takeLatest(types.CREATE_SERIE, createSerieSaga);
}
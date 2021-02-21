import { takeLatest } from "redux-saga/effects";

import { types } from "../../../../constants";

import fetchAboutSaga from "./fetchAboutSaga";

export default function* aboutsWatcher() {
  yield takeLatest(types.FETCH_ABOUT, fetchAboutSaga);
}

import { takeLatest } from "redux-saga/effects";

import { types } from "../../../../constants";

import fetchNewSaga from "./fetchNewsSaga";

export default function* NewsWatcher() {
  yield takeLatest(types.FETCH_NEWS, fetchNewSaga);
}

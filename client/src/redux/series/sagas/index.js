import { takeLatest } from "redux-saga/effects";

import { types } from "../../../constants";

import fetchSeriesSaga from "./fetchSeriesSaga";

export default function* seriesWatcher() {
  yield takeLatest(types.FETCH_SERIES, fetchSeriesSaga);
}
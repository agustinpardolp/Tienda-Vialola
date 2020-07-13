import { takeLatest } from "redux-saga/effects";
import fetchSeriesSaga from "./fetchSeriesSaga";
import { types } from "../../../constants";

export default function* seriesWatcher() {
  yield takeLatest(types.FETCH_SERIES, fetchSeriesSaga);
}
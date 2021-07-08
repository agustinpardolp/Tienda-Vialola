import { takeLatest } from "redux-saga/effects";

import { types } from "../../../constants";

import fetchHomeOptionsSaga from "./fetchHomeOptionsSaga";

export default function* fetchHomeOptionsWatcher() {
  yield takeLatest(types.FETCH_HOME_OPTIONS, fetchHomeOptionsSaga);
}
import { takeLatest } from "redux-saga/effects";

import { types } from "../../../../constants";

import deleteHomeOptionsSaga from "./deleteHomeOptionsSaga";

export default function* deleteHomeOptionsWatcher() {
  yield takeLatest(types.DELETE_HOME_OPTIONS, deleteHomeOptionsSaga);
}
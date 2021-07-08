import { takeLatest } from "redux-saga/effects";

import { types } from "../../../../constants";

import editHomeOptionsSaga from "./editHomeOptionsSaga";

export default function* editHomeOptionsWatcher() {
  yield takeLatest(types.EDIT_HOME_OPTIONS, editHomeOptionsSaga);
}
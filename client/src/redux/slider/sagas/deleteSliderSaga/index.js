import { takeLatest } from "redux-saga/effects";

import { types } from "../../../../constants";

import deleteSliderSaga from "./deleteSliderSaga";

export default function* deleteSliderWatcher() {
  yield takeLatest(types.DELETE_SLIDER, deleteSliderSaga);
}
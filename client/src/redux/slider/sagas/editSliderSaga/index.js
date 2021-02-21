import { takeLatest } from "redux-saga/effects";

import { types } from "../../../../constants";

import editSliderSaga from "./editSliderSaga";

export default function* editSliderWatcher() {
  yield takeLatest(types.EDIT_SLIDER, editSliderSaga);
}
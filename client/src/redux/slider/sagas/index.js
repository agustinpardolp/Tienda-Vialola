import { takeLatest } from "redux-saga/effects";

import { types } from "../../../constants";

import fetchSliderSaga from "./fetchSliderSaga";

export default function* sliderWatcher() {
  yield takeLatest(types.FETCH_SLIDER, fetchSliderSaga);
}
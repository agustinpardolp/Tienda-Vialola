import { call, put } from "redux-saga/effects";

import { deleteSlider } from "../../../../services/slider/index";
import * as actions from "../../actions/index";

export default function* deleteSliderSaga(sliderData) {
  try {
    const { data } = yield call(deleteSlider, sliderData); 
    yield put(actions.deleteSliderSuccess(data)); 
  } catch (error) {
    yield put(actions.deleteSliderFailure(error)); 
  }
}

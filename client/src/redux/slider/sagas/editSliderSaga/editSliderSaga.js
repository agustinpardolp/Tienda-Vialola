import { call, put } from "redux-saga/effects";

import { editSlider } from "../../../../services/slider";
import * as actions from "../../actions";

export default function* editSliderSaga(sliderData) {
  try {
    const { data } = yield call(editSlider, sliderData); //getDetails, de la api
    yield put(actions.editSliderSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.editSliderFailure(error)); //ejecuto en caso de error
  }
}

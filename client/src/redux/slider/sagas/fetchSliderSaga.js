import { call, put } from "redux-saga/effects";

import { getSlider } from "../../../services/slider";
import * as actions from "../actions";

export default function* fetchSliderSaga() {
  try {
    const { data } = yield call(getSlider); //getDetails, de la api
  
    yield put(actions.fetchSliderSuccess(data)); //si esta la data ok, envio a reducer con "data"
    
  } catch (error) {

    yield put(actions.fetchSliderFailure(error)); //ejecuto en caso de error
  }
}

  
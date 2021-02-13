
import { call, put } from "redux-saga/effects";
import { getProductsBySection } from "../../../services/product";
import * as actions from "../actions/";

export default function* productsBySectionSaga(sectionName) {
    
  try {
    const { data } = yield call(getProductsBySection, sectionName); //getDetails, de la api
    yield put(actions.fetchProductsBySectionSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchProductsBySectionFailure(error)); //ejecuto en caso de error
  }
}
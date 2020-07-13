import { call, put } from "redux-saga/effects";
import { getProductBySerie } from "../../../api/product/index";
import * as actions from "../actions/product-actions";

export default function* fetchProductsBySerieSaga(serieName) {
  try {
    const { data } = yield call(getProductBySerie, serieName); //getDetails, de la api
    yield put(actions.fetchProductsBySerieSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchProductsBySerieFailure(error)); //ejecuto en caso de error
  }
}

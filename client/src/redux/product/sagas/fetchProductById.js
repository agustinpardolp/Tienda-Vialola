import { call, put } from "redux-saga/effects";
import { getProductById } from "../../../services/product/index";
import * as actions from "../actions/product-actions";

export default function* fetchProductByIdSaga(productId) {
  try {
    const { data } = yield call(getProductById, productId); //getDetails, de la api
    yield put(actions.fetchProductByIdSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchProductByIdSuccess(error)); //ejecuto en caso de error
  }
}

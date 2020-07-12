import { call, put } from "redux-saga/effects";
import { getProductById } from "../../../api/product/index";
import * as actions from "../actions/product-actions";

export default function* fetchProductsByIdSaga(productId) {
  try {
    const { data } = yield call(getProductById, productId); //getDetails, de la api
    yield put(actions.fetchProductsByIdSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchProductsByIdFailure(error)); //ejecuto en caso de error
  }
}

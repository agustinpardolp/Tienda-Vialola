import { call, put} from "redux-saga/effects";
import { getProducts } from "../../../api/products";
import * as actions from "../actions/products-actions";

export default function* fetchProductsSaga(productName) {
  try {
    const { data } = yield call(getProducts, productName); //IMP: cuando hay parametros, se pasan como segundo argumento en el metodo CALL
    yield put(actions.fetchProductsSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchProductsFailure(error)); //ejecuto en caso de error
  }
}

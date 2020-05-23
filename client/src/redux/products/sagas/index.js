import { takeLatest} from "redux-saga/effects";
import fetchProductsSaga from "./fetchProductsSaga";
import { types } from "../../../constants"

export default function* productsWatcher() {
    yield takeLatest(types.FETCH_PRODUCTS, fetchProductsSaga);
  //la relaciono con la key de la action
}

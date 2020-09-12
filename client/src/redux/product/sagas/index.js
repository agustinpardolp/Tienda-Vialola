import { takeLatest } from "redux-saga/effects";
import fetchProductByIdSaga from "./fetchProductById";
import { types } from "../../../constants";

export default function* productByIdWatcher() {
  yield takeLatest(types.FETCH_PRODUCT_BY_ID, fetchProductByIdSaga);
}

import { takeLatest } from "redux-saga/effects";
import fetchProductsByIdSaga from "./fetchProductById";
import { types } from "../../../constants";

export default function* productsByIdWatcher() {
  yield takeLatest(types.FETCH_PRODUCT_BY_ID, fetchProductsByIdSaga);
}

import { takeLatest } from "redux-saga/effects";
import fetchProductsBySerieSaga from "./fetchProductById";
import { types } from "../../../constants";

export default function* productsBySerieWatcher() {
  yield takeLatest(types.FETCH_PRODUCT_BY_SERIE, fetchProductsBySerieSaga);
}

import { takeLatest } from "redux-saga/effects";
import productsBySectionSaga from "./fetchProductsBySection";
import { types } from "../../../constants";

export default function* productsBySectionWatcher() {
  yield takeLatest(types.FETCH_PRODUCTS_BY_SECTION, productsBySectionSaga);
}

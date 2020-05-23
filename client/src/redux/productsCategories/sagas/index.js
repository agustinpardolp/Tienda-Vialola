import { takeLatest } from "redux-saga/effects";
import fetchProductsCategoriesSaga from "./fetchProductsCategoriesSaga";
import { types } from "../../../constants";

export default function* productCategoriesWatcher() {
  yield takeLatest(types.FETCH_PRODUCTS_CATEGORIES, fetchProductsCategoriesSaga);
}

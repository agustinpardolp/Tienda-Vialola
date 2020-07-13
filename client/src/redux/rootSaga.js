import {  all,  fork } from "redux-saga/effects";
import productsWatcher  from './products/sagas/index'; //a modo de ejemplo se importan todos los componentes
import menuOptionsWatcher from "./sidebar/sagas/index";
import productCategoriesWatcher from "./productsCategories/sagas/index";
import cartWatcher from "./cart/sagas/index";
import productWatcher from "./product/sagas/index";
import seriesWatcher from "./series/sagas/index";
export default function* rootSaga() {

    yield all([
      fork(productsWatcher),
      fork(menuOptionsWatcher),
      fork(productCategoriesWatcher),
      fork(cartWatcher),
      fork(productWatcher),
      fork(seriesWatcher)
      ])
  }
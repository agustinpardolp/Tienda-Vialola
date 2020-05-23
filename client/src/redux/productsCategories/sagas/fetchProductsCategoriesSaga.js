import { call, put } from "redux-saga/effects";
import { getProductsCategories } from "../../../api/productsCategory/";
import * as actions from "../actions/product-categories-actions";

export default function* fetchProductsCategoriesSaga() {
  
  try {
    const { data } = yield call(getProductsCategories); //getDetails, de la api
  
    yield put(actions.fetchProductsCategoriesSuccess(data)); //si esta la data ok, envio a reducer con "data"
    
  } catch (error) {

    yield put(actions.fetchProductsCategoriesFailure(error)); //ejecuto en caso de error
  }
}

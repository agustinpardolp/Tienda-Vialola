import { call, put } from "redux-saga/effects";
import { getArtworkCategories } from "../../../services/categories";
import * as actions from "../actions/artwork-categories-actions";

export default function* fetchArtworkCategoriesSaga(queryParam) {
  try {
    const { data } = yield call(getArtworkCategories, queryParam); //getDetails, de la api

    yield put(actions.fetchArtworkCategoriesSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchArtworkCategoriesFailure(error)); //ejecuto en caso de error
  }
}

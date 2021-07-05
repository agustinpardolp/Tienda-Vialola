import { call, put } from "redux-saga/effects";
import { createArtworkClientConsult } from "../../../../services/artwork/index";
import * as actions from "../../actions/artworks-actions";

export default function* createClientConsultSaga(dataConsult) {
  try {
    const { data } = yield call(createArtworkClientConsult, dataConsult); 
    yield put(actions.createClientConsultSuccess(data)); 
  } catch (error) {
    yield put(actions.createClientConsultFailure(error)); 
  }
}

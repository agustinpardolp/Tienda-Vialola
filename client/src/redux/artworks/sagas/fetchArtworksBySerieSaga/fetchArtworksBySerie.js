import { call, put } from "redux-saga/effects";
import { getArtworkBySerie } from "../../../../services/artwork/index";
import * as actions from "../../actions/artworks-actions";

export default function* fetchArtworksBySerieSaga(serieName) {
  try {
    const { data } = yield call(getArtworkBySerie, serieName); //getDetails, de la api
    yield put(actions.fetchArtworksBySerieSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchArtworksBySerieFailure(error)); //ejecuto en caso de error
  }
}

import { call, put } from "redux-saga/effects";
import { getArtworks } from "../../../../services/artworks";
import * as actions from "../../actions/artworks-actions";

export default function* fetchArtworksSaga(queryParam) {
  try {
    const { data } = yield call(getArtworks, queryParam); //IMP: cuando hay parametros, se pasan como segundo argumento en el metodo CALL
    yield put(actions.fetchArtworksSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.fetchArtworksFailure(error)); //ejecuto en caso de error
  }
}

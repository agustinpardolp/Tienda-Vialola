import { call, put } from "redux-saga/effects";
import { createArtwork } from "../../../../services/artwork/index";
import * as actions from "../../actions/artworks-actions";

export default function* createArtworkSaga(artworkData) {
  try {
    const { data } = yield call(createArtwork, artworkData); //getDetails, de la api
    yield put(actions.createArtworkSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.createArtworkFailure(error)); //ejecuto en caso de error
  }
}

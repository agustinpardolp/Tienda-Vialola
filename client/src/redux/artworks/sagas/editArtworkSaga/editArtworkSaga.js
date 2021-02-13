import { call, put } from "redux-saga/effects";
import { editArtwork } from "../../../../services/artwork/index";
import * as actions from "../../actions/artworks-actions";

export default function* editArtworkSaga(artworkData) {
  try {
    const { data } = yield call(editArtwork, artworkData); //getDetails, de la api
    yield put(actions.editArtworkSuccess(data)); //si esta la data ok, envio a reducer con "data"
  } catch (error) {
    yield put(actions.editArtworkFailure(error)); //ejecuto en caso de error
  }
}

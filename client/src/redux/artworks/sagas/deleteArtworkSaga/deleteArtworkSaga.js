import { call, put } from "redux-saga/effects";
import { deleteArtwork } from "../../../../services/artwork/index";
import * as actions from "../../actions/artworks-actions";

export default function* deleteArtworkSaga(artworkData) {
  try {
    const { data } = yield call(deleteArtwork, artworkData); 
    yield put(actions.deleteArtworkSuccess(data)); 
  } catch (error) {
    yield put(actions.deleteArtworkFailure(error)); 
  }
}

import { takeLatest} from "redux-saga/effects";
import fetchArtworksSaga from "./fetchArtworksSaga";
import { types } from "../../../../constants"

export default function* artworksWatcher() {
    yield takeLatest(types.FETCH_ARTWORKS, fetchArtworksSaga);
  //la relaciono con la key de la action
}

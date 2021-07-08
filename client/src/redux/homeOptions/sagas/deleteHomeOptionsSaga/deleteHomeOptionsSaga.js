import { call, put } from "redux-saga/effects";

import { deleteHomeOptions } from "../../../../services/homeOptions/index";
import * as actions from "../../actions/index";

export default function* deleteHomeOptionsSaga(homeOptionsData) {
  try {
    const { data } = yield call(deleteHomeOptions, homeOptionsData); 
    yield put(actions.deleteHomeOptionsSuccess(data)); 
  } catch (error) {
    yield put(actions.deleteHomeOptionsFailure(error)); 
  }
}

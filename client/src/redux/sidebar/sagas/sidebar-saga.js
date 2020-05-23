import { put} from "redux-saga/effects";
import * as actions from '../actions/index';

export default function* receiveMenuOptionSaga(data) { 
  yield put(actions.receiveMenuOption(data)); 
}

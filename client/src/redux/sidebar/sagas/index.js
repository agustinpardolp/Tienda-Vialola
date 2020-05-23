import { take } from "redux-saga/effects"; //siempre redux-saga/effects
import receiveMenuOptionSaga from "./sidebar-saga";
import { types } from "../../../constants"

export default function* menuOptionsWatcher() {

    yield take(types.RECEIVE_MENU_OPTION, receiveMenuOptionSaga);
  //la relaciono con la key de la action //IMP si uso takeLatest
  //o takeEvery puedo caer en un loop de llamadas infinitas!!!!
}

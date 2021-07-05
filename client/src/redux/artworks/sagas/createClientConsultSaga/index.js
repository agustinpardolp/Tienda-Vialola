import { takeLatest } from "redux-saga/effects";
import createClientConsultSaga from "./createClientConsultSaga";
import { types } from "../../../../constants";

export default function* createClientConsultSagaWatcher() {
  yield takeLatest(types.CREATE_CLIENT_CONSULT, createClientConsultSaga);
}
import {take} from "redux-saga/effects";
import receiveCreatedCartSaga from "./cart-saga";
import {types} from "../../../constants"

export default function* cartWatcher () {
   
   yield take(types.RECEIVE_CREATED_CART, receiveCreatedCartSaga)

}
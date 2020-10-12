import { combineReducers } from "redux";
import product from "./product-reducer";
import users from "../reducers/user-reducer";

export default combineReducers({
  product,
  users,
});

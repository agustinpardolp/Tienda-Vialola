import "regenerator-runtime/runtime";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer'; 
import rootSaga from '../redux/rootSaga';  
import toastMiddleware from "./middlewares/toastNotification";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, toastMiddleware];
const store = createStore(
  reducers, composeEnhancers(applyMiddleware(...middleware)) 
);

sagaMiddleware.run(rootSaga);

export default store
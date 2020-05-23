import "regenerator-runtime/runtime";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import reducers from './rootReducer'; //traigo reducers y   
import rootSaga from '../redux/rootSaga'; //sagas  

// this line allows to user redux dev tool on the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers, composeEnhancers(applyMiddleware(sagaMiddleware)) //saga middleware
);

sagaMiddleware.run(rootSaga);

export default store
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import reducers from './reducers';
import rootSaga from './sagas';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ router: routerReducer, ...reducers }),
  compose(applyMiddleware(routerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export const history = createReduxHistory(store);
export default store;

import { all } from 'redux-saga/effects';
import { todoSagas } from '../features/todos/todoSagas';

export default function* rootSaga() {
  yield all([todoSagas()]);
}

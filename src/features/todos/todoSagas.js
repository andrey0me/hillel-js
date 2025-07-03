import { put, takeEvery, delay, all } from 'redux-saga/effects';
import { loadTodos, setTodos } from './todoSlice';
import { v4 as uuidv4 } from 'uuid';

function* loadTodosSaga() {
  yield delay(1000); 
  const fakeData = [
    { id: uuidv4(), text: 'React', completed: false },
    { id: uuidv4(), text: 'Redux-Saga', completed: true },
  ];
  yield put(setTodos(fakeData));
}

export function* todoSagas() {
  yield all([
    takeEvery(loadTodos.type, loadTodosSaga),
  ]);
}

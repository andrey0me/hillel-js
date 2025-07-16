import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchDestinations, searchHotels, getHotels } from '../api/api';
import { setDestinations, setHotels, setLoading } from './actions';
import { push } from 'redux-first-history';

function* loadDestinations() {
  yield put(setLoading(true));
  const res = yield call(fetchDestinations);
  yield put(setDestinations(res.data));
  yield put(setLoading(false));
}

function* searchHotelsSaga(action) {
  yield put(setLoading(true));
  yield call(searchHotels, action.payload);
  localStorage.setItem('formData', JSON.stringify(action.payload));
  yield put(setLoading(false));
  yield put(push('/hotels'));
}

function* loadHotels() {
  yield put(setLoading(true));
  const res = yield call(getHotels);
  yield put(setHotels(res.data));
  yield put(setLoading(false));
}

export default function* rootSaga() {
  yield takeEvery('FETCH_DESTINATIONS', loadDestinations);
  yield takeEvery('SUBMIT_SEARCH_FORM', searchHotelsSaga);
  yield takeEvery('GET_HOTELS', loadHotels);
}

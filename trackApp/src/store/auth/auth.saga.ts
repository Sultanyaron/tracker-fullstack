import { all, takeLatest, put } from 'redux-saga/effects';
import {
  SignUpRequestAction,
  SIGN_UP_REQUEST,
  SignInRequestAction,
  SIGN_IN_REQUEST,
  INIT_AUTH_REQUEST,
  LOGOUT,
} from './auth.types';
import TrackerApi, { setTrackerAuthToken } from '../../services/tracker-api/TrackerApi';
import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  initAuthSuccess,
  initAuthFailure,
} from './auth.actions';
import AsyncStorage from '@react-native-community/async-storage';

function* signUpSaga(action: SignUpRequestAction) {
  try {
    const res = yield TrackerApi.post('/signup', action.payload);
    yield setAuthToken(res.data.token);

    yield put(signUpSuccess(res.data));
  } catch (error) {
    yield put(signUpFailure(error.message));
  }
}

function* initAuthSaga() {
  try {
    const token = yield AsyncStorage.getItem('token');
    if (token) {
      yield setTrackerAuthToken(token);
      const { data } = yield TrackerApi.get('/user');
      yield put(initAuthSuccess(data));
      return;
    }
    yield put(initAuthFailure());
  } catch (error) {
    yield put(initAuthFailure());
  }
}

function* signInSaga(action: SignInRequestAction) {
  try {
    const res = yield TrackerApi.post('/signin', action.payload);
    yield setAuthToken(res.data.token);
    yield put(signInSuccess(res.data));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* logout() {
  yield setAuthToken(null);
}

function* setAuthToken(token: string | null) {
  setTrackerAuthToken(token);
  if (token) {
    yield AsyncStorage.setItem('token', token);
    return;
  }
  yield AsyncStorage.clear();
}

export function* authSagaWatcher() {
  yield all([
    takeLatest(SIGN_UP_REQUEST, signUpSaga),
    takeLatest(SIGN_IN_REQUEST, signInSaga),
    takeLatest(INIT_AUTH_REQUEST, initAuthSaga),
    takeLatest(LOGOUT, logout),
  ]);
}

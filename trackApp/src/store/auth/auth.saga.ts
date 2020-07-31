import { all, takeLatest } from 'redux-saga/effects';

function* signUpSaga() {}

export function* authSagaWatcher() {
  yield all([takeLatest('LALA', signUpSaga)]);
}

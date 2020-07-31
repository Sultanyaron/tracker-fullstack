import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './auth/auth.saga';
export default function* () {
  yield all([authSagaWatcher()]);
}

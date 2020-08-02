import { all } from 'redux-saga/effects';
import { authSagaWatcher } from './auth/auth.saga';
import trackSagaWatcher from './track/track.saga';
export default function* () {
  yield all([authSagaWatcher(), trackSagaWatcher()]);
}

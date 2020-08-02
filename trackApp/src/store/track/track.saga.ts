import { takeLatest, all, put } from 'redux-saga/effects';
import { CREATE_TRACK_REQUEST, CreateTrackRequestAction, Track } from './track.types';
import TrackerApi from '../../services/tracker-api/TrackerApi';
import { createTrackSuccess, createTrackFailire, fetchTracksSuccess } from './track.actions';
import { FETCH_TRACKS_REQUEST } from './track.types';

function* createTrackSaga(action: CreateTrackRequestAction) {
  try {
    const { data } = yield TrackerApi.post('/tracks', action.payload);
    yield put(createTrackSuccess(data as Track));
    action.payload.formSuccessCallback();
  } catch (error) {
    yield put(createTrackFailire());
  }
}

function* fetchTracksSaga() {
  try {
    const { data } = yield TrackerApi.get('/tracks');
    yield put(fetchTracksSuccess(data as Track[]));
  } catch (error) {}
}

export default function* trackSagaWatcher() {
  yield all([
    takeLatest(CREATE_TRACK_REQUEST, createTrackSaga),
    takeLatest(FETCH_TRACKS_REQUEST, fetchTracksSaga),
  ]);
}

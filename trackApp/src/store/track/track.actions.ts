import {
  CreateTrackPayload,
  CreateTrackRequestAction,
  CREATE_TRACK_REQUEST,
  CreateTrackSuccessAction,
  CREATE_TRACK_SUCCESS,
  CreateTrackFailureAction,
  CREATE_TRACK_FAILURE,
  FETCH_TRACKS_REQUEST,
  FetchTracksRequestAction,
  FetchTracksSuccessAction,
  FETCH_TRACKS_SUCCESS,
  FetchTracksFailureAction,
  FETCH_TRACKS_FAILURE,
  Track,
} from './track.types';

export const fetchTracksRequest = (): FetchTracksRequestAction => ({
  type: FETCH_TRACKS_REQUEST,
});

export const fetchTracksSuccess = (payload: Track[]): FetchTracksSuccessAction => ({
  type: FETCH_TRACKS_SUCCESS,
  payload,
});

export const fetchTracksFailure = (): FetchTracksFailureAction => ({
  type: FETCH_TRACKS_FAILURE,
});

export const createTrackRequest = (payload: CreateTrackPayload): CreateTrackRequestAction => ({
  type: CREATE_TRACK_REQUEST,
  payload,
});

export const createTrackSuccess = (payload: Track): CreateTrackSuccessAction => ({
  type: CREATE_TRACK_SUCCESS,
  payload,
});

export const createTrackFailire = (): CreateTrackFailureAction => ({
  type: CREATE_TRACK_FAILURE,
});

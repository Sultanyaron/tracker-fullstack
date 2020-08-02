import { LocationData } from 'expo-location';
export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export interface FetchTracksRequestAction {
  type: typeof FETCH_TRACKS_REQUEST;
}

export interface FetchTracksSuccessAction {
  type: typeof FETCH_TRACKS_SUCCESS;
  payload: Track[];
}

export interface FetchTracksFailureAction {
  type: typeof FETCH_TRACKS_FAILURE;
}

export const CREATE_TRACK_REQUEST = 'CREATE_TRACK_REQUEST';
export const CREATE_TRACK_SUCCESS = 'CREATE_TRACK_SUCCESS';
export const CREATE_TRACK_FAILURE = 'CREATE_TRACK_FAILURE';

export interface CreateTrackRequestAction {
  type: typeof CREATE_TRACK_REQUEST;
  payload: CreateTrackPayload;
}

export interface CreateTrackSuccessAction {
  type: typeof CREATE_TRACK_SUCCESS;
  payload: Track;
}

export interface CreateTrackFailureAction {
  type: typeof CREATE_TRACK_FAILURE;
}

export interface CreateTrackPayload {
  name: string;
  locations: LocationData[];
  formSuccessCallback: () => void;
}

export interface Track {
  _id: string;
  userId: string;
  name: string;
  locations: LocationData[];
}

export type TrackActionsType =
  | FetchTracksRequestAction
  | FetchTracksSuccessAction
  | FetchTracksFailureAction
  | CreateTrackRequestAction
  | CreateTrackSuccessAction
  | CreateTrackFailureAction;

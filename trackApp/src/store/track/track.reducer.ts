import {
  Track,
  TrackActionsType,
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  CREATE_TRACK_SUCCESS,
  CREATE_TRACK_REQUEST,
  CREATE_TRACK_FAILURE,
} from './track.types';

const initialState = {
  tracks: [] as Track[],
  isFetchingTracks: false,
  fetchingTracksError: '',
  isSavingTrack: false,
  savingTrackError: '',
};

const trackReducer = (state = initialState, action: TrackActionsType): typeof initialState => {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      return {
        ...state,
        isFetchingTracks: true,
        fetchingTracksError: '',
      };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        isFetchingTracks: false,
        tracks: action.payload,
      };

    case FETCH_TRACKS_FAILURE:
      return {
        ...state,
        isFetchingTracks: false,
        fetchingTracksError: 'ERROR',
      };

    case CREATE_TRACK_REQUEST:
      return {
        ...state,
        isSavingTrack: true,
        savingTrackError: '',
      };

    case CREATE_TRACK_SUCCESS:
      return {
        ...state,
        isSavingTrack: false,
        tracks: [...state.tracks, action.payload],
      };

    case CREATE_TRACK_FAILURE:
      return {
        ...state,
        isSavingTrack: false,
        savingTrackError: 'ERROR',
      };

    default:
      return state;
  }
};

export default trackReducer;

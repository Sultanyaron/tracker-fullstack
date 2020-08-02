import { LocationData } from 'expo-location';
import { CHANGE_NAME, RESET_LOCATION_STATE } from './location.types';
import {
  LocationActionsType,
  START_RECORDING,
  STOP_RECORDING,
  ADD_LOCATION,
} from './location.types';

const initialState = {
  currentLocation: null as null | LocationData,
  locations: [] as LocationData[],
  recording: false,
  name: '',
};

const locationReducer = (
  state = initialState,
  action: LocationActionsType
): typeof initialState => {
  switch (action.type) {
    case START_RECORDING:
      return {
        ...state,
        recording: true,
      };

    case STOP_RECORDING:
      return {
        ...state,
        recording: false,
      };
    case ADD_LOCATION:
      const locations = [...state.locations];
      if (state.recording) {
        locations.push(action.payload);
      }
      return {
        ...state,
        currentLocation: action.payload,
        locations,
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case RESET_LOCATION_STATE:
      return initialState;
    default:
      return state;
  }
};

export default locationReducer;

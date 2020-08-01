import { LocationData } from 'expo-location';
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
};

const locationReducer = (state = initialState, action: LocationActionsType) => {
  switch (action.type) {
    case START_RECORDING:
      return {
        ...state,
      };

    case STOP_RECORDING:
      return {
        ...state,
      };
    case ADD_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;

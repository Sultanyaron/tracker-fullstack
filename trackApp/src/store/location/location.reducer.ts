import { LocationData } from 'expo-location';
import { LocationActionsType } from './location.types';

const initialState = {
  currentLocation: null as null | LocationData,
  locations: [] as LocationData[],
  recording: false,
};

const locationReducer = (state = initialState, action: LocationActionsType) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default locationReducer;

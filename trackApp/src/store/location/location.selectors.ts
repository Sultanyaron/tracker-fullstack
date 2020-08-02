import { RootState } from '../store';

export const locationSelector = (state: RootState) => state.location;

export const currentLocationSelector = (state: RootState) =>
  locationSelector(state).currentLocation;

export const trackNameSelector = (state: RootState) => locationSelector(state).name;
export const recordingSelector = (state: RootState) => locationSelector(state).recording;
export const locationsSelector = (state: RootState) => locationSelector(state).locations;

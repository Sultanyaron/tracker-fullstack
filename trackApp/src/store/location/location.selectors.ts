import { RootState } from '../store';

export const locationSelector = (state: RootState) => state.location;

export const currentLocationSelector = (state: RootState) =>
  locationSelector(state).currentLocation;

import { LocationData } from 'expo-location';
export const START_RECORDING = 'START_RECORDING';
export const STOP_RECORDING = 'STOP_RECORDING';
export const ADD_LOCATION = 'ADD_LOCATION';

export interface StartRecordingAction {
  type: typeof START_RECORDING;
}

export interface StopRecordingAction {
  type: typeof STOP_RECORDING;
}

export interface AddLocationAction {
  type: typeof ADD_LOCATION;
  payload: LocationData;
}

export type LocationActionsType = StartRecordingAction | StopRecordingAction | AddLocationAction;

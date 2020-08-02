import { LocationData } from 'expo-location';
export const START_RECORDING = 'START_RECORDING';
export const STOP_RECORDING = 'STOP_RECORDING';
export const ADD_LOCATION = 'ADD_LOCATION';
export const CHANGE_NAME = 'CHANGE_NAME';
export const RESET_LOCATION_STATE = 'RESET_LOCATION_STATE';
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

export interface ChangeNameAction {
  type: typeof CHANGE_NAME;
  payload: string;
}

export interface ResetLocationStateAction {
  type: typeof RESET_LOCATION_STATE;
}

export type LocationActionsType =
  | StartRecordingAction
  | StopRecordingAction
  | AddLocationAction
  | ChangeNameAction
  | ResetLocationStateAction;

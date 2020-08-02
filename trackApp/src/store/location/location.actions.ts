import { LocationData } from 'expo-location';
import {
  START_RECORDING,
  StartRecordingAction,
  StopRecordingAction,
  STOP_RECORDING,
  AddLocationAction,
  ADD_LOCATION,
  ChangeNameAction,
  CHANGE_NAME,
  ResetLocationStateAction,
  RESET_LOCATION_STATE,
} from './location.types';

export const startRecording = (): StartRecordingAction => ({
  type: START_RECORDING,
});

export const stopRecording = (): StopRecordingAction => ({
  type: STOP_RECORDING,
});

export const addLocation = (payload: LocationData): AddLocationAction => ({
  type: ADD_LOCATION,
  payload,
});

export const changeName = (payload: string): ChangeNameAction => ({
  type: CHANGE_NAME,
  payload,
});

export const resetLocationState = (): ResetLocationStateAction => ({
  type: RESET_LOCATION_STATE,
});

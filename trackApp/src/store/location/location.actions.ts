import { AddLocationAction, ADD_LOCATION } from './location.types';
import { LocationData } from 'expo-location';
import {
  START_RECORDING,
  StartRecordingAction,
  StopRecordingAction,
  STOP_RECORDING,
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

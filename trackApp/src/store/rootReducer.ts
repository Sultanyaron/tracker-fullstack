import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import locationReducer from './location/location.reducer';
import trackReducer from './track/track.reducer';

export default combineReducers({
  auth: authReducer,
  location: locationReducer,
  track: trackReducer,
});

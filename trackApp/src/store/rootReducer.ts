import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import locationReducer from './location/location.reducer';

export default combineReducers({ auth: authReducer, location: locationReducer });

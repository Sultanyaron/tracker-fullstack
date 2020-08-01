import { INIT_AUTH_FAILURE } from './auth.types';
import {
  SIGN_UP_REQUEST,
  User,
  SIGN_UP_SUCCESS,
  AuthActionsType,
  SIGN_UP_FAILURE,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  INIT_AUTH_REQUEST,
  INIT_AUTH_SUCCESS,
  LOGOUT,
} from './auth.types';
import { StyleSheetManager } from 'styled-components';
const initialState = {
  isSignedIn: false,
  isSigningUp: false,
  signUpError: '',
  isSigningIn: false,
  signInError: '',
  isInitializingAuth: false,
  user: null as null | User,
};

const authReducer = (state = initialState, action: AuthActionsType): typeof initialState => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpError: '',
        isSigningUp: true,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        isSigningUp: false,
        user: action.payload.user,
      };

    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        signUpError: action.payload,
      };

    case SIGN_IN_REQUEST:
      return {
        ...state,
        signInError: '',
        isSigningIn: true,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
        isSigningIn: false,
        user: action.payload.user,
      };

    case SIGN_IN_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        signInError: action.payload,
      };

    case INIT_AUTH_REQUEST:
      return {
        ...state,
        isInitializingAuth: true,
      };
    case INIT_AUTH_SUCCESS:
      return {
        ...state,
        isInitializingAuth: false,
        isSignedIn: true,
        user: action.payload,
      };

    case INIT_AUTH_FAILURE:
      return {
        ...state,
        isInitializingAuth: false,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;

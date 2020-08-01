import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SignInRequestPayload,
  SignInRequestAction,
  SIGN_IN_REQUEST,
  SignInSuccessPayload,
  SignInSuccessAction,
  SIGN_IN_SUCCESS,
  SignUpRequestPayload,
  SignUpRequestAction,
  SignUpSuccessAction,
  SignUpSuccessPayload,
  SignInFailureAction,
  SignUpFailureAction,
  SIGN_IN_FAILURE,
  InitAuthRequestAction,
  INIT_AUTH_REQUEST,
  InitAuthSuccessAction,
  INIT_AUTH_SUCCESS,
  User,
  InitAuthFailureAction,
  INIT_AUTH_FAILURE,
  LogoutAction,
  LOGOUT,
} from './auth.types';

export const signUpRequest = (payload: SignUpRequestPayload): SignUpRequestAction => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (payload: SignUpSuccessPayload): SignUpSuccessAction => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpFailure = (payload: string): SignUpFailureAction => ({
  type: SIGN_UP_FAILURE,
  payload,
});

export const signInRequest = (payload: SignInRequestPayload): SignInRequestAction => ({
  type: SIGN_IN_REQUEST,
  payload,
});

export const signInSuccess = (payload: SignInSuccessPayload): SignInSuccessAction => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInFailure = (payload: string): SignInFailureAction => ({
  type: SIGN_IN_FAILURE,
  payload,
});

export const initAuthRequest = (): InitAuthRequestAction => ({
  type: INIT_AUTH_REQUEST,
});

export const initAuthSuccess = (payload: User): InitAuthSuccessAction => ({
  type: INIT_AUTH_SUCCESS,
  payload,
});

export const initAuthFailure = (): InitAuthFailureAction => ({
  type: INIT_AUTH_FAILURE,
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
  payload: SignUpRequestPayload;
}

export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  payload: SignUpSuccessPayload;
}

export interface SignUpRequestPayload {
  email: string;
  password: string;
}

export interface SignUpSuccessPayload {
  token: string;
  user: User;
}

export interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  payload: string;
}

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export interface SignInRequestAction {
  type: typeof SIGN_IN_REQUEST;
  payload: SignInRequestPayload;
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: SignInSuccessPayload;
}

export interface SignInFailureAction {
  type: typeof SIGN_IN_FAILURE;
  payload: string;
}

export interface SignInRequestPayload extends SignUpRequestPayload {}
export interface SignInSuccessPayload extends SignUpSuccessPayload {}

export const INIT_AUTH_REQUEST = 'INIT_AUTH_REQUEST';
export const INIT_AUTH_SUCCESS = 'INIT_AUTH_SUCCESS';
export const INIT_AUTH_FAILURE = 'INIT_AUTH_FAILURE';

export interface InitAuthRequestAction {
  type: typeof INIT_AUTH_REQUEST;
}

export interface InitAuthSuccessAction {
  type: typeof INIT_AUTH_SUCCESS;
  payload: User;
}

export interface InitAuthFailureAction {
  type: typeof INIT_AUTH_FAILURE;
}

export const LOGOUT = 'LOGOUT';

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionsType =
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | InitAuthRequestAction
  | InitAuthSuccessAction
  | InitAuthFailureAction
  | LogoutAction;

export interface User {
  _id: string;
  email: string;
}

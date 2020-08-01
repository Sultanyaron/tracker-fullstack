import { RootState } from '../store';
export const authSelector = (state: RootState) => state.auth;

export const isSignedInSelector = (state: RootState) => authSelector(state).isSignedIn;
export const isInitializingAuthSelector = (state: RootState) =>
  authSelector(state).isInitializingAuth;

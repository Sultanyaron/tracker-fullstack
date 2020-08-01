import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from '../../../store/auth/auth.actions';
import { authSelector } from '../../../store/auth/auth.selectors';

const useSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const signUp = () => {
    dispatch(signInRequest({ email, password }));
  };

  const { isSigningIn, signInError } = useSelector(authSelector);

  return {
    email,
    password,
    setEmail,
    setPassword,
    signUp,
    isSigningIn,
    signInError,
  };
};

export default useSignIn;

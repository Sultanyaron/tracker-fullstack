import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../../store/auth/auth.actions';
import { authSelector } from '../../../store/auth/auth.selectors';

const useSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const signUp = () => {
    dispatch(signUpRequest({ email, password }));
  };

  const { isSigningUp, signUpError } = useSelector(authSelector);

  return {
    email,
    password,
    setEmail,
    setPassword,
    signUp,
    isSigningUp,
    signUpError,
  };
};

export default useSignUp;

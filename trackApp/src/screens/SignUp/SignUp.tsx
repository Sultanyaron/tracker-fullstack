import React, { FC } from 'react';
import { IStackNavigation } from '../../navigation/Navigation.types';
import useSignUp from './hooks/useSignUp';
import AuthForm from '../../components/AuthForm/AuthForm';

interface IProps extends IStackNavigation {}
const SignUp: FC<IProps> = ({ navigation }) => {
  const { email, password, setEmail, setPassword, signUp, isSigningUp, signUpError } = useSignUp();
  const authFormProps = {
    title: 'Sign Up for Tracker',
    email,
    setEmail,
    password,
    setPassword,
    loading: isSigningUp,
    errorMessage: signUpError,
    onSubmit: signUp,
    linkText: 'Already have an account? sign in instead',
    onLinkPress: () => navigation.navigate('SignInScreen'),
    submitBtnTitle: 'Sign Up',
  };
  return <AuthForm {...authFormProps} />;
};

export default SignUp;

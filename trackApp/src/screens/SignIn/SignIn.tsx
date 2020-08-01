import React, { FC } from 'react';
import { IStackNavigation } from '../../navigation/Navigation.types';
import AuthForm from '../../components/AuthForm/AuthForm';
import useSignIn from './hooks/useSignIn';

interface IProps extends IStackNavigation {}
const SignIn: FC<IProps> = ({ navigation }) => {
  const { email, password, setEmail, setPassword, signUp, isSigningIn, signInError } = useSignIn();
  const authFormProps = {
    title: 'Sign In for Tracker',
    email,
    setEmail,
    password,
    setPassword,
    loading: isSigningIn,
    errorMessage: signInError,
    onSubmit: signUp,
    linkText: 'Dont have an account? sign up',
    onLinkPress: () => navigation.navigate('SignUpScreen'),
    submitBtnTitle: 'Sign In',
  };
  return <AuthForm {...authFormProps} />;
};

export default SignIn;

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack/AuthStack';
import AppStack from './AppStack/AppStack';
interface IProps {
  isSignedIn: boolean;
}
const Navigation: FC<IProps> = ({ isSignedIn }) => {
  return <NavigationContainer>{isSignedIn ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default Navigation;

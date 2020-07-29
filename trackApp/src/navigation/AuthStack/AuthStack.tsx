import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp } from '../../screens';

const Stack = createStackNavigator();
interface IProps {}

const AuthStack: FC<IProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;

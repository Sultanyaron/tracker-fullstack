import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TrackCreate } from '../../screens';
import Account from '../../screens/Account/Account';
import TrackStack from './TrackStack/TrackStack';

const Tab = createBottomTabNavigator();

interface IProps {}

const AppStack: FC<IProps> = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackCreateScreen" component={TrackCreate} />
      <Tab.Screen name="TrackStack" component={TrackStack} />
      <Tab.Screen name="AccountScreen" component={Account} />
    </Tab.Navigator>
  );
};

export default AppStack;

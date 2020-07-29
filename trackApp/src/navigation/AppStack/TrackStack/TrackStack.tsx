import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrackList, TrackDetail } from '../../../screens';

const Stack = createStackNavigator();

interface IProps {}

const TrackStack: FC<IProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackListScreen" component={TrackList} />
      <Stack.Screen name="TrackDetailScreen" component={TrackDetail} />
    </Stack.Navigator>
  );
};

export default TrackStack;

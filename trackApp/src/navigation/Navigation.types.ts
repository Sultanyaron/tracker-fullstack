import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type Navigation = StackNavigationProp<any, any>;
export interface IStackNavigation {
  navigation: Navigation;
  route: RouteProp<any, any>;
}

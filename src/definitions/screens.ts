import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IBaseScreen<T extends ParamListBase, S extends keyof T> {
  navigation: NativeStackNavigationProp<T, S>;
  route: RouteProp<T, S>;
}

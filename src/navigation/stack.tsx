import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SignIn } from '../views';

const Stack = createNativeStackNavigator();

// export const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     <Stack.Screen name="SignIn" component={SignIn} />
//   </Stack.Navigator>
// );

const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Group>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Group>
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Group>
  </Stack.Navigator>
);

export default RootStack;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateTeam, Home, SignIn } from '../views';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../assets';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const MainTabs = () => (
  <BottomTabs.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.rightBackgroundContainer,
    }}>
    <BottomTabs.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <Icon name="home" size={25} color={color} />,
      }}
    />
    <BottomTabs.Screen
      name="Teams"
      component={CreateTeam}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="group" size={25} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="CreateTeam" component={CreateTeam} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;

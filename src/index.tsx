import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack, { AuthStack } from './navigation/stack';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;

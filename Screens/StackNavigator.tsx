import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Todo from './Todo';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Todo" component={Todo} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

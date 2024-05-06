import { StyleSheet, Text, View,Image,Alert, SafeAreaView,Button,Platform} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Todo from './Todo';
import DetailScreen from './DetailScreen';

const Stack=createStackNavigator();
const TodoScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
        name="Todo"
        component={Todo}
        />
        <Stack.Screen
        name="Detail"
        component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default TodoScreen;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './Screens/StackNavigator';
import Navbar from "./Components/Navbar";
import Neighbours from "./Screens/Neighbours"
import DailyGraphScreen from './Screens/DailyGraphScreen';
import MonthlyGraphScreen from './Screens/MonthlyGraphScreen';
import YearlyGraphScreen from './Screens/YearlyGraphScreen';
import PaymentScreen from './Screens/PaymentScreen';
import WaterLevelTank from './Screens/WaterLevel';
import { createStackNavigator } from '@react-navigation/stack';
import Fetch from './Screens/Fetch';
import Menubar from './Components/Menubar';
import Todo from './Screens/Todo';
import HourlyStack from './Screens/HourlyStack';
import MonthlyStack from './Screens/MontlyStack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     
      <Stack.Screen name="Menubar" component={Menubar} options={{ headerShown: false }} />
    
      <Stack.Screen name="Fetch" component={Fetch} />

      <Stack.Screen name="HourlyStack" component={HourlyStack} />
      <Stack.Screen name="Neighbours" component={Neighbours} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
      <Stack.Screen name="MonthlyStack" component={MonthlyStack} />
      <Stack.Screen name="DailyGraphScreen" component={DailyGraphScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Alert, SafeAreaView,Button,Platform} from 'react-native';
import Neighbours from './Pages/Neighbours';
import { useDimensions , useDeviceOrientation} from "@react-native-community/hooks";
import Navbar from "./Components/Navbar";
import WelcomeScreen from './App/screens/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen';
import AppButton from './App/components/AppButton';
import Card from './App/components/Card';
import ListingDetailsScreen from './App/screens/ListingDetailsScreen';
import MessagesScreen from './App/screens/MessagesScreen';
import ListItem from './App/components/ListItem';
import Screen from './App/components/Screen';
import { useState } from 'react';
import AccountScreen from './App/screens/AccountScreen';
import ListingsScreen from './App/screens/ListingsScreen';
import AppTextInput from './App/components/AppTextInput';
import AppPicker from './App/components/AppPicker';
import LoginScreen from './App/screens/LoginScreen';
import ListingEditScreen from './App/screens/ListingEditScreen';


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      
< ListingEditScreen/>
  <StatusBar style="auto" />
      <Neighbours />  
 
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  
  
  },
});

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar';

import HomeScreen from '../Screens/HomeScreen';

const Menubar = () => {
  const navigation = useNavigation();
  const [activeScreen, setActiveScreen] = useState(0); // State to track the active screen

  // Function to handle screen change
  const changeScreen = (screenIndex) => {
    setActiveScreen(screenIndex);
    switch (screenIndex) {
      case 0:
        navigation.navigate('Fetch');
        break;
      case 1:
        navigation.navigate('HourlyStack');
        break;
      case 2:
        navigation.navigate('MonthlyStack');
        break;  
      case 3:
        navigation.navigate('Neighbours');
        break;
      case 4:
        navigation.navigate('PaymentScreen');
        break;
      case 5:
        navigation.navigate('DailyGraphScreen');
        break;
      // Add cases for other screens if needed
      default:
        break;
    }
  };

  return (
    <>
    <Navbar />
    <View style={styles.menubar}>
      <TouchableOpacity style={styles.menuItem} onPress={() => changeScreen(0)}>
        <MaterialCommunityIcons name="water-percent" size={30} color="white" />
        {activeScreen === 0 && <View style={styles.underline} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => changeScreen(1)}>
        <MaterialCommunityIcons name="hours-24" size={30} color="white" />
        {activeScreen === 1 && <View style={styles.underline} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => changeScreen(2)}>
        <MaterialCommunityIcons name="calendar-month" size={30} color="white" />
        {activeScreen === 2 && <View style={styles.underline} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => changeScreen(3)}>
        <MaterialCommunityIcons name="account-group" size={30} color="white" />
        {activeScreen === 3 && <View style={styles.underline} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => changeScreen(4)}>
        <MaterialCommunityIcons name="id-card" size={30} color="white" />
        {activeScreen === 4 && <View style={styles.underline} />}
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => changeScreen(5)}>
        <MaterialCommunityIcons name="chart-bar" size={30} color="white" />
        {activeScreen === 5 && <View style={styles.underline} />}
      </TouchableOpacity>
      
    </View>
    <HomeScreen />
    </>
  );
};

const styles = StyleSheet.create({
  menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  underline: {
    marginBottom:-9,
    width: 43, 
    height: 2,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    borderRadius: 2,
  },
});

export default Menubar;

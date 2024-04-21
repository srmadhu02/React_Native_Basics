import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <View style={styles.titleContainer}>
        <Text style={styles.appName}>AquaHarmony</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#007bff',
    flexDirection: 'row', // Arrange items horizontally
    justifyContent: 'space-between', // Space items evenly along the main axis (horizontally)
    alignItems: 'center', // Align items vertically in the center
    paddingVertical: 10, // Adjust vertical padding as needed
    paddingHorizontal: 20, // Adjust horizontal padding as needed
  },
  titleContainer: {
    flexDirection: 'row', // Allow title and logo to be aligned horizontally
    alignItems: 'center', // Align items vertically in the center
  },
  appName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    // No need for absolute positioning, just leave it as a regular flex item
  },
  logoutText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Navbar;

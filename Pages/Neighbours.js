import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Neighbors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/Icons/female.png')} style={styles.icon} />
          </View>
          <Text>Neighbor Name</Text>
          <Text>Amount to Pay: $50</Text>
          <Text>Liters Used: 100</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/Icons/female.png')} style={styles.icon} />
          </View>
          <Text>Neighbor Name</Text>
          <Text>Amount to Pay: $30</Text>
          <Text>Liters Used: 60</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.suggestCard}>
        <Text style={styles.suggestText}>Suggest a Neighbor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flexDirection: 'row', // Arrange cards horizontally
    justifyContent: 'space-between', // Space evenly between cards
    padding: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    width: '48%', // Adjust card width to fit in a row
  },
  imageContainer: {
    alignItems: 'center', // Center the image horizontally
    marginBottom: 10, // Add margin to separate the image from text
  },
  suggestCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    marginTop: 10, // Add margin to separate from the cards
    alignItems: 'center',
  },
  suggestText: {
    fontSize: 18,
    color: '#007bff',
  },
  icon: {
    width: '50%', // Make image take up 50% of the card width
    height: 100, // Adjust height as needed
    resizeMode: 'contain', // Ensure image fits within its container
  },
});

export default Neighbors;

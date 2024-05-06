import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

const HomePage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <ImageBackground source={require('../assets/Icons/water.jpg')} style={styles.image} >

      <Text style={styles.appName}>Aquahormony</Text>
        <Text style={styles.motto}>Promoting Water Conservation & Sustainability</Text>
     
      </ImageBackground>
      <Text style={styles.features}>Features</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={require('../assets/Icons/pay.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Only pay for what you utilize</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Icons/redalert.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Receive leakage alerts</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Icons/Notification.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Get notified at 20% water level</Text>
        </View>
        <View style={styles.card}>
          <Image source={require('../assets/Icons/data_visualization.png')} style={styles.cardImage} />
          <Text style={styles.cardText}>Visualize real-time data</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 10,
  },
  motto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 120,
  },
  features: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '48%', // Adjust as needed for spacing
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  cardImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;

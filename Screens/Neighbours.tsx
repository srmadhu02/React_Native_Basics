import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
const Neighbors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {/* First Card */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/Icons/female.jpg')} style={styles.icon} />
          </View>
          <Text style={[styles.neighborName, styles.bold]}>MADHU MITHA R</Text>
          <Text style={styles.amount}>Rs.35.17</Text>
          <Text style={styles.liters}>(3517 litres)</Text>
        </View>
        {/* Second Card */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/Icons/female.jpg')} style={styles.icon} />
          </View>
          <Text style={[styles.neighborName, styles.bold]}>SIVASREE</Text>
          <Text style={styles.amount}>Rs.72.40</Text>
          <Text style={styles.liters}>(7240 litres)</Text>
        </View>
        {/* Third Card */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/Icons/female.jpg')} style={styles.icon} />
          </View>
          <Text style={[styles.neighborName, styles.bold]}>PREETHY VA</Text>
          <Text style={styles.amount}>Rs.23.35</Text>
          <Text style={styles.liters}>(2335 litres)</Text>
        </View>
        {/* Fourth Card */}
        <TouchableOpacity style={[styles.card, styles.suggestCard]}>
        <MaterialCommunityIcons name="plus" color="white" backgroundColor="black"  style={{borderRadius:35}} size={70}/>
          <Text style={styles.suggestText}>Suggest a Neighbor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  suggestCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestText: {
    fontSize: 20,
    color: '#000',
    fontWeight:"500",
    textAlign: 'center',
    marginTop:20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    width: '48%',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  neighborName: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  liters: {
    fontSize: 15,
    textAlign: 'center',
    color: '#615f5f',
    marginTop:3,
  },
  addNeighbor: {
    fontSize: 40,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default Neighbors;

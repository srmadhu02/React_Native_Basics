import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const WaterLevelTank = ({ distance, maxDistance }) => {
  const percentage = Math.floor((distance / maxDistance) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.gauge}>
        <View style={styles.water}>
          <View style={[styles.waterLevel, { height: `${percentage}%` }]} />
        </View>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
      <Text style={styles.bottomText}>WATER LEFT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gauge: {
    width: windowWidth * 0.8, // Adjust as needed
    aspectRatio: 1,
    borderRadius: windowWidth * 0.4,
    borderWidth: 10,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  water: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
  waterLevel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#07e7f7', // Adjust the color of the water level
  },
  percentageText: {
    fontSize: 40,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '50%',
    transform: [{ translateY: 20 }],
  },
  bottomText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default WaterLevelTank;

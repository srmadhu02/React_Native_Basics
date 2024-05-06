import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WaterLevelTank from './WaterLevel';
import firebaseDB from '../config1';
import { getDatabase, ref, onValue } from "firebase/database";



function Fetch() {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const starCountRef = ref(firebaseDB, 'test/' + 'distance');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <WaterLevelTank distance={distance} maxDistance={100} />
      <Text style={styles.text}>{distance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
  },
});

export default Fetch;

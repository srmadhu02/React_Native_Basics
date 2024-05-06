import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { time: '10 AM - 11 AM', liters: '657 L' },
  { time: '11 AM - 12 PM', liters: '576 L' },
  { time: '12 PM - 01 PM', liters: '218 L' },
  { time: '01 AM - 02 PM ', liters: ' 80 L' },
  { time: '02 AM - 03 PM', liters: '106 L' },
  { time: '03 AM - 04 PM', liters: '376 L' },
];

const HourlyStack = () => {
  const colors = ['#0775fa','#d6c504',  'green', '#fc9403', '#0775fa', '#fa07c5'];
  const renderItem = ({ item, index }) => {
    const colorIndex = index % 3; // Repeat first 3 colors
    const color = colors[colorIndex];
    
    return (
      <View style={styles.row}>
        <MaterialCommunityIcons name="clock" size={60} color={color} />
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.middleText, styles.text]}>{item.time}</Text>
        </View>
        <Text style={[styles.text, styles.bold, styles.large]}>{item.liters}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 34,
    marginRight:10,
    marginLeft:10,
  },
  textContainer: {
    marginLeft: 10,
    width: 200,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginRight:6,
  },
  middleText: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  large: {
    fontSize: 24, 
  },
});

export default HourlyStack;

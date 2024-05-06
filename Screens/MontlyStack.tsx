import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { time: '01-04-2024', liters: '45720 L' },
  { time: '02-04-2024', liters: '39758 L' },
  { time: '03-04-2024', liters: '54406 L' },
  { time: '04-04-2024', liters: '43088 L' },
  { time: '05-04-2024', liters: '45210 L' },

];

const MonthlyStack = () => {
  const colors = ['#0775fa','#d6c504',  'green', '#fc9403', '#0775fa', '#fa07c5'];
 
const renderItem = ({ item, index }) => {
  const colorIndex = index % 3; // Repeat first 3 colors
  const color = colors[colorIndex];

  return (
    <View style={styles.row}>
      <View style={[styles.circle]}>
        <Text style={styles.circleText}>{index + 1}</Text>
      </View>
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
  texxt:{
    backgroundColor:"blue",
    width:30,
    

  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
  },
  circleText: {
    color: 'white',
    fontSize: 20,
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

export default MonthlyStack;

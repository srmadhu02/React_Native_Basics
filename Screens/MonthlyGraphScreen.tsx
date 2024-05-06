import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React from 'react';
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],

    
    datasets: [
      {
        data: [500, 530, 600, 850, 712, 750, 590, 615, 601, 550, 510, 620]
      }
    ]

  };

function MonthlyGraphScreen() {
  return (
    <View>
    <Text style={{ fontSize: 20,fontWeight:"bold"}}>Monthly Water Usage Graph</Text>
    <LineChart
      data={{
        labels: ["6.0", "7.5", "8.0", "9.5", "10.0", "11.5"],
        datasets: [
          {
            data: [
              Math.random() * 1000,
              Math.random() * 1000,
              Math.random() * 1000,
              Math.random() * 1000,
              Math.random() * 1000,
              Math.random() * 1000
            ]
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisLabel=""
      yAxisSuffix=""
      yAxisInterval={1} // optional, defaults to 1
    /*  chartConfig={{
  backgroundColor: "#818281",
  backgroundGradientFrom: "#818281",
  backgroundGradientTo: "#818281",
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Text and values color
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Text color
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#3baff7" // Line chart color
  }
}}*/

      chartConfig={{
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        //backgroundColor: "#e26a00",
        //backgroundGradientFrom: "#fb8c00",
       // backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16
      }}
    />
    <BarChart
  style={{backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",}}
  data={data}
  width={Dimensions.get("window").width}
  height={220}
  


  chartConfig={{
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    //backgroundColor: "#e26a00",
    //backgroundGradientFrom: "#fb8c00",
   // backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }}

/>
  </View>
  )
}

export default MonthlyGraphScreen;
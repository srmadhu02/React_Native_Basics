import {
  LineChart,
  BarChart,
} from "react-native-chart-kit";
import { View, Text, Dimensions } from 'react-native';
import React from 'react';



const chartData = {
  labels: ["1","2","3","4","5","6","7","8"],
  datasets: [
      {
          data: [678, 789, 897, 899, 576, 456, 956, 1010]
      }
  ]
};



function DailyGraphScreen() {
  const chartWidth = Dimensions.get("window").width - 20;
  const chartHeight = 220;
  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Daily Water Usage Graph</Text>
          <LineChart
              data={chartData}
              width={chartWidth}
              height={chartHeight}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={{
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  color: (opacity = 1) => `rgba(90, 200, 250, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForBackgroundLines: {
                      stroke: '#e3e3e3',
                  },
              }}
          />
          <BarChart
              data={chartData}
              width={chartWidth}
              height={chartHeight}
              yAxisLabel=""
              yAxisSuffix=""
              yAxisInterval={1}
              chartConfig={{
                  backgroundGradientFrom: "#ffffff",
                  backgroundGradientTo: "#ffffff",
                  color: (opacity = 1) => `rgba(90, 200, 250, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForBackgroundLines: {
                      stroke: '#e3e3e3',
                  },
                  barPercentage: 0.5 ,
                 
              }}
          />
      </View>
  );
}

export default DailyGraphScreen;

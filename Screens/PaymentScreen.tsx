import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { StripeProvider } from '@stripe/stripe-react-native'; // Import StripeProvider
import AppButton from '../App/components/AppButton';

const PaymentScreen = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.amount}>₹750</Text>
          <TouchableOpacity onPress={toggleDetails} style={styles.moreDetailsButton}>
            <Text style={styles.moreDetailsText}>{isDetailsVisible ? 'Less Info' : 'More Info'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <MaterialCommunityIcons name="tools" backgroundColor="black" style={{borderRadius:35}}size={38} color="#fff" /> 
          <Text style={styles.detailsText}>
            Maintenance Fee
            {'\n'}
            15/03/2024 - 15/04/2024
          </Text>
        </View>
      </View>
      {isDetailsVisible && (
        <View style={styles.detailsModal}>
          <Text style={styles.billDetails}>Bill Details</Text>
          <Text style={styles.billAmount}>₹750.00</Text>
          <Text style={styles.detailsLine}>Period: <Text style={styles.lightGreyText}>15/03/2024 - 15/04/2024</Text></Text>
          <Text style={styles.detailsLine}>Amount of Water Consumed: <Text style={styles.lightGreyText}>450 L</Text></Text>
          <Text style={styles.detailsLine}>Cost per liter: <Text style={styles.lightGreyText}>Rs. 0.15</Text></Text>
          <Text style={styles.billingAddressTitle}>Billing Address</Text>
          <Text style={styles.billingAddress}>No.7, New Colony 1st Street, Palavanthangal, Chennai-600114</Text>
          <TouchableOpacity style={styles.paymentButton} onPress={() => console.log("Proceed with payment")}>
            <Text style={styles.paymentButtonText}>Proceed Payment</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100
  },
  card: {
    backgroundColor: '#edf0ee',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginLeft:15,
    marginRight:15,
    marginBottom:320,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    marginLeft: 10,
    fontSize: 18,
  },
  moreDetailsButton: {
    marginLeft: 'auto', // Right-align the button
    backgroundColor:"#007bff",
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    padding:15,
    width:"40%",
    marginVertical:10,
  },
  moreDetailsText: {
    color:"white",
    fontSize:18,
    textTransform:"uppercase",
    fontWeight:"bold"
  },
  cardRow: {
    flexDirection: 'row', // Place amount and button side-by-side
    justifyContent: 'space-between', // Distribute content evenly
  },
  detailsModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#444',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  billDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  billAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  detailsLine: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  lightGreyText: {
    color: '#ccc',
  },
  billingAddressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  billingAddress: {
    fontSize: 16,
    color: '#ccc',
    marginTop: 5,
  },
  paymentButton: {
    backgroundColor:"#007bff",
    borderRadius:25,
    justifyContent:"center",
    alignItems:"center",
    padding:15,
    width:"100%",
    marginVertical:10,
  },
  paymentButtonText: {
    color:"white",
    fontSize:18,
    textTransform:"uppercase",
    fontWeight:"bold"
  },
});

export default PaymentScreen;




/*
const PaymentScreen = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
  <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <Text style={styles.amount}>₹750</Text>
            <TouchableOpacity onPress={toggleDetails} style={styles.moreDetailsButton}>
              <Text style={styles.moreDetailsText}>{isDetailsVisible ? 'Less Info' : 'More Info'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.details}>
            <MaterialCommunityIcons name="tools" backgroundColor="black" style={{borderRadius:35}}size={38} color="#fff" /> 
            <Text style={styles.detailsText}>
              Maintenance Fee
              {'\n'}
              15/03/2024 - 15/04/2024
            </Text>
          </View>
        </View>
        {isDetailsVisible && (
          <View style={styles.detailsModal}>
          
            <Text>Additional details about the maintenance fee can be displayed here.</Text>
          </View>
        )}
        
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'top',
    justifyContent: 'top',
    marginTop:100
  },
  card: {
    backgroundColor: '#edf0ee',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginLeft:15,
    marginRight:15,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    marginLeft: 10,
    fontSize: 18,
  },
  moreDetailsButton: {
    marginLeft: 'auto', // Right-align the button
    backgroundColor:"#007bff",
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        width:"40%",
        marginVertical:10,
  },
  moreDetailsText: {
  
    color:"white",
    fontSize:18,
    textTransform:"uppercase",
    fontWeight:"bold"
  },
  cardRow: {
    flexDirection: 'row', // Place amount and button side-by-side
    justifyContent: 'space-between', // Distribute content evenly
  },
  detailsModal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export default PaymentScreen;
*/
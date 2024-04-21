import React from 'react'
import { View ,Image,StyleSheet} from 'react-native'
import AppText from '../components/AppText'
import colors from '../config/colors'

import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
       <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>Rs.1000</AppText>
       <View style={styles.userContainer}>
       <ListItem 
        image={require("../assets/bg.jpg")}
        title="splash"
        subTitle="5 Listings"
       />
       </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
    }, 
    userContainer:{
marginVertical:40,
    },
    title:{
        fontSize:24,
        fontWeight:"500",
    },  
    price:{
        color:colors.secondary,
        fontSize:20,
        marginVertical:10,
        fontWeight:"bold",
    },
    detailsContainer:{
        padding:20,
    },
})

export default ListingDetailsScreen
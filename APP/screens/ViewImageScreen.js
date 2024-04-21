import React from 'react';
import {Image,StyleSheet, View} from "react-native";

import colors from '../config/colors';
import AppText from '../components/AppText';
import {MaterialCommunityIcons} from "@expo/vector-icons"


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30}/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
            </View>
            <AppText>React Native</AppText>
        <Image resizeMode="contain" style={styles.image} source={require("../assets/bg.jpg")}/>
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon:{
        
        position:"absolute",
        top:40,
        left:30,
    },
    container:{
        backgroundColor:"#000",
        flex:1,
    },
    deleteIcon:{
       
        position:"absolute",
        top:40,
        right:30,

    },
    image:{
        width:"100%",
        height:"100%",
    }
})

export default ViewImageScreen;
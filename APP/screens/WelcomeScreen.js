import React from 'react';
import { Text,ImageBackground ,View,Image, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
       <ImageBackground 
       blurRadius={10}
       style={styles.background}
       source={require("../assets/bg.jpg")}>
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <AppButton title="Login"/>
       
        <AppButton title="Register" color="secondary"/>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:10,
    },
    buttonsContainer:{
        padding:20,
        width:"100%",
    },

    logo:{
        width:100,
        height:100,
        
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center",
        
    }

})

export default WelcomeScreen;
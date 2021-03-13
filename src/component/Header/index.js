import React from 'react';
import {StyleSheet, Text}from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import {Ionicons} from '@expo/vector-icons';

export default function Header({ background, weather, icon }){
    return(
       <LinearGradient 
        style={styles.header}
        colors={background}
       >
        <Text style={styles.datee}>{weather.results.date}</Text>
        <Text style={styles.city}>{weather.results.city_name}</Text> 

        <Ionicons
            name={icon.name}
            color={icon.color}
            size={150}
        />
        
        <Text style={styles.temp}>{weather.results.temp}°</Text>
        
        
       </LinearGradient>
    );
}
const styles = StyleSheet.create({
    header: {
        width:'95%',
        height:'55%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    datee:{
        color:'#fff',
        fontSize:17,
    },
    city:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    },
    temp:{
        color:'#fff', 
        fontSize:80,
        fontWeight:'bold'
    }
});
import React from 'react';
import {View, Text, StyleSheet}from 'react-native';

import {Ionicons} from '@expo/vector-icons';

export default function Forecast({data}){
    return(
        <View style={styles.container}>

            <Text style={styles.date}>{data.date}</Text>
            <Ionicons name="rainy-outline" color="#1ec9ff" size={25} />

            <View style={styles.temp}>
                <Text>{data.min}°</Text>
                <Text style={{fontSize:18, fontWeight:'bold'}}>{data.max}°</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      marginLeft:12,
      borderRadius:8,
      paddingTop:10,
      paddingBottom:10,
      paddingLeft:14,
      paddingRight:14,
      justifyContent:'space-around',
      alignItems:'center'
    },
    date:{
      fontSize:14  
    },
    temp:{
        alignItems:'center'
    }
});
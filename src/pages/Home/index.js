import React, {useState, useEffect} from 'react';
import {SafeAreaView,StyleSheet, Text,FlatList}from 'react-native';

import Menu from '../../component/Menu';
import Header from '../../component/Header';
import Conditions from '../../component/Conditions';
import Forecast from '../../component/Forecast';

import * as Location from 'expo-location';

import api, {key} from '../../services/api';


const myList = [
    {
      "date": "13/03",
      "weekday": "Sáb",
      "max": 26,
      "min": 18,
      "description": "Tempestades",
      "condition": "clear_day"
    },
    {
      "date": "14/03",
      "weekday": "Dom",
      "max": 27,
      "min": 17,
      "description": "Tempestades",
      "condition": "clear_day"
    },
    {
      "date": "15/03",
      "weekday": "Seg",
      "max": 27,
      "min": 17,
      "description": "Tempestades",
      "condition": "clear_day"
    },
    {
      "date": "16/03",
      "weekday": "Ter",
      "max": 27,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "17/03",
      "weekday": "Qua",
      "max": 28,
      "min": 18,
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "18/03",
      "weekday": "Qui",
      "max": 27,
      "min": 18,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "19/03",
      "weekday": "Sex",
      "max": 24,
      "min": 19,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "20/03",
      "weekday": "Sáb",
      "max": 25,
      "min": 19,
      "description": "Tempestades",
      "condition": "storm"
    },
    {
      "date": "21/03",
      "weekday": "Dom",
      "max": 27,
      "min": 18,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "22/03",
      "weekday": "Seg",
      "max": 27,
      "min": 19,
      "description": "Tempo nublado",
      "condition": "cloud"
    }
  ]
;

export default function Home (){

  const [errorMsg, setErrormsg] = useState(null);
  const [loading, setLoading] = useState(null);
  const [weather, setWeather] = useState([]);
         
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);


  useEffect(()=>{

    (async () =>{
      let {status} =  await Location.requestPermissionsAsync();

      if(status !== 'granted'){
        setErrormsg('Permissão negada');
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      // console.log(location.coords);
      // console.log(location.coords.latitude);

      const response = await api.get(
        `/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );
      // console.log(response.data); 

     setWeather(response.data)
    //  console.log(response.data.results)
    
    if (response.data.results.currently === "noite") {
      setBackground(["#0c3741", "#0f2f61"]);
    }

    })();

  },[])

    return(
        <SafeAreaView style={styles.container}>
            <Menu />                        
            <Header background={background} weather={weather} icon={icon} />
            <Conditions />

            <FlatList 
                horizontal={true}
                contentContainerStyle={{paddingBottom:'5%'}}
                style={styles.list}
                data={myList}
                keyExtractor={item => item.date}
                renderItem={({item}) => <Forecast data={item}/>}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e8f0f0',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:'5%'
    },
    list:{
        marginTop:10,
        marginLeft:10
    }
});
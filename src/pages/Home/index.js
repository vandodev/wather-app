import React, {useState, useEffect} from 'react';
import {SafeAreaView,StyleSheet, Text,FlatList, View}from 'react-native';

import Menu from '../../component/Menu';
import Header from '../../component/Header';
import Conditions from '../../component/Conditions';
import Forecast from '../../component/Forecast';

import * as Location from 'expo-location';

import api, {key} from '../../services/api';


export default function Home (){

  const [errorMsg, setErrormsg] = useState(null);
  const [loading, setLoading] = useState(true);
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

    switch (response.data.results.condition_slug) {
      case "clear_day":
        setIcon({ name: "partly-sunny", color: "#ffb300" });
        break;
      case "rain":
        setIcon({ name: "rainy", color: "#fff" });
        break;
      case "storm":
        setIcon({ name: "rainy", color: "#fff" });
        break;
    }

    setLoading(false);

    })();

  },[])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 17, fontStyle: "italic" }}>
          Carregando dados...
        </Text>
      </View>
    );
  }

    return(
        <SafeAreaView style={styles.container}>
            <Menu />                        
            <Header background={background} weather={weather} icon={icon} />
            <Conditions weather={weather} />

            <FlatList 
                horizontal={true}
                contentContainerStyle={{paddingBottom:'5%'}}
                style={styles.list}
                data={weather.results.forecast}
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
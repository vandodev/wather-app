import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routers';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

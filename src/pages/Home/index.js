import React from 'react';
import {SafeAreaView,StyleSheet, Text}from 'react-native';

import Menu from '../../component/Menu';
import Header from '../../component/Header';
import Conditions from '../../component/Conditions';

export default function Home (){
    return(
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header />
            <Conditions />
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
});
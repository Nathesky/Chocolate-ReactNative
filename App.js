import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {

  return (

    <ScrollView styles={styles.body}>

    <View style={styles.main}>
    <StatusBar style="auto" backgroundColor='#712700' />

    <View style={styles.header}>

    <Text style={styles.tit}>Types of Chocolate</Text>
    </View>
      <View style={styles.card}>
        <Text  style={styles.subtitle}>Kopenhagen</Text>
      <Image source={require('./assets/kope.webp')} style={styles.imgs}/>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Cacau Show</Text>
      <Image source={require('./assets/lacreme.png')} style={styles.imgscreme}/>
      </View>


      <View style={styles.card}>
        <Text style={styles.subtitle}>Lindict</Text>
      <Image source={require('./assets/lindt.webp')} style={styles.imgs}/>
      </View>
    
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header:{
    marginTop: 40,
    height: 70,
    width: '95%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#712700',
    borderRadius: 20,
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    margin: 75,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5AC5C',
    borderRadius: 200
  },
  imgs:{
    width: 200,
    height: 350,
    margin: 10,
    zIndex: 1
  },
  imgscreme:{
    width: 150,
    height: 420,
    margin: -20,
    zIndex: 1
  },
  tit:{
    fontSize: 20,
    letterSpacing: 4,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#f5f5f5'
  },
  subtitle:{
    fontSize: 20,
    letterSpacing: 2,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#712700'
  },
  }
);

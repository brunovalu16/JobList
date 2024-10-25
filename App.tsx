import React from 'react';
import { StatusBar } from 'react-native';

//importação das páginas
import HomeScreen from './App/screens/HomeScreen'


export default function App() {
  return (

    <>
     <HomeScreen />
     <StatusBar barStyle={"light-content"}
     backgroundColor="transparent"
     translucent
     />
    </>
  );
}
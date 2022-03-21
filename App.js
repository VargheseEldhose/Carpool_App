import React,{useEffect} from 'react'
import { Button, Text,View, Alert, TouchableOpacity } from 'react-native'
import Splash from './screens/splash'
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux'
import {store} from "./s"
import SplashScreen from 'react-native-splash-screen'



export default function App  () {
 
  useEffect(() => {
       SplashScreen.hide()
    }, [])
  return(
 //<Provider store={store}>
   
 //</Provider>
  // <Splash></Splash>
  <HomeScreen></HomeScreen>
  );
}

//export default App 
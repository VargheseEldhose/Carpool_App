import React,{useEffect} from 'react';
import { Button, Text,View, Alert, TouchableOpacity } from 'react-native';


import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from "./store";
import SplashScreen from 'react-native-splash-screen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RiderScreen from './screens/Rider';
import DriverScreen from './screens/Driver';
import BookRide from './screens/BookRide';
import DriverEventconfirmed from './screens/DriverEventConfirmed';


const Stack = createStackNavigator();

 const MyStack = () => {
    
    useEffect(() => {
    SplashScreen.hide()

 }, [])
 
 return (
  
  <NavigationContainer store={store}>
     
     <Stack.Navigator>
     
     <Stack.Screen
         
         name="HomeScreen"
         component={HomeScreen}
         options={{ title: 'Carpool App' }}
      
    />
       <Stack.Screen
         name="Rider"
         component={RiderScreen}
         options={{ title: 'Rider' }}
       />
         <Stack.Screen
         name="BookRide"
         component={BookRide}
         options={{ title: 'Book A Ride' }}
       />
     
       <Stack.Screen name="Driver"
        component={DriverScreen}
        options={{ title: 'Driver'}} 
      />
        <Stack.Screen 
        name="Eventconfirmed"
        component={DriverEventconfirmed}
        options={{ title: 'Confirmation'}} 
      />

     </Stack.Navigator>
  
   </NavigationContainer>
 );

 };

 export default MyStack

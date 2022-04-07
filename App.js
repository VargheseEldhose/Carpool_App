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
import SelectRide from './screens/SelectRide';
import DriverEventconfirmed from './screens/DriverEventConfirmed';


const Stack = createStackNavigator();

 const MyStack = () => {
    
    useEffect(() => {
    SplashScreen.hide()

 }, [])
 
 return (
  <Provider store={store}>
  <NavigationContainer >
     
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
         name="SelectRide"
         component={SelectRide}
         options={{ title: 'Select A Ride' }}
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
   </Provider>
 );

 };

 export default MyStack


import React,{useEffect} from 'react'
import { Button, Text,View, Alert, TouchableOpacity } from 'react-native'

import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux'
import {store} from "./s"
import SplashScreen from 'react-native-splash-screen'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RiderScreen from './screens/Rider';
import DriverScreen from './screens/Driver';


const Stack = createStackNavigator();

 const MyStack = () => {
    
    useEffect(() => {
    SplashScreen.hide()

 }, [])
 
 return (
  
  <NavigationContainer>
     
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
     
       <Stack.Screen name="Driver"
        component={DriverScreen}
        options={{ title: 'Driver'}} 
      />

     </Stack.Navigator>
  
   </NavigationContainer>
 );

 };

 export default MyStack



// export default function App  () {
 
//   useEffect(() => {
//       SplashScreen.hide()
//    }, [])
//   return(
//  //<Provider store={store}>
   
//  //</Provider>
//   // <Splash></Splash>
//   <HomeScreen></HomeScreen>
//   // <NavigationContainer>
//   //     <Stack.Navigator>
//   //       <Stack.Screen
//   //         name="Rider"
//   //         component={RiderScreen}
//   //         options={{ title: 'Rider' }}
//   //       />
//   //       <Stack.Screen name="Driver" component={DriverScreen} />
//   //     </Stack.Navigator>
//   //   </NavigationContainer>
//   );


// }

//export default App
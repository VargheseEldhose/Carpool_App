import React, { useEffect } from 'react';
import { Button, Text, View, Alert, TouchableOpacity } from 'react-native';

import AllRides from './screens/allrides'
import selectFilter from './screens/selectFilter';
import HomeScreen from './screens/HomeScreen';
import SignScreen from './screens/LogSign'
import { Provider } from 'react-redux';
import { store } from "./store";
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RiderScreen from './screens/Rider';
import SignUp from './screens/SignUp';
import DriverScreen from './screens/Driver';
import SelectRide from './screens/SelectRide';
import DriverReviewPrice from './screens/DriverReviewPrice';
import BookRide from './screens/BookRide';
import DriverEventPosted from './screens/DriverEventPosted';
import ViewRides from './screens/ViewRides';

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

            name="LoginScreen"
            component={SignScreen}
            options={{ title: 'Log in' }}

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
            options={{ title: 'Driver' }}
          />
          <Stack.Screen
            name="DriverReviewPrice"
            component={DriverReviewPrice}
            options={{ title: 'Review Price' }}
          />

          <Stack.Screen
            name="ViewRides"
            component={ViewRides}
            options={{ title: 'View Posted Rides' }}
          />

          <Stack.Screen
            name="BookRide"
            component={BookRide}
            options={{ title: 'Confirm booking' }}
          />
          <Stack.Screen

            name="DriverEventPosted"
            component={DriverEventPosted}
            options={{ title: 'Event posted' }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );

};

export default MyStack


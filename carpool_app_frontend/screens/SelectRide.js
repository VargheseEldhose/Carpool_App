import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import tw from "twrnc";
import RMap from "../components/RMap"
import { setOrigin, setDestination, selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SURGE_CHARGE_RATE = 1.5;
var array = []
var start = []
var filteredorigin = []
var filteredDest = []
const SelectRide = ({ navigation }) => {
  // const [text,setText] = React.useState('');
  // const getTime = async () => {
  //     try{
  //   const time = await AsyncStorage.getItem('appData');
  // setText(time);}
  //  catch (error){
  //   console.log(error);
  //  }
  // };


  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  // const destination = useSelector(selectDestination);

  const ButtonAlert = () => {
    // insertRiderTrip({
    //   origin,
    //   destination,
    //   date
    // });
    Alert.alert(
      "Book Ride",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('BookRide') }
      ]
    );
  }



  //React.useEffect( () =>{
  //  getTime();
  //}, []);
  return (



    <View >
      <View style={{ marginTop: 10, height: 260 }}>
        <RMap />
      </View>
      <View style={tw`h-1/2`}>
        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>Rides available according to your search!!</Text>

        <Text style={{ fontSize: 16, color: 'black', margin: 15 }}>
          Price for the Ride: {10 + ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE) / 100)}
        </Text>

        <Text style={{ fontSize: 16, color: 'black', margin: 15 }}>Distance travelled in the ride: {travelTimeInformation?.distance.text}</Text>
        <Text style={{ fontSize: 16, color: 'black', margin: 15 }}>Duration of the ride: {travelTimeInformation?.duration.text}</Text>
        <Button title={"Book"} onPress={ButtonAlert} />

        <Text style={{ fontSize: 20, color: 'black', margin: 5 }}>Distance travelled in the ride: {travelTimeInformation?.distance.text}</Text>
        <Text style={{ fontSize: 20, color: 'black', margin: 5 }}>Duration of the ride: {travelTimeInformation?.duration.text}</Text>

        <View style={{ width: 200, margin: 20, marginLeft: 110 }}>
          <Button style={{ width: 20 }} title={" Book "} onPress={ButtonAlert} />
        </View>

      </View>
      )





  }
      export default SelectRide

      const styles = StyleSheet.create({ })


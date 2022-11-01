// import React, { useState } from 'react'
// import { StyleSheet, Button, Text, View } from 'react-native'
// import tw from "twrnc";
// import Map from "../components/Map"
// import { setOrigin, selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
// //import { selectTravelTimeInformation } from '../slices/navSlice';
// import { useDispatch } from 'react-redux'
// import { useSelector } from "react-redux"
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const SURGE_CHARGE_RATE = 1.5;

import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import tw from "twrnc";
import RMap from "../components/RMap"
import { setOrigin, setDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
const SURGE_CHARGE_RATE = 1.5;
const DriverReviewPrice = ({ navigation }) => {
  //   const origin = useSelector(selectOrigin);
  //   const destination = useSelector(selectDestination);
  //   const travelTimeInformation = useSelector(selectTravelTimeInformation);
  //   //   AsyncStorage.setItem(JSON.stringify(origin.description),JSON.stringify(origin.description))
  //   //   AsyncStorage.setItem(JSON.stringify(destination.description),JSON.stringify(destination.description))

  //   // const [i, setText] = useState(" ");
  //   // const [dest, setdestText] = useState(" ");


  //   // AsyncStorage.getItem(JSON.stringify(origin.description), (err, result) => {
  //   //     console.log(result);
  //   //    // i=result;
  //   //    setText(result);

  //   //   });
  //   //   AsyncStorage.getItem(JSON.stringify(destination.description), (err, result) => {
  //   //     console.log(result);
  //   //    // i=result;
  //   //    setdestText(result);

  //   // });
  //   return (
  //     <View>


  //       <View style={tw`h-1/3`}><Map></Map></View>
  //       <Text style={{ color: 'black', fontSize: 28, margin: 15, }}>Review Price details</Text>

  //       <View style={tw`h-1/2`}>
  //         {/* <Text style={{ fontSize: 25, color: 'black', marginLeft: 15 }}>From</Text>

  //         <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>{i}</Text>
  //         <Text style={{ fontSize: 25, color: 'black', marginLeft: 15 }}>To: </Text> */}

  //         {/* <Text style={{ fontSize: 20, color: 'black', margin: 10 }}>{dest}</Text> */}

  //         <Text style={{ fontSize: 28, color: 'black', margin: 10 }}>Distance: {travelTimeInformation?.distance.text}</Text>
  //         <Text style={{ fontSize: 28, color: 'black', margin: 10 }}>Duration: {travelTimeInformation?.duration.text}</Text>
  //         <Text style={{ fontSize: 28, color: 'black', margin: 10 }}>Price for the Ride: ${10 + ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE) / 100)}</Text>
  //       </View>
  //       <Button title='Post' onPress={() => navigation.navigate('DriverEventPosted')}></Button>
  //     </View>

  //   )
  // }
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  // const destination = useSelector(selectDestination);


  //React.useEffect( () =>{
  //  getTime();
  //}, []);
  return (
    <View>
      <View style={tw`h-1/2`}>
        <RMap />
      </View>
      <View style={tw`h-1/2`}>
        <Text style={{ color: 'black', fontSize: 18, margin: 5 }}>Rides available according to your search!!</Text>

        <Text style={{ fontSize: 16, color: 'black', margin: 15 }}>
          Price for the Ride: {10 + ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE) / 100)}
        </Text>

        <Text style={{ fontSize: 16, color: 'black', margin: 15 }}>Distance travelled in the ride: {travelTimeInformation?.distance.text}</Text>
        <Text style={{ fontSize: 16, color: 'black', margin: 15 }}>Duration of the ride: {travelTimeInformation?.duration.text}</Text>
        <Button title={"Post"} onPress={() => navigation.navigate('DriverEventPosted')}></Button>

      </View>
    </View>

  )
}

export default DriverReviewPrice

const styles = StyleSheet.create({})

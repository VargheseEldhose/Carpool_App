import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import tw from "twrnc";
import RMap from "../components/RMap"
import { setOrigin, setDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"

const SURGE_CHARGE_RATE = 1.5;
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


  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  //React.useEffect( () =>{
  //  getTime();
  //}, []);
  return (
    <View>
      <View style={tw`h-1/2`}>
        <RMap />
      </View>
      <View style={tw`h-1/2`}>
        <Text style={{ color: 'black', fontSize: 30, margin: 5 }}>Rides available according to your search!!</Text>

        <Text style={{ fontSize: 20, color: 'black', margin: 15 }}>
          Price for the Ride: {10 + ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE) / 100)}
        </Text>

        <Text style={{ fontSize: 20, color: 'black', margin: 15 }}>Distance travelled in the ride: {travelTimeInformation?.distance.text}</Text>
        <Text style={{ fontSize: 20, color: 'black', margin: 15 }}>Duration of the ride: {travelTimeInformation?.duration.text}</Text>
        <Button title={"Book"} onPress={ButtonAlert} />

      </View>
    </View>

  )
}

export default SelectRide

const styles = StyleSheet.create({})

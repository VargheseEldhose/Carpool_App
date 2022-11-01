import React,{useState} from 'react'
import { StyleSheet,Button, Text, View } from 'react-native'
import tw from "twrnc";
import Map from "../components/Map"
import { setOrigin, selectDestination, selectOrigin,selectTravelTimeInformation } from '../slices/navSlice';
//import { selectTravelTimeInformation } from '../slices/navSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
const SURGE_CHARGE_RATE = 1.5;

const DriverReviewPrice = ({navigation}) => {
    const origin =useSelector(selectOrigin);
    const destination=useSelector(selectDestination);
    const travelTimeInformation=useSelector(selectTravelTimeInformation);
    AsyncStorage.setItem(JSON.stringify(origin.description),JSON.stringify(origin.description))
    AsyncStorage.setItem(JSON.stringify(destination.description),JSON.stringify(destination.description))

  const [i, setText] = useState(" ");
  const [dest, setdestText] = useState(" ");


    AsyncStorage.getItem(JSON.stringify(origin.description), (err, result) => {
        console.log(result);
       // i=result;
       setText(result);

      });
      AsyncStorage.getItem(JSON.stringify(destination.description), (err, result) => {
        console.log(result);
       // i=result;
       setdestText(result);

      });
    return (
        <View>


            <View style={tw`h-1/3`}><Map></Map></View>
            <Text style={{color:'black',fontSize:28,margin:15,}}>Review Price details</Text>

      <View style={tw`h-1/2`}>
      <Text style = { {fontSize : 25, color:'black',marginLeft:15} }>From</Text>

      <Text style = { {fontSize : 20, color:'black',margin:15} }>{i}</Text>
      <Text style = { {fontSize : 25, color:'black',marginLeft:15} }>To: </Text>

                <Text style = { {fontSize : 20, color:'black',margin:15} }>{dest}</Text>

         <Text style = { {fontSize : 28, color:'black',margin:15} }>Distance: {travelTimeInformation?.distance.text}</Text>
         <Text style = { {fontSize : 28, color:'black',margin:15} }>Duration: {travelTimeInformation?.duration.text}</Text>
         <Text style = { {fontSize : 28, color:'black',margin:15} }>Price for the Ride: ${10 +((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE ) / 100 )}</Text>
         </View>
         <Button title ='Post' onPress={()=> navigation.navigate('DriverEventPosted')}></Button>
        </View>

    )
}

export default DriverReviewPrice

const styles = StyleSheet.create({})

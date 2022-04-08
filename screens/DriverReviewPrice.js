import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "twrnc";
import Map from "../components/Map"
import { selectTravelTimeInformation } from '../slices/navSlice';
import {useDispatch} from 'react-redux'
import {useSelector} from "react-redux"

const DriverReviewPrice = ({navigation}) => {
    const travelTimeInformation=useSelector(selectTravelTimeInformation);
    return (
        <View>
            

            <View style={tw`h-1/3`}><Map></Map></View>
            <Text style={{color:'black',fontSize:28,margin:15,}}>Review Price details</Text>
           
      <View style={tw`h-1/2`}>
                
        
         <Text style = { {fontSize : 28, color:'black',margin:15} }>Distance: {travelTimeInformation?.distance.text}</Text>
         <Text style = { {fontSize : 28, color:'black',margin:15} }>Duration: {travelTimeInformation?.duration.text}</Text>
         </View>

        </View>
        
    )
}

export default DriverReviewPrice

const styles = StyleSheet.create({})

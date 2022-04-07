import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "twrnc";
import RMap from "../components/RMap"

const SelectRide = ({navigation}) => {
    return (
        <View>
       
       <Text style={{color:'black',fontSize:32,margin:80}}>Rides available according to your search!!!</Text>
         <View style={tw`h-1/2`}>
         <RMap/>
         </View>
         
        </View>
    )
}

export default SelectRide

const styles = StyleSheet.create({})

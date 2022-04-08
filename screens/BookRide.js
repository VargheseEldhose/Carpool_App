import React from 'react'
import { StyleSheet, Text, View,Table,Tr,Td } from 'react-native'
import tw from "twrnc";
import RMap from "../components/RMap"
import MapView from 'react-native-maps'

const BookRide = () => {
    return (
        <View>
       
         <View style={tw`h-1/2`}>
         <RMap/>
         </View>
        
        </View>
    )
}

export default BookRide

const styles = StyleSheet.create({})

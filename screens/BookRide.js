import React from 'react'
import { StyleSheet, Text, View,Table,Tr,Td } from 'react-native'
import tw from "twrnc";
import Map from "../components/Map"
import MapView from 'react-native-maps'

const BookRide = () => {
    return (
        <View>
       
         <View style={tw`h-1/2`}>
         <Map/>
         </View>
        
        </View>
    )
}

export default BookRide

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Button,Text, View } from 'react-native'
//import { StyleSheet, Text, View,Table,Tr,Td } from 'react-native'
import tw from "twrnc";
import Map from "../components/Map"
import MapView from 'react-native-maps'

const driverEventPosted = () => {
    return (
        <View>
               <View>
         <Text style={{color:'black',fontSize:20,margin:80}}>Your event is posted</Text>
         <View style={tw`h-1/2`}>
         <Map/>
         </View>
        
        </View>
        </View>
    )
}

export default driverEventPosted

const styles = StyleSheet.create({})

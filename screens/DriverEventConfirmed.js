import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "twrnc";
import Map from "../components/Map"
const DriverEventConfirmed = ({navigation}) => {
    return (
        <View>
            <Text style={{color:'black',fontSize:32,margin:80}}>Your event has been posted!!!</Text>

            <View style={tw`h-1/2`}>
         <Map/>
         </View>
        </View>
        
    )
}

export default DriverEventConfirmed

const styles = StyleSheet.create({})

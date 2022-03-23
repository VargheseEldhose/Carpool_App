import React from 'react'
import { StyleSheet, Text, View,Table,Tr,Td } from 'react-native'
import tw from "twrnc";

const BookRide = () => {
    return (
        <View>
          
            <Text style = {{fontSize : 30 ,padding:100,paddingLeft:120, color:"black"}}>Map here</Text>
            
            <Text style={tw`p-5`} style={{color:"black",fontSize:30,fontWeight:"bold",fontStyle:"italic",paddingLeft:90}}> Available rides</Text>
          
            <Text style={tw`p-5`} style={{color:"black",fontSize:20,fontWeight:"bold",padding:25,paddingTop:30}}> Driver 1 name</Text>
          
            <Text style={tw`p-5`} style={{color:"black",fontSize:20,fontWeight:"bold",padding:25,paddingTop:10}}> Driver 2 name</Text>


        </View>
    )
}

export default BookRide

const styles = StyleSheet.create({})

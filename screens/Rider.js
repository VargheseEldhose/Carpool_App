import React, { useEffect } from 'react'
import { StyleSheet, Alert,Button,Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import tw from "twrnc";
const Rider = ({navigation}) => {

   
    return (


        <View style={tw`p-5`}>
          
     <GooglePlacesAutocomplete
      
      placeholder="Enter starting point..."
      styles={{
        container:{
          flex:0,
          padding:10,
          marginTop:20
        },
        textInput:{
          fontSize:18,
          color:"black",
          backgroundColor:"silver"
         
        },
        
       
      }}
      query={{
       key:GOOGLE_MAPS_APIKEY,
       language:"en",
     }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}

 />
  <GooglePlacesAutocomplete

placeholder="Enter destination point..."
styles={{
 container:{
   flex:0,
 padding:10,
 marginTop:10,
 marginBottom:80
   
 },
 textInput:{
   fontSize:18,
   color:"black",
   backgroundColor:"silver"
  
 },

}}
query={{
key:GOOGLE_MAPS_APIKEY,
language:"en",
}}
nearbyPlacesAPI="GooglePlacesSearch"
debounce={400}

/>


          <Button title ='Next' onPress={()=> navigation.navigate('BookRide')}></Button>
        </View>
    )
}

export default Rider
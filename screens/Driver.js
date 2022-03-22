import React, { useEffect } from 'react';
import { StyleSheet,SafeAreaView, Alert,Button,Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import tw from "twrnc";

const Driver = () => {

   
    return (

<SafeAreaView style={tw`bg-white h-full`}>
      
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
        marginTop:10
          
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
  
          
        </View>
        </SafeAreaView>
    )
}

export default Driver

const styles=StyleSheet.create({

  text:{
    color:"blue",

  },
});
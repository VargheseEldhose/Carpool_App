import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, TextInput,Alert,Button,Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import tw from "twrnc";
import { setOrigin, setDestination } from '../slices/navSlice';
import {useDispatch} from 'react-redux'

const Rider = ({navigation}) => {
  const dispatch = useDispatch();
   
    return (
    
    <SafeAreaView>

        <View style={tw`p-5`}>
          
     <GooglePlacesAutocomplete
      
      placeholder="Enter starting point..."
      styles={{
        container:{
          flex:0,
          
        },
        textInput:{
          fontSize:18,
          color:"black",
          backgroundColor:"silver"
         
        },
        
       
      }}
      onPress={(data,details=null)=>{
        dispatch(
          setOrigin({
            location:details.geometry.location,
            description:data.description,
          })
        );
        
      }}
      fetchDetails={true}
      returnKeyTYPE={"Search"}

      query={{
       key:GOOGLE_MAPS_APIKEY,
       language:"en",
     }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={100}

 />
  <GooglePlacesAutocomplete

placeholder="Enter destination point..."
styles={{
 container:{
   flex:0,
 padding:10,
 marginTop:10,
 color:"black"
   
 },
 textInput:{
   fontSize:18,
   color:"black",
   backgroundColor:"silver"
  
 },

}}
onPress={(data,details=null)=>{
  dispatch(
    setDestination({
      location:details.geometry.location,
      description:data.description,
    })
  );

}}
fetchDetails={true}
query={{
key:GOOGLE_MAPS_APIKEY,
language:"en",
}}
nearbyPlacesAPI="GooglePlacesSearch"
debounce={400}

/>


<Button title ='Next' onPress={()=> navigation.navigate('SelectRide')}></Button>
        </View>
        </SafeAreaView>
    )
}

export default Rider
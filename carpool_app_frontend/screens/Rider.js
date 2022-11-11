import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, TextInput, Alert, Button, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import DatePicker from 'react-native-date-picker'
import tw from "twrnc";

import {
  setOrigin,
  setDestination,
  selectOrigin,
  selectDate,
  selectDestination,
  selectTravelTimeInformation,
  setTravelTimeInformation,
  setDate
} from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { insertRiderTrip } from '../dataAccess/RiderRespository'

const Rider = ({ navigation }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const date = useSelector(selectDate);

  return (

   
      <View style={{backgroundColor:'black'}}>
 <View style={{width:420,backgroundColor:"#189AEA",padding:15}}>          
         
            <Text style={{fontSize:30,color:'black',fontWeight:'bold',fontStyle:'italic'}}>Carpool App</Text>

       </View>
        <Text style={{fontSize:20,margin:15,marginTop:25}}>Select starting point:</Text>
       
        <GooglePlacesAutocomplete

          placeholder="Enter starting point..."
          styles={{
            container: {
              flex: 0,
              color: "black",
              width:380,
              marginLeft:15


            },
           
            textInput: {
              fontSize: 18,
              color: "black",
              backgroundColor: "silver"
            }
          
          

          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

          }}
          on
          fetchDetails={true}
          returnKeyType={"Search"}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}

          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}

        />

        <Text style={{fontSize:20,margin:15,marginTop:25}}>Select destination:</Text>
       
        <GooglePlacesAutocomplete

          placeholder="Enter destination point..."
          styles={{
            container: {
              flex: 0,
              color: "black",
              width:380,
              marginLeft:10


            },
            textInput: {

              fontSize: 18,
              color: "black",
              backgroundColor: "silver",


            },

          }}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );

          }}
          fetchDetails={true}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",

          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}

        />

<View style={{margin:20}}>
          <Text style={{fontSize:20,margin:15,marginTop:25}}>Select date and time:</Text>
          <DatePicker
            date={new Date(date)}
            onDateChange={(newDate) => {
              dispatch(
                setDate(newDate.toISOString())
              )
            }}
          />
        </View>
 
   <View style={{margin:20}}></View>
  
   <View style={{flex : 0,marginBottom:145, alignItems : 'center'}}>
   <Button  style={{width:20}}
          title='       Next       '
          onPress={() => {
            //insertRiderTrip({
             // origin,
             // destination,
             // date
          //  });
            navigation.navigate('SelectRide');
          }}>
        </Button>
       </View>
      
    


      </View>
 
  )
}

export default Rider
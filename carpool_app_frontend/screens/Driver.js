import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, Alert, Button, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "twrnc";
import DatePicker from 'react-native-date-picker'
import { insertDriverPost } from '../dataAccess/DriverRepository'

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
import Map from "../components/Map"

const Driver = ({ navigation }) => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const date = useSelector(selectDate);

  return (

    <SafeAreaView style={{backgroundColor:'black'}}>
<View style={{width:420,backgroundColor:"#189AEA",padding:15}}>          
         
         <Text style={{fontSize:30,color:'black',fontWeight:'bold',fontStyle:'italic'}}>Carpool App</Text>

    </View>
      <View style={tw`p-5`}>
      <Text style={{fontSize:20,margin:15,marginTop:25}}>Select starting point:</Text>
        <GooglePlacesAutocomplete

          placeholder="Enter starting point..."
          styles={{
            container: {
              flex: 0

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
              padding: 10,
              marginTop: 10,
              color: "black"
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
          minLength={3}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",

          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}

        />
        <View style={tw`my-2.5`}>
          <Text>Select date and time:</Text>
          <DatePicker
            date={new Date(date)}
            onDateChange={(newDate) => {
              dispatch(
                setDate(newDate.toISOString())
              )
            }}
          />
        </View>

        <View >
          <Button
            title='PostDriverEvent'
            onPress={() => {
              insertDriverPost({
                origin,
                destination,
                date
              });
              navigation.navigate('DriverReviewPrice');
            }}>
          </Button>


        </View>
      </View>
    </SafeAreaView>
  )
}

export default Driver

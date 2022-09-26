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

    <SafeAreaView>

      <View style={tw`p-5`}>

        <Text>Select starting point:</Text>
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
          on
          fetchDetails={true}
          returnKeyType={"Search"}
          minLength={6}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}

          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}

        />

        <Text>Select destination:</Text>
        <GooglePlacesAutocomplete

          placeholder="Enter destination point..."
          styles={{
            container: {
              flex: 0,
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
          minLength={6}
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

        <Button
          title='Next'
          onPress={() => {
            insertRiderTrip({
              origin,
              destination,
              date
            });
            navigation.navigate('SelectRide');
          }}>
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Rider
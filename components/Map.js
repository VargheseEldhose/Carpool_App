import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {GOOGLE_MAPS_APIKEY} from "@env";
import MapView,{Marker} from 'react-native-maps'
import tw from "twrnc"
import { selectOrigin, selectDestination } from '../slices/navSlice';
import {useSelector} from "react-redux"
//import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    const origin=useSelector(selectOrigin);
    const destination=useSelector(selectDestination);
    return (
       
        <MapView
        style={tw`flex-1`}
        initialRegion={{
            latitude:origin.location.lat,
            longitude:origin.location.lng,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
        }}
>
    {origin&&destination&&(
     /*  <MapViewDirections
       origin={origin.description}
       destination={destination.description}
       apikey={GOOGLE_MAPS_APIKEY}
       strokeColor="black"
       strokeWidth={3}
       />*/
       <View></View>

    )}
        {origin?.location&&(
            <Marker coordinate={{
                latitude:origin.location.lat,
                longitude:origin.location.lng
            }}
            title="Origin"
            description={origin.description}
            identifier="Origin"
            />
        )}
        </MapView>
    );
}

export default Map

const styles = StyleSheet.create({})

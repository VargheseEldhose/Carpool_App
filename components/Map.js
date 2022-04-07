import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {GOOGLE_MAPS_APIKEY} from "@env";
import MapView,{Marker} from 'react-native-maps'
import tw from "twrnc"
import { selectOrigin, selectDestination } from '../slices/navSlice';
import {useSelector} from "react-redux"
import MapViewDirections from 'react-native-maps-directions';
import {useRef} from 'react'
import { setTravelTimeInformation } from '../slices/navSliceRider';
import {useDispatch} from 'react-redux'

const Map = () => {
    const origin=useSelector(selectOrigin);
    const destination=useSelector(selectDestination);
    const mapref = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{

        if(!origin||!destination) return;
        mapref.current.fitToSuppliedMarkers(["origin","destination"],{
            edgePadding:{top:50,right:50,bottom:50,left:50},
        });
    },[origin,destination]);

    useEffect(()=>{
        if(!origin||!destination) return;
        const getTravelTime=async()=>{
                   fetch( `https://maps.googleapis.com/maps/api/distancematrix/json?
                   units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}` )
                   .then((res)=>res.json())
                   .then((data)=>{
                       console.log(data);
 dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                   });
        }; 
        getTravelTime();

    },[origin,destination,GOOGLE_MAPS_APIKEY]);

    return (
       
        <MapView
        ref={mapref}
        style={tw`flex-1`}
        initialRegion={{
            latitude:origin.location.lat,
            longitude:origin.location.lng,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
        }}
>
    {origin&&destination&&(
       <MapViewDirections
       origin={origin.description}
       destination={destination.description}
       apikey={GOOGLE_MAPS_APIKEY}
       strokeColor="black"
       strokeWidth={3}
       />
     

    )}
    {origin?.location&&(
            <Marker coordinate={{
                latitude:origin.location.lat,
                longitude:origin.location.lng
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            />
            
        )}
       
        {destination?.location&&(
            <Marker coordinate={{
                latitude:destination.location.lat,
                longitude:destination.location.lng
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
            />
        )}
        </MapView>
    );
}

export default Map

const styles = StyleSheet.create({})

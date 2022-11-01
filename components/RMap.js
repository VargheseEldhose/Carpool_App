import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {GOOGLE_MAPS_APIKEY} from "@env";
import MapView,{Marker} from 'react-native-maps'
import tw from "twrnc"
import { selectOrigin, selectDestination } from '../slices/navSlice';
import {useSelector} from "react-redux"
import MapViewDirections from 'react-native-maps-directions';
import {useRef} from 'react'
import { setTravelTimeInformation } from '../slices/navSlice';
import {useDispatch} from 'react-redux'

const RMap = () => {
    const rOrigin=useSelector(selectOrigin);
    const rDestination=useSelector(selectDestination);
    const mapref = useRef(null);
    const dispatch = useDispatch();

    useEffect(()=>{

        if(!rOrigin||!rDestination) return;
        mapref.current.fitToSuppliedMarkers(["rOrigin","rDestination"],{
            edgePadding:{top:50,right:50,bottom:50,left:50},
        });
    },[rOrigin,rDestination]);

    useEffect(()=>{
        if(!rOrigin||!rDestination) return;
        const getTravelTime=async()=>{
                   fetch( `https://maps.googleapis.com/maps/api/distancematrix/json?
                   units=imperial&origins=${rOrigin.description}&destinations=${rDestination.description}&key=${GOOGLE_MAPS_APIKEY}` )
                   .then((res)=>res.json())
                   .then((data)=>{
                      console.log(data);
 dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
                   });
        }; 
        getTravelTime();

    },[rOrigin,rDestination,GOOGLE_MAPS_APIKEY]);

    return (
       
        <MapView
        ref={mapref}
        style={tw`flex-1`}
        initialRegion={{
            latitude:rOrigin.location.lat,
            longitude:rOrigin.location.lng,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
        }}
>
    {rOrigin&&rDestination&&(
       <MapViewDirections
       origin={rOrigin.description}
       destination={rDestination.description}
       apikey={GOOGLE_MAPS_APIKEY}
       strokeColor="black"
       strokeWidth={3}
       />
     

    )}
    {rOrigin?.location&&(
            <Marker coordinate={{
                latitude:rOrigin.location.lat,
                longitude:rOrigin.location.lng
            }}
            title="rOrigin"
            description={rOrigin.description}
            identifier="rOrigin"
            />
            
        )}
       
        {rDestination?.location&&(
            <Marker coordinate={{
                latitude:rDestination.location.lat,
                longitude:rDestination.location.lng
            }}
            title="rDestination"
            description={rDestination.description}
            identifier="rDestination"
            />
        )}
        </MapView>
    );
}

export default RMap

const styles = StyleSheet.create({})

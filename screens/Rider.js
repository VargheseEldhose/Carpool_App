import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, TextInput,Alert,Button,Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import tw from "twrnc";
import { setOrigin, setDestination,selectOrigin,selectTravelTimeInformation } from '../slices/navSlice';
import {useDispatch} from 'react-redux';
import {useSelector} from "react-redux";


const Rider = ({navigation}) => {
  const dispatch = useDispatch();
  const origin =useSelector(selectOrigin);
  const travelTimeInformation=useSelector(selectTravelTimeInformation);

   
    return (

<SafeAreaView>
      
        <View style={tw`p-5`}>

         <GooglePlacesAutocomplete 
      
             placeholder="Enter starting point..."
             styles={{
               container:{
                 flex:0
                 
               },
               textInput:{
                 fontSize:18,
                 color:"black",
                 backgroundColor:"silver"
                
               }             

               
              
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
            returnKeyType={"Search"}
          minLength={6}
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
        color:"black"
        
          
        },
        textInput:{
          
          fontSize:18,
          color:"black",
          backgroundColor:"silver",
          
         
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
      minLength={6}
      query={{
       key:GOOGLE_MAPS_APIKEY,
       language:"en",
       
     }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}

 />
 <TextInput placeholder='Enter departure time: ' 
       
       style={{
     
        color:'black',
        height: 43,
        borderRadius:5,
        marginTop:15,
        marginLeft:7,
        paddingLeft:10,
        width:358,
        fontSize:18,
        
       
          color:'black',
          backgroundColor:'silver'
        
         
        }}/>


  
  
 


<Button title ='Next' onPress={()=> navigation.navigate('SelectRide')}></Button>
        </View>
        </SafeAreaView>
    )
}

export default Rider
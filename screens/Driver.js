import React, { useEffect } from 'react';
import { StyleSheet,SafeAreaView, TextInput,Alert,Button,Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import tw from "twrnc";

const Driver = ({navigation}) => {

   
    return (

<SafeAreaView >
      
        <View style={tw`p-5`}>

         <GooglePlacesAutocomplete class='pac-container'
      
             placeholder="Enter starting point..."
             styles={{
               container:{
                 flex:0
                 
               },
               textInput:{
                 fontSize:18,
                 color:"black",
                 backgroundColor:"silver"
                
               },
               nearbyPlacesAPI:{
                 color:"black",
                 backgroundColor:"black"
               }
             
            
               
              
             }}
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
        color:"black",
        
          
        },
        textInput:{
          
          fontSize:18,
          color:"black",
          backgroundColor:"silver",
          
         
        },
        
      }}
      textInputProps={{queryTextColor:"#666"}}
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


  <Text style = { {fontSize : 30, color:'black',marginTop:50} }>Distance(requires working API key)</Text>
  <Text style = { {fontSize : 30, color:'black',marginTop:50 ,marginBottom:50} }>Price:(requires working API key)</Text>
  
  <Button title ='Next' onPress={()=> navigation.navigate('Eventconfirmed')}></Button>
          
        </View>
        </SafeAreaView>
    )
}

export default Driver

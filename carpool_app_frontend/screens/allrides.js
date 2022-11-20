import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, TextInput, Alert, Button, Text, View } from 'react-native'
import { backendApiUrl } from "../app.json";
import fetch from "node-fetch";
import { compose } from '@reduxjs/toolkit';

var array=[]
var start=[]
const AllRides = ({ navigation }) => {
    
    var k=0
    fetch("https://e4f7-159-203-45-40.ngrok.io/driver")
    .then(res=>res.json())
    .then(res=>{
        for(let z of res)
        {
         
           array.push(z["destinationAddress"])
           start.push(z["originAddress"])
           console.log(array[0,0])
         //  console.log(z)
         
          
        }
    
     
    })
 

    return (
     
    
           array.map( (i,j)=>
           
           
            
            <View style={{backgroundColor:'black'}}>
                   <Text style={{backgroundColor:'black',margin:10}}>Source: {start[j]}</Text>
                
                
                <Text style={{backgroundColor:'black',margin:10}}>Destination: {i}</Text>
           
                 
                
                </View>
                
                ))
      
      
        
    
  }
  
  export default AllRides

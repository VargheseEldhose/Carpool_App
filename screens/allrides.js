import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, TextInput, Alert, Button, Text, View } from 'react-native'
import { backendApiUrl } from "../app.json";
import fetch from "node-fetch";
import { compose } from '@reduxjs/toolkit';
var j;
var array=[]
const AllRides = ({ navigation }) => {
    
    var k=0
    fetch("https://e4f7-159-203-45-40.ngrok.io/rider")
    .then(res=>res.json())
    .then(res=>{
        for(let z of res)
        {
          // console.log( i)
           array.push(z["destinationAddress"])
          // console.log(array[0])
         
           j=array[k];
           return(
           <View style={{backgroundColor:'black'}}><Text>{j} b bbb</Text></View>
           )
           k++
        }
    
     
    })
    console.log(j)

    return (
      
            array.map((i)=>
            
            <View style={{backgroundColor:'black',width:100}}>
                
                <Text style={{backgroundColor:'black'}}>{j}</Text>
              
                
                </View>
                
                )
        
      
        
    )
  }
  
  export default AllRides

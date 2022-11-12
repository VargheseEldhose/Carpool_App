import React,{useState} from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import tw from "twrnc";
import RMap from "../components/RMap"
import { setOrigin, setDestination,selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SURGE_CHARGE_RATE = 1.5;
var array=[]
var start=[]
var filteredorigin=[]
var filteredDest=[]
const SelectRide = ({ navigation }) => {
  const origin = useSelector(selectOrigin);
  const destination=useSelector(selectDestination);
  
    AsyncStorage.setItem(JSON.stringify(origin.description),JSON.stringify(origin.description))
    AsyncStorage.setItem(JSON.stringify(destination.description),JSON.stringify(destination.description))

  const [F1, setText] = useState(" ");
  const [F2, setdestText] = useState(" ");

//setText(origin.description)
//setdestText(destination.description)
  
  var k=0
    fetch("https://e4f7-159-203-45-40.ngrok.io/driver")
    .then(res=>res.json())
    .then(res=>{
        for(let z of res)
        { console.log(origin.description)
          console.log(z["originAddress"])
          if( z["destinationAddress"]==destination.description&& z["originAddress"]==origin.description)
          {
          filteredorigin.push(z["originAddress"])
          filteredDest.push(z["destinationAddress"])
          //console.log(filteredorigin[0])

          }
         
           array.push(z["destinationAddress"])
           start.push(z["originAddress"])
          // console.log(array[0,0])
         //  console.log(z)
         
          
        }
      })
  const ButtonAlert = () => {
    // insertRiderTrip({
    //   origin,
    //   destination,
    //   date
    // });
    Alert.alert(
      "Book Ride",
      "Are you sure?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('BookRide') }
      ]
    );
  }


  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const dispatch = useDispatch();
  

  //React.useEffect( () =>{
  //  getTime();
  //}, []);
  return (


   
    <View >
      <View style={{marginTop:10,height:260}}>
        <RMap />
      </View>
     
        <View >
        <Text style={{ color: 'black', fontSize: 30, margin: 5 }}>Rides available according to your search</Text>   
        </View>

        {
          filteredDest.map( (i,j)=>{

            return(
              <View style={{margin:5}} >
            <Text style={{color:'black'}}>From:  {filteredorigin[j]}</Text>
            <Text style={{color:'black'}}>To:  {i}</Text>
          </View>
            );
          })
        }
  

      <Text style={{ fontSize: 20, color: 'black', margin: 5 }}>
        Price for the Ride: {10 + ((travelTimeInformation?.duration.value * SURGE_CHARGE_RATE) / 100)}
      </Text>

      <Text style={{ fontSize: 20, color: 'black', margin: 5 }}>Distance travelled in the ride: {travelTimeInformation?.distance.text}</Text>
      <Text style={{ fontSize: 20, color: 'black', margin: 5 }}>Duration of the ride: {travelTimeInformation?.duration.text}</Text>
    
     <View style={{width:200,margin:20,marginLeft:110}}>  
      <Button style={{width:20}} title={ " Book "} onPress={ButtonAlert}/>
      </View>

    </View>
 )
       
        

  

  }
export default SelectRide
  
const styles = StyleSheet.create({})
  

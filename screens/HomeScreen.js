import React, { useEffect } from 'react'
import { StyleSheet, Alert,Button,Text, View } from 'react-native'
//import splash from './splash'
//import SplashScreen from 'react-native-splash-screen' 
const HomeScreen = () => {

   
    return (


        <View style={{flex : 1,justifyContent:'center', alignItems : 'center'}}>
          <Text style = {{fontSize : 30}}>Carpool</Text>
         {/* <TouchableOpacity onPress={()=> Alert.alert('Button is working')}>
    
         // </TouchableOpacity> */}
          <Button title ='Rider' onPress={()=> Alert.alert('Button Rider','Rider side App')}></Button>
          <Button title ='Driver' onPress={()=> Alert.alert('Button Driver','Driver side App')}></Button>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

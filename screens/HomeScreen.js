import React, { useEffect } from 'react'
import { StyleSheet, Alert,Button,Text, View } from 'react-native'
//import splash from './splash'
//import SplashScreen from 'react-native-splash-screen' 
const HomeScreen = ({navigation}) => {

   
    return (


        <View style={{flex : 1,justifyContent:'center', alignItems : 'center'}}>
          <Text style = {{fontSize : 30}}>Carpool</Text>
         {/* <TouchableOpacity onPress={()=> Alert.alert('Button is working')}>
    
         // </TouchableOpacity> */}
          <Button title ='Rider' onPress={()=> navigation.navigate('Rider')}></Button>
          <Button title ='Driver' onPress={()=> navigation.navigate('Driver')}></Button>
        </View>
    )
}

export default HomeScreen
import React, { useEffect } from 'react'
import { Image,StyleSheet, Alert,Button,Text, View } from 'react-native'
//import splash from './splash'
//import SplashScreen from 'react-native-splash-screen' 
const HomeScreen = ({navigation}) => {


   
    return (
      


        <View style={{flex : 1, alignItems : 'center',backgroundColor:'grey'}}>
         
         <Image
        style={{width:450,height:400,marginBottom:100,marginTop:1}}
        source={{
          uri: 'https://cdn.vectorstock.com/i/1000x1000/97/39/carsharing-icon-carpooling-linear-vector-24189739.webp'
        }}
         />

      <View style={styles.Button}></View>
          <Button title ='            Rider           ' onPress={()=> navigation.navigate('LoginScreen')}></Button>
          <View style={styles.Button}></View>
          <Button title ='          Driver          ' onPress={()=> navigation.navigate('LoginScreen')}></Button>
      
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({ Button:{
  marginBottom:20,
  padding:10
}})

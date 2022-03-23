import React, { useEffect } from 'react'
import { StyleSheet, Alert,Button,Text, View } from 'react-native'

const Rider = ({navigation}) => {

   
    return (


        <View style={{flex : 1,justifyContent:'center', alignItems : 'center'}}>
          <Text style = {{fontSize : 30}}>Rider View</Text>
         
          <Button title ='Book A Ride' onPress={()=> navigation.navigate('BookRide')}></Button>
        </View>
    )
}

export default Rider
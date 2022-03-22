import React from 'react'
//import logo from '../android/app/src/images/_ANDWETH.jpg';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'

const splash = () => {
    return (
        <View style={{flex : 1,justifyContent:'center', alignItems : 'center',backgroundColor:'white',}}>
            
            <Text style = {{fontSize : 30,color:'black',fontWeight:'bold'}}>Carpool App</Text>
       
            <View>
                <Image style={{width:300,height:400,resizeMode:'contain'}} source={{uri:"https://www.mitsubishicars.com/content/dam/mitsubishi-motors-us/images/cars/mirage/2022/primary/hero/2022-mirage-se-sand-yellow.png?width=720&quality=70&auto=webp"}}></Image>
            </View>
            </View>
            
    )
}

export default splash

const styles = StyleSheet.create({})

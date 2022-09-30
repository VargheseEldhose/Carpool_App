import React, { useEffect } from 'react'
import { StyleSheet,TextInput,Image, Alert,Button,Text, View } from 'react-native'
//import splash from './splash'
//import SplashScreen from 'react-native-splash-screen' 
const SignScreen = ({navigation}) => {


   
    return (
      
        

        <View style={{flex : 1, alignItems : 'center',backgroundColor:'silver'}}>
        
            <View style={{width:420,backgroundColor:"#189AEA",padding:20}}>          
            <Text style={{fontSize:30,color:'black',fontWeight:'bold',fontStyle:'italic'}}>Carpool App</Text>

       </View>
           
         <Image style={{width:450,height:280,marginBottom:30,marginTop:1}}
        
          source={{uri: 'https://cdn2.vectorstock.com/i/thumb-large/55/76/carsharing-or-carpooling-service-icon-vector-30285576.jpg'}}
       
         />
        
          <TextInput style={{fontSize:22,color:'black',width:200,borderBottomWidth:2,marginBottom:10}}
         
           placeholder="Enter your email"
          
         />
        
        <TextInput style={{fontSize:22,borderBottomColor:'#000',color:'black',width:200,marginBottom:30,borderBottomWidth:2}}
          placeholder="Password"
       />
      
          <Button  style={styles.Button} title ='                Log  in               '  onPress={()=> navigation.navigate('Rider')}></Button>
         
          <View style={styles.Button}></View>
     
          <Text style={{color:'black',fontSize:16,marginBottom:10}}>Don't Have an account yet?</Text>
     
       
        
          <Button style={{width:210}} title ='Sign up' onPress={()=> navigation.navigate('Driver')}></Button>
        
          </View>
       
    )
}

export default SignScreen


const styles = StyleSheet.create({

    Button:{
        marginBottom:40,
        padding:10
    }
})

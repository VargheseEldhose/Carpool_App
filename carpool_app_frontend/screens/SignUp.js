import React, { useState} from 'react'
import { StyleSheet,TextInput,Image, Alert,Button,Text, View } from 'react-native'
import { setPassword, setPhone } from '../slices/Users';
import { insertUser } from '../dataAccess/UsersRepo';
//import splash from './splash'
//import SplashScreen from 'react-native-splash-screen' 
const SignUp = ({navigation}) => {
    
const[Email,SetEmail]=useState('');
const[Password,SetPassword]=useState('');
const[Phone,SetPhone]=useState('');
var em=(Email)
var pa=(Password)
var ph=(Phone)


   
    return (
      
        

        <View style={{flex : 1, alignItems : 'center',backgroundColor:'silver'}}>
        
            <View style={{width:420,backgroundColor:"#189AEA",padding:20}}>          
            <Text style={{fontSize:30,color:'black',fontWeight:'bold',fontStyle:'italic'}}>Carpool App</Text>

       </View>
           
         <Image style={{width:450,height:180,marginBottom:30,marginTop:1}}
        
          source={{uri: 'https://cdn2.vectorstock.com/i/thumb-large/55/76/carsharing-or-carpooling-service-icon-vector-30285576.jpg'}}
       
         />
        
          <TextInput  style={{fontSize:22,color:'black',width:200,borderBottomWidth:2,marginBottom:30}}
         
           placeholder="Enter your email"
           onChangeText={(Email) => SetEmail(Email)}
          
          
         />
        
        <TextInput style={{fontSize:22,borderBottomColor:'#000',color:'black',width:200,marginBottom:30,borderBottomWidth:2}}
          placeholder="Password"
          onChangeText={(Password) => setPassword(Password)}
          
       />
       <TextInput style={{fontSize:22,color:'black',width:200,borderBottomWidth:2,marginBottom:60}}
         
         placeholder="Phone Number"
         onChangeText={(Phone) => setPhone(Phone)}
          
        
       />
      
          <Button  style={styles.Button}
          title ='                Sign Up               '  
          onPress={()=>{ 
          navigation.navigate('HomeScreen'); 
          
            insertUser({ em,ph,pa
              
                          }); 
                            alert(Email)

              }}>

              </Button>
         
          <View style={styles.Button}></View>
     
        
          </View>
       
    )
}

export default SignUp


const styles = StyleSheet.create({

    Button:{
        marginBottom:40,
        padding:10
    }
})

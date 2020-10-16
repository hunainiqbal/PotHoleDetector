import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Alert,
} from 'react-native';
import Login from '../PotHoleDetector/Login';
import Register from '../PotHoleDetector/Register';

export default class firstpage extends React.Component {
    render(){
        return(
            <View style={styles.main}>
                <Text 
                    style={{marginTop:150,fontSize:32,fontWeight:"bold",color:"white",textAlign:"center"}}>
                    LOGIN AS</Text>
                <TouchableOpacity>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:5,marginRight:180}}>
                            <Image 
                            source = {require('../PotHoleDetector/assets/delete.jpg')}
                            style={styles.images}
                            onPress={() => {this.props.navigation.navigate('Register')}}/>
                        </View>
                        <View style={{flex:5,marginRight:140}}>
                            <Image 
                            style={styles.images} 
                            source={require('../assets/delete.jpg')}
                            onPress={() =>{this.props.navigation.navigate('Login')}}/>
                        </View>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={{flex:1,flexDirection:"row"}}>
                             <Text style={{fontSize: 20, color:"white", marginTop:20, marginLeft:40, fontWeight:"bold"}}
                               onPress={() =>{this.props.navigation.navigate('Register')}}>
                              ADMIN</Text>
                        </View>
                    </View>
                        <View style={{flex:1,flexDirection:"row"}}>
                        <Text 
                            style={{ fontSize: 20, color:"white", marginTop:-25, marginLeft:230,fontWeight:"bold"}}
                            onPress={() =>{this.props.navigation.navigate('Login')}}>
                            USER</Text>
                        </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#253A53",
        flex:1,
        alignItems:"center",
        
    },
    images:{
        height:150,
        width:150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "white",
        marginTop:40,
    }
})
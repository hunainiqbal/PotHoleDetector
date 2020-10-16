import React from 'react';
import {StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    ImageBackground,
    onClickListener,
    Alert} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        state = {
          
          email   : '',
          password: '',
        }
      }
    onClickListener  ()  {
          this.props.navigation.navigate('Menu');
        Alert.alert("Alert", "Button pressed ");
      }
       ClickListener () {
         this.props.navigation.navigate('Register');
       Alert.alert("Alert", "Button pressed ");
     }
      
    
      render() {
          console.log('props !!!!')
        return (
          
            
          <View style={styles.container}>
            <Image 
            source={require('../PotHoleDetector/assets/newpot.png')}style={{width:110,height:110,marginBottom:50,marginRight:10}}
            /> 
            <View style={styles.inputContainer}>
            
              
              <TextInput style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid='transparent'
                  onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
              
              <TextInput style={styles.inputs}
                  placeholder="Password"
                  secureTextEntry={true}
                  underlineColorAndroid='transparent'
                  onChangeText={(password) => this.setState({password})}/>
            </View>
    
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Menu')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>
    
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.ClickListener('Register')}>
                <Text>Register</Text>
            </TouchableHighlight>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd700',
      },
      inputContainer: {
          borderBottomColor: '#F5FCFF',
          backgroundColor: '#FFFFFF',
          borderRadius:30,
          borderBottomWidth: 1,
          width:250,
          height:45,
          marginBottom:20,
          flexDirection: 'row',
          alignItems:'center'
      },
      inputs:{
          height:45,
          marginLeft:16,
          borderBottomColor: '#FFFFFF',
          flex:1,
      },
      inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
      },
      buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
      },
      loginButton: {
        backgroundColor: "#00b5ec",
      },
      loginText: {
        color: 'white',
      }
    });
import React from 'react'
import {
  View,Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  alignSelf,
  color,
  padding,
  btntext,
  underlineColorAndroid,
  PlatformColor,
  navigation,
  Alert,
  TouchableHighlight
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    state = {
      
      email   : '',
      password: '',
      YourName:'',
      CNICnumber:'',
      Vehiclenumber:'',
      YourEmail:'',
      Dateofbirth:'',


    }
  }

  onClickListener = (viewId) => {
      this.props.navigation.navigate('Login');
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  

  render() {
      console.log('props !!!!')

return(

<View style={styles.Register}
>
  <Text style={styles.header}>REGISTRATION FORM</Text>
  <TextInput style={styles.TextInput} placeholder="Your Name"
  underlineColorAndroid={'transparent'} />

  <TextInput style={styles.TextInput} placeholder="CNIC number"
  underlineColorAndroid={'transparent'} />

  <TextInput style={styles.TextInput} placeholder="Vehicle number"
  underlineColorAndroid={'transparent'} />

  <TextInput style={styles.TextInput} placeholder="Your Email" secureTextEntry={true}
  underlineColorAndroid={'transparent'} />

  <TextInput style={styles.TextInput} placeholder="Date of birth"
  underlineColorAndroid={'transparent'} />

<TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('Sign up')}>
  <Text style= {styles.btntext}>Sign Up</Text>
  </TouchableHighlight>

</View>

);
  }
   }


const styles = StyleSheet.create({


Register:{
  alignSelf :'stretch',
  flex:1,
  justifyContent:'center',
backgroundColor:'#ffd700',
paddingLeft:60,
paddingRight:60
},

header:{
  fontSize:30,
  color:'#000000',
  paddingBottom:10,
  marginBottom:40,
  borderBottomColor:'#FFF',
  borderBottomWidth:1,
},

TextInput:{
  height:50,
  alignSelf :'stretch',
  color:'#000000',
  marginBottom:30,
  borderBottomColor:'#f8f8f8',
  borderBottomWidth:1,
},
Button:{

},
btntext: {
  color:'black',
  fontWeight:'bold',
  fontSize:20,
  textAlign:"center",
  alignSelf:'stretch',
  alignItems:'center',
  padding:20,
  backgroundColor:'#59cbbd',
  marginTop:30,
}
});
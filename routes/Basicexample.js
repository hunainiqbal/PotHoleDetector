import React from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, TouchableOpacity } from 'react-native';

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);  

}
    thirdclickListener = ()=> {
         // console.log('here')
         this.props.navigation.navigate('Login');
     }
  
  
  
  render() {
    return <LottieView source={require('../assets/31815-city-driver-animation.json')} autoPlay loop />;
    <TouchableOpacity>
    
    
    
    
    <text
    onPress={() => this.thirdclickListener()}>
      next</text>
      </TouchableOpacity>
  }
}
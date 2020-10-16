import React from 'react';
import { Button, View,Text,Image,StyleSheet,backgroundColor } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
// export default class Onboardingscreen extends React.Component
const Onboardingscreen =({navigation}) => {
   
    return(

<Onboarding
    onSkip={()=>navigation.navigate("Login")}
    onDone={()=>navigation.navigate("Login")}
  pages={[
  
    {
      backgroundColor: '#ffd700',
      image: <Image source={require('./assets/pothole.jpg')}style={{width:500,height:330}} />,
      title: 'WELCOME TO POTHOLE DETECTION ',
      subtitle: 'PRESS NEXT TO MOVE ON ',
    },
    {
        backgroundColor: '#ffd700',
        image: <Image source={require('./assets/carpothole.jpg')}style={{width:500,height:330}} />,
        title:'deadly potholes',
        subtitle: 'Car potholes can be very dangerous aswell as they destroy the comfort of your ride specially the driver',
    },

    
    {
        backgroundColor: '#ffd700',
        image: <Image source={require('./assets/Car-Undercarriage-Diagram.jpg')}style={{width:400,height:180}} />,
        title: 'DAMAGE TO THE SUSPENSION OF THE CAR',
        subtitle: 'Potholes can destroy the suspension of the car which may lead to serious expenditure of the owner',

    },
    {
        backgroundColor: '#ffd700',
        image: <Image source={require('./assets/newpothole.png')} />,
        title: 'LETS GET STARTED',
        subtitle: 'Safe travels......',
    },

  ]}
/>
    );
};
export default Onboardingscreen;
const styles=StyleSheet.create({

    container: {

        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
import React from 'react';
import {View,Text,TextInput, Image,ImageBackground, ScrollViewBase, ScrollView,Button, TouchableHighlight,onClickListener} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Menu extends React.Component {
     constructor(props) {
          super(props);  

     }
          oneclickListener = ()=> {
               // console.log('here')
               this.props.navigation.navigate('Report');
           }
           twoclickListener = ()=> {
               //  console.log('here')
               this.props.navigation.navigate('TestApp');
             
           }

    render(){
     console.log('props !!!!',this.props)
        return( 
            <View  style={{width: 500, height:1000, backgroundColor: 'lightblue'}}>
            <ImageBackground source={require('./assets/maps.jpg')} 
       style={{width:450,height:300}} >
           
       <View style={{flexDirection:"row"}}>
            <View style={{flex:1,alignItems:"center"}}>
           <TouchableOpacity >
                 <Image source={require('./assets/google.png')}  style={{width:80,height:80,marginTop:250,marginRight:50}} />
                 </TouchableOpacity>
                 <Text alignItems>SHOW MAP</Text>
                   
            </View> 
       
            <View style={{flex:1,alignItems:"center"}} >
                <TouchableOpacity 
                onPress={() => this.oneclickListener()}>
                 <Image source={require('./assets/showdata.png')}  style={{width:95,height:80,marginTop:250,marginRight:30}}
                 /> 
                 <Text>SHOW DATA</Text>
                 </TouchableOpacity>
            </View> 
            
            </View>
            <View style={{flexDirection:"row",marginTop:30}}>
            <View style={{flex:1,alignItems:"center"}}>
                 <Image source={require('./assets/email.png')}  style={{width:80,height:80,marginRight:50}} />
                 <Text>EMAIL DATA</Text>
            </View>                       
            <View style={{flex:1,alignItems:"center"}}>
                <TouchableOpacity
                onPress={() => this.twoclickListener()}>
                
                 <Image source={require('./assets/button1.jpg')}  style={{width:80,height:80,marginRight:30}} />
                 <Text>START TIMER</Text>
                 </TouchableOpacity>
            </View>  
       </View>

       <View style={{flex:1,alignItems:"center",marginTop:30}}>
                 <Image source={require('./assets/delete.jpg')}  style={{width:80,height:80,}} />
                 <Text>DELETE DATA</Text>
            </View>
                  </ImageBackground>
               
            </View>
         
            

)
}
}


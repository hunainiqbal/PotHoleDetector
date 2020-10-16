import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
// export default class Support extends React.Component

const Support = () => {
   return (
      <View style = {styles.container}>
         <Text style = {styles.text}>
            
            
            <Text >
               HAVING AN ISSUE ?{"\n \n "}
            </Text>,
            
            <Text>
               <Text style = {styles.container}>We are here to help you out . {"\n\n"}
               1. If you are having issues in loading please restart the application {"\n\n"}
               2. Please check your cell phone connectivity{"\n\n"}
               3. Open your google live location for location issues and guidance{"\n\n"} .</Text>
            </Text>
            
           
         </Text>
      
      </View>
   )
}
export default Support

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      marginTop: 50,
      padding: 20
   },
   text: {
      color: '#000000',
      fontSize:25
   },
  
})
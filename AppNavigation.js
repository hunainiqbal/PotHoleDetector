import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registrationscreen from './Register';
import LoginScreen from './Login';
import Menuscreen from './Menu';
import Reportscreen from './Report'; 
import TestAppscreen from './TestApp';
import Basicexample from './routes/Basicexample'; 
const Stack = createStackNavigator();



function App() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Basicexample" component={Basicexample} />
      <Stack.Screen name="Loginscreen" component={LoginScreen} />
      <Stack.Screen name="Register" component={Registrationscreen} />
      <Stack.Screen name="Menu" component={Menuscreen} />
      <Stack.Screen name="Report" component={Reportscreen} />
      <Stack.Screen name="TestApp" component={TestAppscreen} />

    </Stack.Navigator>
  );
}

export default App;
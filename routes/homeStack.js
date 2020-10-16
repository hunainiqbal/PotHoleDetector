import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Menu from '../Menu';
const Stack = createStackNavigator();
export default HomeStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'#bbb'}}}>
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      </Stack.Navigator>
  );
};
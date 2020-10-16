import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './homeStack';
import Onboardingscreen from '../Onboardingscreen'
import Login from '../Login'
import Report from '../Report';
import Register from '../Register';
import Support from '..//Support';
import Menu from '../Menu';
import TestApp from '../TestApp';
import Basicexample from '../routes/Basicexample';
import {DrawerContent} from '../DrawerContent';
// import firstpage from '../firstpage';


const Drawer = createDrawerNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={ props => <DrawerContent {...props} />}>
      {/* <Drawer.Screen name="firstpage" component={firstpage} /> */}
      <Drawer.Screen name="Onboardingscreen " component={Onboardingscreen } />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Support" component={Support}/>
        <Drawer.Screen name="TestApp" component={TestApp} />
        <Drawer.Screen name="Menu" component={Menu} />
        {/* <Drawer.Screen name="Sign Out" component={Login}/> */}
        <Drawer.Screen name="Report" component={Report}/>
         <Drawer.Screen name="Register" component={Register}
         
         
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

import {View,Text, Image,ImageBackground,Timer,Stopwatch, ScrollViewBase, ScrollView,Button, TouchableHighlight} from 'react-native';
import AppNavigation from './AppNavigation';
import Register from './Register';
import React from 'react';

import Navigator from './routes/Drawer';
import Home from '../PotHoleDetector/Login';
import Loader from '../PotHoleDetector/routes/Basicexample'


import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { useIsDrawerOpen } from '@react-navigation/drawer';

const App: () => React$Node=()=> {
  return(
    //  <Drawer.Navigator/> 
     <Navigator/>
    // <Loader/>  
    );
  }  
export default App;
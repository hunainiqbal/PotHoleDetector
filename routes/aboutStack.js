import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Report from '../Report';

const Stack = createStackNavigator();

export default AboutStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Report" component={Report} options={{title: 'Report'}} />
      </Stack.Navigator>
  );
};
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../Screens/Home';
import { MyCars } from '../Screens/MyCars';
import { Splash } from '../Screens/Splash';
import { CarDetails } from '../Screens/CarDetails';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { SchedulingComplete } from '../Screens/SchedulingComplete';
import { RentxRoutesList } from '../@types/routes';

const { Navigator, Screen } = createNativeStackNavigator<RentxRoutesList>();

export function StackRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}} initialRouteName='Splash'>
      <Screen
        name="Splash" component={Splash}
      />
      <Screen
        name="Home" component={Home} options={{gestureEnabled: false}}
      />
      <Screen
        name="CarDetails" component={CarDetails}
      />
      <Screen
        name="Scheduling" component={Scheduling}
      />
      <Screen
        name="SchedulingDetails" component={SchedulingDetails}
      />
      <Screen
        name="SchedulingComplete" component={SchedulingComplete}
      />
       <Screen
        name="MyCars" component={MyCars}
      />
    </Navigator>
  )
}
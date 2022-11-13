import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../Screens/Home';
import { CarDetails } from '../Screens/CarDetails';
import { Scheduling } from '../Screens/Scheduling';
import { SchedulingDetails } from '../Screens/SchedulingDetails';
import { SchedulingComplete } from '../Screens/SchedulingComplete';
import { RentxRoutesList } from '../@types/routes';

const { Navigator, Screen } = createNativeStackNavigator<RentxRoutesList>();

export function StackRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false}} >
      <Screen
        name="Home" component={Home}
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
    </Navigator>
  )
}
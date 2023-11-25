import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { AboutAppScreen } from '../screens'

const Drawer = createDrawerNavigator()

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator initialRouteName="AboutApp">
      <Drawer.Screen name="AboutApp" component={AboutAppScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

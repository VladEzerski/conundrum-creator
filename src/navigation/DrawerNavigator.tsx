import React, { FC } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { HomeIcon, InformationIcon } from '../assets/icons'
import { AboutAppScreen, WelcomeScreen } from '../screens'

const Drawer = createDrawerNavigator()

const navigatorDefaultOptions = {
  drawerStyle: {
    backgroundColor: 'rgb(64, 65, 79)',
    color: '#ffffff',
  },
  drawerActiveTintColor: '#ffffff',
  drawerInactiveTintColor: '#808080',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: 'rgb(64, 65, 79)',
  },
}

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={navigatorDefaultOptions}>
      <Drawer.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          drawerLabel: 'Домой',
          drawerIcon: () => <HomeIcon />,
          headerTitle: 'Conundrum Creator',
        }}
      />
      <Drawer.Screen
        name="AboutApp"
        component={AboutAppScreen}
        options={{
          drawerLabel: 'О приложении',
          drawerIcon: () => <InformationIcon />,
          headerTitle: 'О приложении',
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

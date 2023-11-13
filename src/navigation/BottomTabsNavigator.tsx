import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  WelcomeScreen,
  TextGeneratorScreen,
  ImageGeneratorScreen,
  HistoryScreen,
} from '../screens'

const Tab = createBottomTabNavigator()

const screenOptions = { headerShown: false }

const BottomTabsNavigator: FC = () => {
  return (
    <Tab.Navigator initialRouteName="Welcome" screenOptions={screenOptions}>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="TextGenerator" component={TextGeneratorScreen} />
      <Tab.Screen name="ImageGenerator" component={ImageGeneratorScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigator

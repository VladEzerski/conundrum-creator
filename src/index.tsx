import React, { FC } from 'react'
import { Text } from 'react-native'

import {
  WelcomeScreen,
  MainScreen,
  ImageGeneratorScreen,
  HistoryScreen,
} from './screens'

const Root = () => {
  console.log('AppNavigator ')
  return <WelcomeScreen />
}

export default Root

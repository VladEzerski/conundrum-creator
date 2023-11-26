import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import BottomTabsNavigator from './BottomTabsNavigator'

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator

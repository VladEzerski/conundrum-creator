import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomTabsNavigator from './BottomTabsNavigator'

const Stack = createNativeStackNavigator()

const screenOptions = { headerShown: false }

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabsNavigator"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="BottomTabsNavigator"
          component={BottomTabsNavigator}
        />
        {/* <Stack.Screen name="New" component={NewScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

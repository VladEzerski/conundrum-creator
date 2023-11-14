import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppNavigator } from './navigation'

const Root = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  )
}

export default Root

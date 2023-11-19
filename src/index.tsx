import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RealmProvider } from '@realm/react'

import { AppNavigator } from './navigation'
import { TextResultsModel } from './models/TextResultsModel'

const Root = () => {
  return (
    <SafeAreaProvider>
      <RealmProvider schema={[TextResultsModel]}>
        <AppNavigator />
      </RealmProvider>
    </SafeAreaProvider>
  )
}

export default Root

import React, { FC } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Realm, { ObjectSchema } from 'realm'
import { createRealmContext } from '@realm/react'

import { AppNavigator } from './navigation'
import { TextResultsModel } from './models/TextResultsModel'

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [TextResultsModel],
}
// Create a realm context
const { RealmProvider } = createRealmContext(realmConfig)

const Root = () => {
  return (
    <SafeAreaProvider>
      <RealmProvider>
        <AppNavigator />
      </RealmProvider>
    </SafeAreaProvider>
  )
}

export default Root

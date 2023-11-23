import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RealmProvider } from '@realm/react'

import { REALM_STORAGE_PATH } from './constants'
import { AppNavigator } from './navigation'
import { GenerationInfoModel } from './models/GenerationInfoModel'

const Root = () => {
  return (
    <SafeAreaProvider>
      <RealmProvider schema={[GenerationInfoModel]} path={REALM_STORAGE_PATH}>
        <AppNavigator />
      </RealmProvider>
    </SafeAreaProvider>
  )
}

export default Root

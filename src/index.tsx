import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  Realm,
  useRealm,
  createRealmContext,
  RealmProvider,
} from '@realm/react'

import { AppNavigator } from './navigation'
import { TextResultsModel } from './models/TextResultsModel'
import { ImageResultsModel } from './models/ImageResultsModel'
import { GenerationInfoModel } from './models/GenerationInfoModel'

// // Create a configuration object
// const realmTextResultsConfig: Realm.Configuration = {
//   schema: [TextResultsModel],
// }
// const realmImageResultsConfig: Realm.Configuration = {
//   schema: [ImageResultsModel],
// }
// // Create a realm context
// const { RealmProvider: TextResultsRealmProvider } = createRealmContext(
//   realmTextResultsConfig,
// )
// const { RealmProvider: ImageResultsRealmProvider } = createRealmContext(
//   realmImageResultsConfig,
// )

const Root = () => {
  try {
    Realm.flags.ALLOW_CLEAR_TEST_STATE = true
    Realm.clearTestState()
  } catch (er) {
    console.error('RE Er: ', er)
  }
  // Realm.clearTestState = () => {
  //   Realm.clearTestState ALLOW_CLEAR_TEST_STATE = true
  //   Realm.clearTestState()
  // }

  return (
    <SafeAreaProvider>
      {/* <TextResultsRealmProvider>
        <ImageResultsRealmProvider> */}
      <RealmProvider schema={[GenerationInfoModel]}>
        <AppNavigator />
      </RealmProvider>
      {/* </ImageResultsRealmProvider>
      </TextResultsRealmProvider> */}
    </SafeAreaProvider>
  )
}

export default Root

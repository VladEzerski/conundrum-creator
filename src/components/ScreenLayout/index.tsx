import React, { FC, PropsWithChildren } from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from './styles'

const ScreenLayout: FC<PropsWithChildren> = props => {
  const { children } = props

  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left', 'top']}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {children}
    </SafeAreaView>
  )
}

export default ScreenLayout

import React, { FC } from 'react'
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import { Button } from '../../components'

import styles from './styles'

const MainScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.topPart}>
        <Text style={styles.text}>Главный экран</Text>
        <View style={styles.btnContainer}>
          <Button
            btnText="Начать"
            onClick={() => {
              Alert.alert('Clicked!')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

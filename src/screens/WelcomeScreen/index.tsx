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

// import { Button } from 'components'
import { Button } from '../../components'

import styles from './styles'

const WelcomeScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.topPart}>
        <Image
          source={require('assets/images/mainIcon.png')}
          style={styles.img}
        />
        <Text style={styles.text}>
          Добро пожаловать в Conundrum Creator - Генератор Ребусов и
          Головоломок!
        </Text>
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

export default WelcomeScreen

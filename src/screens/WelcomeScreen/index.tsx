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
import { NavigationService } from '../../navigation/AppNavigator'

import styles from './styles'

const WelcomeScreen: FC<any> = props => {
  console.log('WelcomeScreen props: ', props)

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
            onClick={() =>
              NavigationService.pushScreen(
                props.componentId,
                'MainScreen',
                'MainScreenName',
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen

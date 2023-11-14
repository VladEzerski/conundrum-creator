import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button, ScreenLayout } from '../../components'

import styles from './styles'

const WelcomeScreen: FC<any> = props => {
  //todo create type for navigation
  const navigation = useNavigation<any>()

  return (
    <ScreenLayout>
      <View style={styles.container}>
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
            onClick={() => navigation.navigate('TextGenerator')}
          />
        </View>
      </View>
    </ScreenLayout>
  )
}

export default WelcomeScreen

import React, { FC } from 'react'
import { Image, Text, View } from 'react-native'

import { SocialLinks } from '../../components'

import styles from './styles'

const AboutAppScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('assets/images/mainIcon.png')}
        style={styles.img}
      />
      <Text style={styles.text}>{'Версия приложения 0.0.1'}</Text>
      <View style={styles.socialContainer}>
        <SocialLinks />
      </View>
    </View>
  )
}

export default AboutAppScreen

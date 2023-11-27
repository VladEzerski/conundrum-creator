import React, { FC } from 'react'
import { View, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './styles'

const SocialLinks: FC = () => {
  const openLink = url => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => openLink('https://github.com/VladEzerski')}>
        <Image
          source={require('assets/images/github.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openLink('https://www.linkedin.com/in/vlad-ezerski-982948158')
        }>
        <Image
          source={require('assets/images/linkedin.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => openLink('https://instagram.com/vlad_ez')}>
        <Image
          source={require('assets/images/instagram.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SocialLinks

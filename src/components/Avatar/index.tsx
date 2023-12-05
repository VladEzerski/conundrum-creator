import React, { FC } from 'react'
import { View, Image } from 'react-native'

import { EmAvatarTypes } from '../../types'

import styles from './styles'

const Avatar: FC<AvatarTypes> = props => {
  const { type } = props

  const imgSrc =
    type === EmAvatarTypes.GPT
      ? require('assets/images/chat-gpt.png')
      : require('assets/images/avatar.png')

  return (
    <View style={styles.circle}>
      <Image source={imgSrc} style={styles.avatarImg} />
    </View>
  )
}

interface AvatarTypes {
  type: EmAvatarTypes
}

export default Avatar

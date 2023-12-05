import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { EmAvatarTypes } from '../../types'
import Avatar from '../Avatar'

import styles from './styles'

const TextResultField: FC<TextResultFieldTypes> = props => {
  const { text, avatarType } = props

  return (
    <View style={styles.textContainer}>
      <Avatar type={avatarType} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

interface TextResultFieldTypes {
  text: string
  avatarType: EmAvatarTypes
}

export default TextResultField

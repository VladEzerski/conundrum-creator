import React, { FC } from 'react'
import { Text, View, Pressable } from 'react-native'

import styles from './styles'

const Button: FC<ButtonTypes> = props => {
  const { btnText, onClick } = props
  return (
    <Pressable style={styles.main} onPress={onClick}>
      <View style={styles.container}>
        <Text style={styles.text}>{btnText || 'Button'}</Text>
      </View>
    </Pressable>
  )
}
export interface ButtonTypes {
  btnText: string
  onClick: (...args: any) => any
}

export default Button

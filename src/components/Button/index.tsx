import React, { FC } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'

import styles from './styles'

const Button: FC<ButtonTypes> = props => {
  const { btnText, isLoading = false, onClick, style } = props
  return (
    <Pressable style={styles.main} onPress={onClick}>
      <View style={[styles.container, style]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>{btnText || 'Button'}</Text>
        )}
      </View>
    </Pressable>
  )
}
export interface ButtonTypes {
  btnText: string
  isLoading?: boolean
  onClick: (...args: any) => any
  style?: any
}

export default Button

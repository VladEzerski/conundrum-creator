import React, { FC } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'

import styles from './styles'

const Button: FC<ButtonTypes> = props => {
  const { btnText, isLoading = false, onClick, style, textStyle } = props
  return (
    <Pressable style={styles.main} onPress={onClick}>
      <View style={[styles.container, style]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.text, textStyle]}>{btnText || 'Button'}</Text>
        )}
      </View>
    </Pressable>
  )
}
export interface ButtonTypes {
  btnText: string
  isLoading?: boolean
  //TODO fix types
  onClick: (...args: any) => any
  style?: any
  textStyle?: any
}

export default Button

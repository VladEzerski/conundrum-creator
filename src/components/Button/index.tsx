import React, { FC } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'

import styles from './styles'

const Button: FC<ButtonTypes> = props => {
  const { btnText, isLoading = false, onClick } = props
  return (
    <Pressable style={styles.main} onPress={onClick}>
      <View style={styles.container}>
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
}

export default Button

import React, { FC } from 'react'
import { View, Pressable, ActivityIndicator, TextInput } from 'react-native'

import { SendIcon } from '../../assets/icons'

import styles from './styles'

const CustomInput: FC<CustomInputTypes> = props => {
  const { inputValue, onChangeText, isLoading, onBtnPress } = props
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={onChangeText}
          editable={!isLoading}
          placeholder="Введи запрос для генерации"
          placeholderTextColor={'#8e8ea0'}
          multiline
        />
        <View style={styles.btnContainer}>
          <Pressable onPress={onBtnPress} disabled={isLoading}>
            {isLoading ? <ActivityIndicator /> : <SendIcon />}
          </Pressable>
        </View>
      </View>
    </View>
  )
}
export interface CustomInputTypes {
  inputValue: string
  onChangeText: (text: string) => void
  isLoading: boolean
  onBtnPress: () => void
}

export default CustomInput

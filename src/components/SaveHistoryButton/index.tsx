import React, { FC, useState } from 'react'
import { Text, Pressable, Alert } from 'react-native'

import styles from './styles'

const SaveHistoryButton: FC<SaveHistoryButtonTypes> = props => {
  const { onPress } = props
  const [isRecordSaved, setIsRecordSaved] = useState(false)

  const handlePress = () => {
    onPress()
    setIsRecordSaved(true)
    Alert.alert('Запись успешно сохранена!')
  }

  if (isRecordSaved) {
    return null
  }

  return (
    <Pressable
      style={styles.btnSave}
      onPress={() => {
        handlePress()
      }}>
      <Text style={styles.text}>{'Хотите сохранить запись в историю?'}</Text>
    </Pressable>
  )
}
export interface SaveHistoryButtonTypes {
  onPress: () => void
}

export default SaveHistoryButton

import React, { FC, useState } from 'react'
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native'

import { Button } from '../../components'

import styles from './styles'

const MainScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputValueChanged = (text: string) => {
    setInputValue(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={styles.topPart}>
        <Text style={styles.text}>Ввод запроса</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline
            numberOfLines={5}
            value={inputValue}
            onChangeText={handleInputValueChanged}
          />
        </View>
        <Text style={styles.text}>Предпросмотр запроса</Text>
        <Text style={styles.additionalText}>{inputValue}</Text>
        <View style={styles.btnContainer}>
          <Button
            btnText="Генерация"
            onClick={() => {
              Alert.alert('Пока недоступно!')
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

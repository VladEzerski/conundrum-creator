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
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { Button } from '../../components'

import styles from './styles'

const MainScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [inputValue, setInputValue] = useState<string>('')

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  console.log('openai: ', openai)

  const handleInputValueChanged = (text: string) => {
    setInputValue(text)
  }

  async function sendRequestToGPT() {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Нужна загадка про ворону' }],
      model: 'gpt-3',
    })

    console.log('Response: ', completion)
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
              // Alert.alert('Пока недоступно!')
              sendRequestToGPT()
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainScreen

import React, { FC, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TextInput,
  ScrollView,
} from 'react-native'
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { Button, ModalView } from '../../components'

import styles from './styles'

const MainScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [inputValue, setInputValue] = useState<string>('')
  const [gptAnswer, setGptAnswer] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isRequsetLoading, setIsRequsetLoading] = useState<boolean>(false)

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const handleInputValueChanged = (text: string) => {
    setInputValue(text)
  }

  const handleCloseModalView = (text: string) => {
    setIsModalVisible(false)
  }

  async function generateImage() {
    try {
      setIsRequsetLoading(true)
      const image = await openai.images.generate({
        prompt: inputValue,
      })

      console.log(image.data)
      setIsRequsetLoading(false)
    } catch (error) {
      console.log('Eror: ', error)
      setIsRequsetLoading(false)
    }
  }

  async function sendRequestToGPT() {
    try {
      setIsRequsetLoading(true)
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: inputValue }],
        model: 'gpt-3.5-turbo',
      })
      console.log('Response: ', completion.choices[0])
      setGptAnswer(completion.choices[0].message.content)
      setIsRequsetLoading(false)
    } catch (error) {
      console.log('Eror: ', error)
      setIsRequsetLoading(false)
    }
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
        <View style={styles.firstBtnContainer}>
          <Button
            btnText="Предпросмотр"
            onClick={() => {
              setIsModalVisible(true)
            }}
          />
        </View>
        <Text style={styles.text}>Результат</Text>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.additionalText}>{gptAnswer}</Text>
        </ScrollView>
        <View style={styles.secBtnContainer}>
          <Button
            btnText="Генерация"
            isLoading={isRequsetLoading}
            onClick={() => {
              generateImage()
            }}
          />
        </View>
      </View>
      {isModalVisible && (
        <ModalView title={'Предпросмотр'} onClose={handleCloseModalView} />
      )}
    </SafeAreaView>
  )
}

export default MainScreen

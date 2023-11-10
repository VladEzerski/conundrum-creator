import React, { FC, useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TextInput,
  ScrollView,
  Image,
} from 'react-native'
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { Button, ModalView } from '../../components'
import { realmTextResults, TextResult } from '../../models/TextResultsModel'

import styles from './styles'

const MainScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [inputValue, setInputValue] = useState<string>('')
  const [gptAnswer, setGptAnswer] = useState<string>('')
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isRequsetLoading, setIsRequsetLoading] = useState<boolean>(false)

  const answers = realmTextResults.objects('TextResults')
  console.log('REALM answers: ', answers)

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const handleInputValueChanged = (text: string) => {
    setInputValue(text)
  }

  const handleCloseModalView = (text: string) => {
    setIsModalVisible(false)
  }

  async function sendRequestToGPT() {
    try {
      setIsRequsetLoading(true)
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: inputValue }],
        model: 'gpt-3.5-turbo',
      })
      console.log('Response: ', completion.choices[0])
      const textResponse = completion.choices[0].message.content
      setGptAnswer(textResponse)

      realmTextResults.write(() => {
        realmTextResults.create<TextResult>('TextResults', {
          request: inputValue,
          response: textResponse,
        })
      })

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
            btnText={'Генерация текста'}
            isLoading={isRequsetLoading}
            onClick={() => {
              sendRequestToGPT()
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

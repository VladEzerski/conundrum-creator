import React, { FC, useCallback, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native'
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { SendIcon } from '../../assets/icons'
import { realmTextResults, TextResult } from '../../models/TextResultsModel'

import styles from './styles'

const TextGeneratorScreen: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [gptQuestion, setGptQuestion] = useState<string>('')
  const [gptAnswer, setGptAnswer] = useState<string>('')
  const [isRequsetLoading, setIsRequsetLoading] = useState<boolean>(false)

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const handleInputValueChanged = (text: string) => {
    if (text.length === 1) {
      setGptQuestion('')
      setGptAnswer('')
    }
    setInputValue(text)
  }

  const handleButtonPressed = useCallback(async () => {
    sendRequestToGPT()
    setGptQuestion(inputValue)
    setInputValue('')
  }, [inputValue])

  const saveToHistory = useCallback(() => {
    try {
      realmTextResults.write(() => {
        realmTextResults.create<TextResult>('TextResults', {
          request: inputValue,
          response: gptAnswer,
        })
      })
      Alert.alert('Запись успешно сохранена!')
    } catch (error) {
      console.error('Realn write eror: ', error)
      Alert.alert(error)
    }
  }, [inputValue, gptAnswer])

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
      setIsRequsetLoading(false)
    } catch (error) {
      console.error('GPT request eror: ', error)
      setIsRequsetLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {gptQuestion && (
        <View style={styles.resultView}>
          <ScrollView>
            <View style={styles.textContainer}>
              <View style={styles.circle}>
                <Text style={styles.title}>Q</Text>
              </View>
              <Text style={styles.text}>{gptQuestion}</Text>
              <Pressable
                style={styles.btnSave}
                onPress={() => {
                  saveToHistory()
                }}>
                <Text style={styles.text}>Save</Text>
              </Pressable>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.circle}>
                <Text style={styles.title}>A</Text>
              </View>
              <Text style={styles.text}>
                {Boolean(gptAnswer) ? gptAnswer : 'Думаю...'}
              </Text>
            </View>
          </ScrollView>
        </View>
      )}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputValueChanged}
            editable={!isRequsetLoading}
            placeholder="Введи запрос для генерации"
            placeholderTextColor={'#8e8ea0'}
            multiline
          />
          <View style={styles.btnContainer}>
            <Pressable
              onPress={() => {
                handleButtonPressed()
              }}>
              {isRequsetLoading ? <ActivityIndicator /> : <SendIcon />}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TextGeneratorScreen

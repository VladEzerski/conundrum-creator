import React, { FC, useCallback, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native'
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { SendIcon } from '../../assets/icons'
import { ScreenLayout } from '../../components'
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
    <ScreenLayout>
      <View style={styles.container}>
        {gptQuestion && (
          <View style={styles.resultView}>
            <View style={styles.textContainer}>
              <View style={styles.circle}>
                <Text style={styles.title}>Q</Text>
              </View>
              <Text style={styles.text}>{gptQuestion}</Text>
            </View>
            <View style={styles.textContainer}>
              <View style={styles.circle}>
                <Text style={styles.title}>A</Text>
              </View>
              <Text style={styles.text}>
                {Boolean(gptAnswer) ? gptAnswer : 'Думаю...'}
              </Text>
            </View>
          </View>
        )}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputValueChanged}
              multiline
              numberOfLines={5}
              editable={!isRequsetLoading}
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
    </ScreenLayout>
  )
}

export default TextGeneratorScreen

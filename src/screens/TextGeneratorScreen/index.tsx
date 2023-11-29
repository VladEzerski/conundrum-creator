import React, { FC, useCallback, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import OpenAI from 'openai'
import { useRealm } from '@realm/react'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { GenerationInfoModel } from '../../models/GenerationInfoModel'
import { SaveHistoryButton, CustomInput } from '../../components'

import styles from './styles'

const TextGeneratorScreen: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [gptQuestion, setGptQuestion] = useState<string>('')
  const [gptAnswer, setGptAnswer] = useState<string>('')
  const [isRequestLoading, setIsRequestLoading] = useState<boolean>(false)
  const realm = useRealm()

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const handleInputValueChanged = (text: string) => {
    if (text.length === 1) {
      setGptQuestion('')
      setGptAnswer('')
    }
    setInputValue(text)
  }

  const handleButtonPressed = useCallback(() => {
    sendRequestToGPT()
    setGptQuestion(inputValue)
    setInputValue('')
  }, [inputValue])

  const saveToHistory = () => {
    realm.write(() => {
      realm.create<GenerationInfoModel>('GenerationInfo', {
        type: 'Text',
        request: gptQuestion,
        response: gptAnswer,
      })
    })
  }

  async function sendRequestToGPT() {
    try {
      setIsRequestLoading(true)
      const completion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: inputValue }],
        model: 'gpt-3.5-turbo',
      })
      console.log('Response: ', completion.choices[0])
      const textResponse = completion.choices[0].message.content
      setGptAnswer(textResponse)
      setIsRequestLoading(false)
    } catch (error) {
      console.error('GPT request eror: ', error)
      setIsRequestLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      {gptQuestion && (
        <View style={styles.resultView}>
          {gptAnswer && <SaveHistoryButton onPress={saveToHistory} />}
          <ScrollView>
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
          </ScrollView>
        </View>
      )}
      <CustomInput
        inputValue={inputValue}
        onChangeText={handleInputValueChanged}
        isLoading={isRequestLoading}
        onBtnPress={handleButtonPressed}
      />
    </View>
  )
}

export default TextGeneratorScreen

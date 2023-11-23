import React, { FC, useState, useCallback } from 'react'
import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import OpenAI from 'openai'
import { useRealm } from '@realm/react'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { SendIcon } from '../../assets/icons'
import { GenerationInfoModel } from '../../models/GenerationInfoModel'

import styles from './styles'

const ImageGeneratorScreen: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [sendedRequest, setSendedRequest] = useState<string>('')
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null,
  )
  const [isRequsetLoading, setIsRequsetLoading] = useState<boolean>(false)
  const realm = useRealm()

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const hasText = Boolean(generatedImageUrl) || isRequsetLoading

  const handleInputValueChanged = (text: string) => {
    if (text.length === 1) {
      setSendedRequest('')
      setGeneratedImageUrl(null)
    }
    setInputValue(text)
  }

  const handleButtonPressed = useCallback(async () => {
    generateImage()
    setSendedRequest(inputValue)
    setInputValue('')
  }, [inputValue])

  const saveToHistory = () => {
    realm.write(() => {
      realm.create<GenerationInfoModel>('GenerationInfo', {
        type: 'Image',
        request: sendedRequest,
        response: generatedImageUrl,
      })
    })
    Alert.alert('Запись успешно сохранена!')
  }

  async function generateImage() {
    try {
      setIsRequsetLoading(true)
      const image = await openai.images.generate({
        prompt: inputValue,
      })

      console.log(image.data)
      setGeneratedImageUrl(image.data[0].url)
      setIsRequsetLoading(false)
    } catch (error) {
      console.log('Eror: ', error)
      setIsRequsetLoading(false)
    }
  }

  console.log('IMAGE: ', generatedImageUrl)

  return (
    <View style={styles.container}>
      {hasText && (
        <View style={styles.resultView}>
          <View style={styles.textContainer}>
            <View style={styles.circle}>
              <Text style={styles.title}>A</Text>
            </View>
            <Text style={styles.text}>
              {isRequsetLoading
                ? 'Думаю...'
                : `Вот что у меня получилось по запросу "${sendedRequest}":`}
            </Text>
            <Pressable
              style={styles.btnSave}
              onPress={() => {
                saveToHistory()
              }}>
              <Text style={styles.text}>Save</Text>
            </Pressable>
          </View>
          {generatedImageUrl && (
            <View style={styles.imgContainer}>
              <View style={styles.loader}>
                <Text style={styles.text}>{'Загружаю изображение...'}</Text>
                <ActivityIndicator />
              </View>
              <FastImage
                style={styles.img}
                source={{
                  uri: generatedImageUrl,
                  priority: FastImage.priority.high,
                }}
              />
            </View>
          )}
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

export default ImageGeneratorScreen

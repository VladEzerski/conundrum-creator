import React, { FC, useState, useCallback } from 'react'
import {
  Text,
  View,
  TextInput,
  Pressable,
  ActivityIndicator,
  Image,
} from 'react-native'
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { SendIcon } from '../../assets/icons'
import { ScreenLayout } from '../../components'

import styles from './styles'

const ImageGeneratorScreen: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [isRequsetLoading, setIsRequsetLoading] = useState<boolean>(false)

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const hasText = Boolean(generatedImage) || isRequsetLoading

  const handleInputValueChanged = (text: string) => {
    if (text.length === 1) {
      setGeneratedImage(null)
    }
    setInputValue(text)
  }

  const handleButtonPressed = useCallback(async () => {
    generateImage()
    setInputValue('')
  }, [inputValue])

  async function generateImage() {
    try {
      setIsRequsetLoading(true)
      const image = await openai.images.generate({
        prompt: inputValue,
      })

      console.log(image.data)
      setGeneratedImage(image.data[0].url)
      setIsRequsetLoading(false)
    } catch (error) {
      console.log('Eror: ', error)
      setIsRequsetLoading(false)
    }
  }

  console.log('IMAGE: ', generatedImage)

  return (
    <ScreenLayout>
      <View style={styles.container}>
        {hasText && (
          <View style={styles.resultView}>
            <View style={styles.textContainer}>
              <View style={styles.circle}>
                <Text style={styles.title}>A</Text>
              </View>
              <Text style={styles.text}>
                {isRequsetLoading ? 'Думаю...' : 'Вот что у меня получилось:'}
              </Text>
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{
                  uri: generatedImage,
                }}
                style={styles.img}
              />
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

export default ImageGeneratorScreen

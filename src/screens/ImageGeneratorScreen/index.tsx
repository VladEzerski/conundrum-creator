import React, { FC, useState } from 'react'
import { SafeAreaView, Text, View, TextInput, Image } from 'react-native'
import OpenAI from 'openai'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { Button, ModalView } from '../../components'

import styles from './styles'

const ImageGeneratorScreen: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
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
      setGeneratedImage(image.data[0].url)
      setIsRequsetLoading(false)
    } catch (error) {
      console.log('Eror: ', error)
      setIsRequsetLoading(false)
    }
  }

  console.log('IMAGE: ', generatedImage)

  return (
    <View style={styles.container}>
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
      <View style={[styles.scrollView, { height: 250 }]}>
        <Image
          source={{
            uri: generatedImage,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.secBtnContainer}>
        <Button
          btnText={'Генерация изображения'}
          isLoading={isRequsetLoading}
          onClick={() => {
            generateImage()
          }}
        />
      </View>
      {isModalVisible && (
        <ModalView title={'Предпросмотр'} onClose={handleCloseModalView} />
      )}
    </View>
  )
}

export default ImageGeneratorScreen

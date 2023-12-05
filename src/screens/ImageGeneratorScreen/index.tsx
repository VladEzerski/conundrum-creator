import React, { FC, useState, useCallback } from 'react'
import { Text, View, ActivityIndicator, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import OpenAI from 'openai'
import { useRealm } from '@realm/react'

import { REACT_APP_OPENAI_API_KEY } from '@env'

import { GenerationInfoModel } from '../../models/GenerationInfoModel'
import {
  SaveHistoryButton,
  CustomInput,
  TextResultField,
} from '../../components'
import { EmAvatarTypes } from '../../types'

import styles from './styles'

const ImageGeneratorScreen: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [sendedRequest, setSendedRequest] = useState('')
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null,
  )
  const [isRequestLoading, setIsRequestLoading] = useState(false)
  const realm = useRealm()

  const openai = new OpenAI({ apiKey: REACT_APP_OPENAI_API_KEY })

  const hasText = Boolean(generatedImageUrl) || isRequestLoading

  const handleInputValueChanged = (text: string) => {
    if (text.length === 1) {
      setSendedRequest('')
      setGeneratedImageUrl(null)
    }
    setInputValue(text)
  }

  const handlePressedInputBtn = useCallback(async () => {
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
  }

  async function generateImage() {
    try {
      setIsRequestLoading(true)
      const image = await openai.images.generate({
        prompt: inputValue,
      })

      console.log(image.data)
      setGeneratedImageUrl(image.data[0].url)
      setIsRequestLoading(false)
    } catch (error) {
      console.log('Eror: ', error)
      setIsRequestLoading(false)
    }
  }

  console.log('IMAGE: ', generatedImageUrl)

  return (
    <View style={styles.container}>
      {hasText && (
        <View style={styles.resultView}>
          {generatedImageUrl && sendedRequest && (
            <SaveHistoryButton onPress={saveToHistory} />
          )}
          <TextResultField
            text={
              isRequestLoading
                ? 'Думаю...'
                : `Вот что у меня получилось по запросу "${sendedRequest}":`
            }
            avatarType={EmAvatarTypes.GPT}
          />
          {generatedImageUrl && (
            <View style={styles.imgContainer}>
              <View style={styles.loaderContainer}>
                <Text style={styles.text}>{'Загружаю изображение...'}</Text>
                <ActivityIndicator style={styles.loader} />
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
      <CustomInput
        inputValue={inputValue}
        onChangeText={handleInputValueChanged}
        isLoading={isRequestLoading}
        onBtnPress={handlePressedInputBtn}
      />
    </View>
  )
}

export default ImageGeneratorScreen

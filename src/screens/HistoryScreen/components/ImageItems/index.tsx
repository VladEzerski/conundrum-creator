import React, { FC, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { ModalView } from '../../../../components'

import { HistoryItemsType } from '../../index'

import styles from './styles'

const ImageItems: FC<ImageItemsProps> = props => {
  const { items } = props
  console.log('History ImageItems: ', items)

  const [selectedItem, setSelectedItem] = useState<HistoryItemsType | null>(
    null,
  )

  return (
    <ScrollView>
      {items.map((item, index) => {
        return (
          <Pressable
            key={`a${index}`}
            style={styles.container}
            onPress={() => setSelectedItem(item)}>
            <Text style={styles.title}>{item.request}</Text>
            <Text style={styles.description}>
              {'См. сгенерированное изображение...'}
            </Text>
          </Pressable>
        )
      })}
      {selectedItem && (
        <ModalView
          title={'Детали генерации:'}
          onClose={() => setSelectedItem(null)}>
          <Text style={styles.titleModal}>{selectedItem.request}</Text>
          <View style={styles.imgContainer}>
            <FastImage
              style={styles.img}
              source={{
                uri: selectedItem.response,
                priority: FastImage.priority.high,
              }}
            />
          </View>
        </ModalView>
      )}
    </ScrollView>
  )
}

interface ImageItemsProps {
  items: HistoryItemsType[]
}

export default ImageItems

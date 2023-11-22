import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { HistoryItemsType } from '../../index'

import styles from './styles'

const ImageItems: FC<ImageItemsProps> = props => {
  const { items } = props
  console.log('History ImageItems: ', items)

  return (
    <ScrollView>
      {items.map((item, index) => {
        return (
          <View key={`a${index}`} style={styles.container}>
            <Text style={styles.title}>{item.request}</Text>
            <Text style={styles.description}>{item.response}</Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

interface ImageItemsProps {
  items: HistoryItemsType[]
}

export default ImageItems

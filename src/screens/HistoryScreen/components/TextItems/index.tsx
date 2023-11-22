import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { HistoryItemsType } from '../../index'

import styles from './styles'

const TextItems: FC<TextItemsProps> = props => {
  const { items } = props
  console.log('History TextItems: ', items)

  return (
    <ScrollView>
      {items?.map((item, index) => {
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

interface TextItemsProps {
  items: HistoryItemsType[]
}

export default TextItems

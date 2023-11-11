import React, { FC, Fragment, useCallback, useEffect } from 'react'
import { ScrollView, Text, View } from 'react-native'

import {
  realmTextResults,
  TextResult,
} from '../../../../models/TextResultsModel'

import styles from './styles'

const TextItems: FC = props => {
  const textHistory = realmTextResults.objects('TextResults')
  console.log('REALM textHistory: ', textHistory)

  return (
    //TODO change to FlatList
    <ScrollView>
      {textHistory.map((item, index) => {
        console.log('Item: ', item)
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

export default TextItems

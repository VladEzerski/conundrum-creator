import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useQuery } from '@realm/react'

import { Button } from '../../../../components'

import {
  TextResultsModel,
  realmTextResults,
} from '../../../../models/TextResultsModel'

import styles from './styles'

const TextItems: FC = () => {
  // const textResultsQuery = useQuery(TextResultsModel, results => {
  //   return results
  // })

  const textHistory = realmTextResults.objects<TextResultsModel>('TextResults')
  console.log('REALM textHistory: ', textHistory)

  return (
    <ScrollView>
      {textHistory?.map((item, index) => {
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

import React, { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useQuery } from '@realm/react'

import { Button } from '../../../../components'

import {
  ImageResultsModel,
  realmImageResults,
} from '../../../../models/ImageResultsModel'

import styles from './styles'

const ImageItems: FC = () => {
  // const imageResultsQuery = useQuery(ImageResultsModel, results => {
  //   return results
  // })

  const imageHistory =
    realmImageResults.objects<ImageResultsModel>('TextResults')
  console.log('REALM textHistory: ', imageHistory)

  return (
    <ScrollView>
      {imageHistory.map((item, index) => {
        console.log('Item: ', item)
        return (
          <View key={`a${index}`} style={styles.container}>
            <Text style={styles.title}>{item.task}</Text>
            <Text style={styles.description}>{item.imageUrl}</Text>
          </View>
        )
      })}
    </ScrollView>
  )
}

export default ImageItems

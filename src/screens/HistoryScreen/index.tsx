import React, { FC, useCallback, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'
import { useQuery, useRealm } from '@realm/react'

import { Button } from '../../components'

import TextItems from './components/TextItems'
import ImageItems from './components/ImageItems'

import {
  GenerationInfoModel,
  GenerationInfoModelPropertiesType,
} from '../../models/GenerationInfoModel'

import styles from './styles'

const { width } = Dimensions.get('window')

export type HistoryItemsType = Omit<GenerationInfoModelPropertiesType, 'type'>

const HistoryScreen: FC = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: '0', title: 'Текстовые запросы' },
    { key: '1', title: 'Генерация изображений' },
  ])
  const realm = useRealm()

  const generationInfoQuery = useQuery(GenerationInfoModel, results => {
    console.log('!!! results: ', results)
    return results.sorted('timestamp', true)
  })
  console.log('History generationInfoQuery: ', generationInfoQuery)

  const textHistory: HistoryItemsType[] = []
  const imageHistory: HistoryItemsType[] = []

  generationInfoQuery.forEach(info => {
    const { request, response, timestamp, type } = info
    if (type === 'Text') {
      textHistory.push({ request, response, timestamp })
    }
    if (type === 'Image') {
      imageHistory.push({ request, response, timestamp })
    }
  })

  const clearDatabase = () => {
    realm.write(() => {
      realm.deleteAll()
    })
  }

  const renderScene = ({ route }) => {
    switch (route.key) {
      case '0':
        return <TextItems items={textHistory} />
      case '1':
        return <ImageItems items={imageHistory} />
    }
  }

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#ffffff' }}
        style={{
          backgroundColor: 'rgb(64, 65, 79)',
          marginBottom: 16,
        }}
        activeColor={'#ffffff'}
        labelStyle={{
          textTransform: 'capitalize',
          fontSize: 16,
          color: '#808080',
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width }}
      />
      <View style={styles.btnContainer}>
        <Button
          style={styles.clearBtn}
          textStyle={styles.clearBtnText}
          btnText="Очистить Историю"
          onClick={clearDatabase}
        />
      </View>
    </View>
  )
}

export default HistoryScreen

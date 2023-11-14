import React, { FC, useCallback } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'

import { ScreenLayout } from '../../components'

import TextItems from './components/TextItems'

import styles from './styles'

const { width } = Dimensions.get('window')

const HistoryScreen: FC = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: '0', title: 'Text Generations' },
    { key: '1', title: 'Image Generations' },
  ])

  const renderScene = useCallback(({ route }) => {
    switch (route.key) {
      case '0':
        return <TextItems />
      case '1':
        return <Text>Second</Text>
    }
  }, [])

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: 'black' }}
        style={{
          backgroundColor: 'white',
          margin: 16,
        }}
        activeColor={'black'}
        labelStyle={{
          textTransform: 'capitalize',
          fontSize: 16,
          color: 'gray',
        }}
      />
    )
  }

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width }}
        />
      </View>
    </ScreenLayout>
  )
}

export default HistoryScreen

import React, { FC, useCallback } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'

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
    </View>
  )
}

export default HistoryScreen

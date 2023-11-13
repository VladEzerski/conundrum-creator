import React, { FC, useCallback } from 'react'
import { View, Text, useColorScheme, Dimensions } from 'react-native'
import { TabView } from 'react-native-tab-view'

import TextItems from './components/TextItems'

import styles from './styles'

const { width } = Dimensions.get('window')

const HistoryScreen: FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

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

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
      />
    </View>
  )
}

export default HistoryScreen

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type { PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'

import { WelcomeScreen } from './src/screens'

type SectionProps = PropsWithChildren<{
  title: string
}>

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return <WelcomeScreen />
}

export default App

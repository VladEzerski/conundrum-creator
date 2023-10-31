/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import type { PropsWithChildren } from 'react'
import { useColorScheme } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { WelcomeScreen } from './src/screens'

type SectionProps = PropsWithChildren<{
  title: string
}>

function App() {
  const isDarkMode = useColorScheme() === 'dark'

  return null
}

export default App

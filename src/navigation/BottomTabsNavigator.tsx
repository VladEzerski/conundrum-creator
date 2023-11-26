import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeIcon, ChatIcon, ImageChatIcon, HistoryIcon } from '../assets/icons'
import {
  TextGeneratorScreen,
  ImageGeneratorScreen,
  HistoryScreen,
} from '../screens'

import DrawerNavigator from './DrawerNavigator'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const navigatorDefaultOptions = {
  headerShown: false,
  tabBarStyle: {
    backgroundColor: 'rgb(64, 65, 79)',
    color: '#ffffff',
  },
  tabBarActiveTintColor: '#ffffff',
  tabBarInactiveTintColor: '#808080',
}

const screenCommonOptions = {
  headerShown: true,
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: 'rgb(64, 65, 79)',
  },
}

const BottomTabsNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={navigatorDefaultOptions}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarLabel: 'Домой',
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="TextGenerator"
        component={TextGeneratorScreen}
        options={{
          ...screenCommonOptions,
          tabBarLabel: 'Текст',
          tabBarIcon: () => <ChatIcon />,
          headerTitle: 'Генератор Текста',
        }}
      />
      <Tab.Screen
        name="ImageGenerator"
        component={ImageGeneratorScreen}
        options={{
          ...screenCommonOptions,
          tabBarLabel: 'Изображения',
          tabBarIcon: () => <ImageChatIcon />,
          headerTitle: 'Генератор Изображений',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          ...screenCommonOptions,
          tabBarLabel: 'История',
          tabBarIcon: () => <HistoryIcon />,
          headerTitle: 'История Запросов',
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigator

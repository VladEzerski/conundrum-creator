import 'react-native-url-polyfill/auto'
import { Navigation } from 'react-native-navigation'

import { NavigationService } from './src/navigation/AppNavigator'

NavigationService.registerScreens()
NavigationService.setDefaultOptions()
NavigationService.setNavigationTree()

/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Navigation } from 'react-native-navigation'
import { WelcomeScreen } from './src/screens'

// AppRegistry.registerComponent(appName, () => App);


Navigation.registerComponent(`${appName}.WelcomeScreen`, () => WelcomeScreen)
  Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
});
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: `${appName}.WelcomeScreen`,
              },
            },
          ],
        },
      },
    })
  })

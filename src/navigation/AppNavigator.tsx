import { Navigation } from 'react-native-navigation'

import { WelcomeScreen, MainScreen } from '../screens'

class NavigationServiceClass {
  public registerScreens() {
    Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen)
    Navigation.registerComponent('MainScreen', () => MainScreen)
  }

  public pushScreen(
    componentId: string,
    screenName: string,
    topBarTitle?: string,
  ) {
    Navigation.push(componentId, {
      component: {
        name: screenName,
        options: {
          topBar: {
            title: {
              text: topBarTitle,
            },
          },
        },
      },
    })
  }

  public setDefaultOptions() {
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: '#4d089a',
      },
      topBar: {
        title: {
          color: 'white',
        },
        backButton: {
          color: 'white',
        },
        background: {
          color: '#4d089a',
        },
      },
    })
  }
}

const NavigationService = new NavigationServiceClass()

export { NavigationService }

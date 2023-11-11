import { Navigation } from 'react-native-navigation'

import {
  WelcomeScreen,
  MainScreen,
  ImageGeneratorScreen,
  HistoryScreen,
} from '../screens'

class NavigationServiceClass {
  public registerScreens() {
    Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen)
    Navigation.registerComponent('MainScreen', () => MainScreen)
    Navigation.registerComponent(
      'ImageGeneratorScreen',
      () => ImageGeneratorScreen,
    )
    Navigation.registerComponent('HistoryScreen', () => HistoryScreen)
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

  public navigateToBottomTab(componentId: string) {
    Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
      bottomTabs: {
        currentTabId: componentId,
      },
    })
  }

  public setNavigationTree() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        // root: {
        //   stack: {
        //     children: [
        //       {
        //         component: {
        //           name: 'WelcomeScreen',
        //         },
        //       },
        //     ],
        //   },
        // },
        root: {
          bottomTabs: {
            id: 'BOTTOM_TABS_LAYOUT',
            children: [
              {
                stack: {
                  id: 'WELCOME_TAB',
                  children: [
                    {
                      component: {
                        id: 'WELCOME_SCREEN',
                        name: 'WelcomeScreen',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: {
                        //only iOS
                        system: 'house',
                      },
                      text: 'Home',
                    },
                  },
                },
              },
              {
                stack: {
                  id: 'MAIN_TAB',
                  children: [
                    {
                      component: {
                        id: 'MAIN_SCREEN',
                        name: 'MainScreen',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: {
                        //only iOS
                        system: 'text.bubble',
                      },
                      text: 'Text Generator',
                    },
                  },
                },
              },
              {
                stack: {
                  id: 'IMAGE_TAB',
                  children: [
                    {
                      component: {
                        id: 'IMAGE_SCREEN',
                        name: 'ImageGeneratorScreen',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: {
                        //only iOS
                        system: 'photo',
                      },
                      text: 'Image Generator',
                    },
                  },
                },
              },
              {
                stack: {
                  id: 'HISTORY_TAB',
                  children: [
                    {
                      component: {
                        id: 'HISTORY_SCREEN',
                        name: 'HistoryScreen',
                      },
                    },
                  ],
                  options: {
                    bottomTab: {
                      icon: {
                        //only iOS
                        system: 'clock.fill',
                      },
                      text: 'History',
                    },
                  },
                },
              },
            ],
          },
        },
      })
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
      bottomTabs: {
        backgroundColor: '#a3c2da',
      },
      bottomTab: {
        iconColor: 'grey',
        selectedIconColor: '#61ace5',
      },
    })
  }
}

const NavigationService = new NavigationServiceClass()

export { NavigationService }

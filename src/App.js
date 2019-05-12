import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { PixelRatio } from 'react-native';

import SplashScreen from './pages/splash/SplashScreen';
import MainScreen from './pages/main/MainScreen';
import DrawerNavigationScreen from './pages/drawer_navigation/DrawerNavigationScreen';
import DrawerMaterialScreen from './pages/drawer_material/DrawerMaterialScreen';
import TabsNavigationScreen from './pages/tabs_navigation/TabsNavigationScreen';
import TabsNavigationMaterialScreen from './pages/tabs_navigation_material/TabsNavigationMaterialScreen';
import TabsMaterialScreen from './pages/tabs_material/TabsMaterialScreen';
import SettingsScreen from './pages/settings/SettingsScreen';
import { getData, LANGUAGE_KEY } from './utils/AsyncStorageUtils';
import { setLocale, defaultLocale } from '../locales/i18n';

// Setup app stack for opening inner app screens after splash as stack.
const AppStack = createStackNavigator(
  {
    Main: MainScreen,
    DrawerNavigation: DrawerNavigationScreen,
    DrawerMaterial: DrawerMaterialScreen,
    TabsNavigation: TabsNavigationScreen,
    TabsNavigationMaterial: TabsNavigationMaterialScreen,
    TabsMaterial: TabsMaterialScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

// Setup up the app navigator as switch navigator for closing splash after being shown.
const AppNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    App: AppStack,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

// Create app container using the created app navigator.
const AppContainer = createAppContainer(AppNavigator);

// Create app theme.
const uiTheme = {
  palette: {
    primaryColor: COLOR.blueGrey500,
    accentColor: COLOR.deepOrange300,
    primaryTextColor: COLOR.white,
    secondaryTextColor: COLOR.white,
    disabledTextColor: 'rgba(255, 255, 255, 0.26)',
    activeIcon: COLOR.white,
    inactiveIcon: 'rgba(255, 255, 255, 0.26)',
  },
  toolbar: {
    centerElementContainer: {
      marginRight: PixelRatio.roundToNearestPixel(16),
      marginTop: PixelRatio.roundToNearestPixel(8),
      marginBottom: PixelRatio.roundToNearestPixel(8),
    },
    titleText: {
      textAlign: 'center',
    },
  },
};

export default function App() {
  // Get user language.
  // If no language or error set default language.
  // Else set the user language.
  getData(LANGUAGE_KEY).then((userLanguage) => {
    if (userLanguage) {
      setLocale(userLanguage);
    } else {
      setLocale(defaultLocale);
    }
  });

  // Return the previously created app container.
  return (
    <ThemeContext.Provider value={getTheme(uiTheme)}>
      <AppContainer />
    </ThemeContext.Provider>
  );
}

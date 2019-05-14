import React from 'react';
import {
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { PixelRatio } from 'react-native';

import SplashScreen from './pages/splash/SplashScreen';
import MainScreen from './pages/main/MainScreen';
import DrawerNavigationScreenEn from './pages/drawer/en/DrawerNavigationScreen';
import DrawerNavigationScreenAr from './pages/drawer/ar/DrawerNavigationScreen';
import DrawerScreen1En from './pages/drawer/en/DrawerScreen1';
import DrawerScreen1Ar from './pages/drawer/ar/DrawerScreen1';
import DrawerScreen2En from './pages/drawer/en/DrawerScreen2';
import DrawerScreen2Ar from './pages/drawer/ar/DrawerScreen2';
import DrawerContentComponent from './pages/drawer/DrawerContentComponent';
import TabsNavigationScreenEn from './pages/tabs/en/TabsNavigationScreen';
import TabsNavigationScreenAr from './pages/tabs/ar/TabsNavigationScreen';
import Tabs1En from './pages/tabs/en/Tabs1';
import Tabs1Ar from './pages/tabs/ar/Tabs1';
import Tabs2En from './pages/tabs/en/Tabs2';
import Tabs2Ar from './pages/tabs/ar/Tabs2';
import TabsMaterialScreen from './pages/tabs_material/TabsMaterialScreen';
import SettingsScreen from './pages/settings/SettingsScreen';
import { getData, LANGUAGE_KEY } from './utils/AsyncStorageUtils';
import { setLocale, defaultLocale } from '../locales/i18n';

// Content options for drawer navigator.
const contentOptions = {
  activeTintColor: COLOR.deepOrange300,
  inactiveTintColor: COLOR.blueGrey500,
};

// Drawer left navigator.
const DrawerNavigatorLeft = createDrawerNavigator(
  {
    DrawerNavigation: DrawerNavigationScreenEn,
    Drawer1: DrawerScreen1En,
    Drawer2: DrawerScreen2En,
  },
  {
    contentComponent: DrawerContentComponent,
    drawerPosition: 'left',
    contentOptions,
  },
);

// Drawer right navigator.
const DrawerNavigatorRight = createDrawerNavigator(
  {
    DrawerNavigationAr: DrawerNavigationScreenAr,
    Drawer1: DrawerScreen1Ar,
    Drawer2: DrawerScreen2Ar,
  },
  {
    contentComponent: DrawerContentComponent,
    drawerPosition: 'right',
    contentOptions: {
      ...contentOptions,
      ...{
        itemsContainerStyle: {
          transform: [{ rotateY: '180deg' }],
        },
        labelStyle: {
          transform: [{ rotateY: '180deg' }],
        },
      },
    },
  },
);

// Tab bar options for bottom tab navigator.
const tabBarOptions = {
  activeTintColor: COLOR.deepOrange300,
  inactiveTintColor: COLOR.blueGrey500,
};

// Bottom tab navigator for English.
const BottomTabNavigatorEn = createBottomTabNavigator(
  {
    TabsNavigation: TabsNavigationScreenEn,
    Tab1: Tabs1En,
    Tab2: Tabs2En,
    Tab3: Tabs1En,
    Tab4: Tabs2En,
    Tab5: Tabs1En,
    Tab6: Tabs2En,
  },
  { tabBarOptions },
);

// Bottom tab navigator for Arabic.
const BottomTabNavigatorAr = createBottomTabNavigator(
  {
    TabsNavigation: TabsNavigationScreenAr,
    Tab1: Tabs1Ar,
    Tab2: Tabs2Ar,
    Tab3: Tabs1Ar,
    Tab4: Tabs2Ar,
    Tab5: Tabs1Ar,
    Tab6: Tabs2Ar,
  },
  {
    tabBarOptions: {
      ...tabBarOptions,
      ...{
        style: {
          transform: [{ rotateY: '180deg' }],
        },
        labelStyle: {
          transform: [{ rotateY: '180deg' }],
        },
      },
    },
  },
);

const barStyle = { backgroundColor: COLOR.blueGrey500 };

// Tab bar options for material bottom tab navigator.
const MaterialBottomTabNavigatorConfig = {
  activeColor: COLOR.white,
  inactiveColor: 'rgba(255, 255, 255, 0.26)',
  barStyle,
};

const MaterialBottomTabNavigatorEn = createMaterialBottomTabNavigator(
  {
    TabsNavigation: TabsNavigationScreenEn,
    Tab1: Tabs1En,
    Tab2: Tabs2En,
    Tab3: Tabs1En,
    Tab4: Tabs2En,
    Tab5: Tabs1En,
    Tab6: Tabs2En,
  },
  MaterialBottomTabNavigatorConfig,
);

const MaterialBottomTabNavigatorAr = createMaterialBottomTabNavigator(
  {
    TabsNavigation: TabsNavigationScreenAr,
    Tab1: Tabs1Ar,
    Tab2: Tabs2Ar,
    Tab3: Tabs1Ar,
    Tab4: Tabs2Ar,
    Tab5: Tabs1Ar,
    Tab6: Tabs2Ar,
  },
  {
    ...MaterialBottomTabNavigatorConfig,
    ...{
      barStyle: {
        ...barStyle,
        ...{
          transform: [{ rotateY: '180deg' }],
        },
      },
    },
  },
);

// Setup app stack for opening inner app screens after splash as stack.
const AppStack = createStackNavigator(
  {
    Main: MainScreen,
    DrawerNavigationLeft: DrawerNavigatorLeft,
    DrawerNavigationRight: DrawerNavigatorRight,
    TabsNavigationAr: BottomTabNavigatorAr,
    TabsNavigationEn: BottomTabNavigatorEn,
    TabsNavigationMaterialEn: MaterialBottomTabNavigatorEn,
    TabsNavigationMaterialAr: MaterialBottomTabNavigatorAr,
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

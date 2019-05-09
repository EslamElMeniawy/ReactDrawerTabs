import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainScreen from './pages/main/MainScreen';
import DrawerNavigationScreen from './pages/drawer_navigation/DrawerNavigationScreen';
import DrawerMaterialScreen from './pages/drawer_material/DrawerMaterialScreen';
import TabsNavigationScreen from './pages/tabs_navigation/TabsNavigationScreen';
import TabsNavigationMaterialScreen from './pages/tabs_navigation_material/TabsNavigationMaterialScreen';
import TabsMaterialScreen from './pages/tabs_material/TabsMaterialScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    DrawerNavigation: DrawerNavigationScreen,
    DrawerMaterial: DrawerMaterialScreen,
    TabsNavigation: TabsNavigationScreen,
    TabsNavigationMaterial: TabsNavigationMaterialScreen,
    TabsMaterial: TabsMaterialScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}

import React from 'react';
import { Icon } from 'react-native-material-ui';

import DrawerNavigationScreen from './DrawerNavigationScreen';

export default class DrawerNavigationScreenAr extends DrawerNavigationScreen {
  static navigationOptions = {
    drawerLabel: 'Drawer Navigation',
    // eslint-disable-next-line react/prop-types
    drawerIcon: ({ tintColor }) => <Icon name="menu" color={tintColor} size={24} />,
  };
}

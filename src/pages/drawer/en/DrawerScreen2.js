import React from 'react';
import { Icon } from 'react-native-material-ui';

import DrawerScreen2 from '../DrawerScreen2';

export default class DrawerScreen2En extends DrawerScreen2 {
  static navigationOptions = {
    drawerLabel: 'Drawer Item 2',
    // eslint-disable-next-line react/prop-types
    drawerIcon: ({ tintColor }) => <Icon name="alarm-on" color={tintColor} size={24} />,
  };
}

import React from 'react';
import { Icon } from 'react-native-material-ui';

import DrawerScreen1 from '../DrawerScreen1';

export default class DrawerScreen1Ar extends DrawerScreen1 {
  static navigationOptions = {
    drawerLabel: 'عنصر جانبي ١',
    // eslint-disable-next-line react/prop-types
    drawerIcon: ({ tintColor }) => <Icon name="alarm-off" color={tintColor} size={24} />,
  };
}

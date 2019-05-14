import React from 'react';
import { Icon } from 'react-native-material-ui';

import DrawerScreen2 from '../DrawerScreen2';

export default class DrawerScreen2Ar extends DrawerScreen2 {
  static navigationOptions = {
    drawerLabel: 'عنصر جانبي ٢',
    // eslint-disable-next-line react/prop-types
    drawerIcon: ({ tintColor }) => <Icon name="alarm-on" color={tintColor} size={24} />,
  };
}

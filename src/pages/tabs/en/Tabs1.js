import React from 'react';
import { Icon } from 'react-native-material-ui';

import Tabs1 from '../Tabs1';

export default class Tabs1Ar extends Tabs1 {
  static navigationOptions = {
    tabBarLabel: 'Tab 1',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ tintColor }) => <Icon name="alarm-off" color={tintColor} size={24} />,
  };
}

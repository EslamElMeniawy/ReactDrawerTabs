import React from 'react';
import { Icon } from 'react-native-material-ui';

import Tabs2 from '../Tabs2';

export default class Tabs2En extends Tabs2 {
  static navigationOptions = {
    tabBarLabel: 'تاب ٢',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ tintColor }) => <Icon name="alarm-on" color={tintColor} size={24} />,
  };
}

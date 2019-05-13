import React from 'react';
import { Icon } from 'react-native-material-ui';

import TabsNavigationScreen from './TabsNavigationScreen';

export default class TabsNavigationScreenEn extends TabsNavigationScreen {
  static navigationOptions = {
    tabBarLabel: 'Tabs Navigation',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ tintColor }) => <Icon name="tab" color={tintColor} size={24} />,
  };
}

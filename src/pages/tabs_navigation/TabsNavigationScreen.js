import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { strings } from '../../../locales/i18n';

export default function TabsNavigationScreen() {
  return (
    <SafeAreaView>
      <Text>{strings('tabs_navigation')}</Text>
    </SafeAreaView>
  );
}

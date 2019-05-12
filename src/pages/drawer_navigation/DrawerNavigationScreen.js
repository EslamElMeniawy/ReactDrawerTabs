import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { strings } from '../../../locales/i18n';

export default function DrawerNavigationScreen() {
  return (
    <SafeAreaView>
      <Text>{strings('drawer_navigation')}</Text>
    </SafeAreaView>
  );
}

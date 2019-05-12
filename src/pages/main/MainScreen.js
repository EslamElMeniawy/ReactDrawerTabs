import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { strings } from '../../../locales/i18n';

export default function MainScreen() {
  return (
    <SafeAreaView>
      <Text>{strings('main_screen')}</Text>
    </SafeAreaView>
  );
}

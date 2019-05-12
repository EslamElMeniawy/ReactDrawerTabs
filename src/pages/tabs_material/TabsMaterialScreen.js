import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { strings } from '../../../locales/i18n';

export default function TabsMaterialScreen() {
  return (
    <SafeAreaView>
      <Text>{strings('tabs_material')}</Text>
    </SafeAreaView>
  );
}

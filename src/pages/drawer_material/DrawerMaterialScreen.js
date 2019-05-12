import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { strings } from '../../../locales/i18n';

export default function DrawerMaterialScreen() {
  return (
    <SafeAreaView>
      <Text>{strings('drawer_material')}</Text>
    </SafeAreaView>
  );
}

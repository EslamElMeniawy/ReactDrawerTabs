import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLOR, Toolbar } from 'react-native-material-ui';

import { strings } from '../../../locales/i18n';

export default function DrawerMaterialScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
      <Toolbar leftElement="menu" centerElement={strings('drawer_material')} rightElement="menu" />
    </SafeAreaView>
  );
}

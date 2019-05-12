import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLOR, Toolbar } from 'react-native-material-ui';

import { strings } from '../../../locales/i18n';

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
      <Toolbar
        leftElement="arrow-back"
        centerElement={strings('settings')}
        rightElement="arrow-back"
      />
    </SafeAreaView>
  );
}

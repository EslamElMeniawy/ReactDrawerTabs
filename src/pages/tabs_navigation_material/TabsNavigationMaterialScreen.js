import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLOR, Toolbar } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { strings } from '../../../locales/i18n';

export default function TabsNavigationMaterialScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
      <Toolbar centerElement={strings('tabs_navigation_material')} />
    </SafeAreaView>
  );
}

TabsNavigationMaterialScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

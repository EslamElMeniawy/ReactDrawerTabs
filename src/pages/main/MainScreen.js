import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { COLOR, Toolbar, Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { strings } from '../../../locales/i18n';
import Styles from './Styles';

function openPage(navigation, page) {
  navigation.navigate(page);
}

function getPrimaryButton(navigation, page, text) {
  return (
    <Button
      style={Styles.button}
      raised
      primary
      text={text}
      onPress={() => {
        openPage(navigation, page);
      }}
    />
  );
}

function getAccentButton(navigation, page, text) {
  return (
    <Button
      style={Styles.button}
      raised
      accent
      text={text}
      onPress={() => {
        openPage(navigation, page);
      }}
    />
  );
}

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
      <Toolbar centerElement={strings('main_screen')} />
      <Text style={Styles.selectPage}>{strings('select_page')}</Text>
      {getPrimaryButton(navigation, 'DrawerNavigation', strings('drawer_navigation'))}
      {getAccentButton(navigation, 'DrawerMaterial', strings('drawer_material'))}
      {getPrimaryButton(navigation, 'TabsNavigation', strings('tabs_navigation'))}
      {getAccentButton(navigation, 'TabsNavigationMaterial', strings('tabs_navigation_material'))}
      {getPrimaryButton(navigation, 'TabsMaterial', strings('tabs_material'))}
    </SafeAreaView>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

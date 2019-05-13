import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import { COLOR, Toolbar, Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { strings, defaultLocale } from '../../../locales/i18n';
import { getData, LANGUAGE_KEY } from '../../utils/AsyncStorageUtils';
import { LANGUAGE_AR, LANGUAGE_EN } from '../../utils/Languages';
import Styles from './Styles';

export default class MainScreen extends Component {
  state = {
    userLanguage: defaultLocale,
    toolbarStyle: Styles.toolbarHideLeft,
  };

  componentDidMount() {
    this.getToolbarStyle();
  }

  getToolbarStyle = () => {
    getData(LANGUAGE_KEY).then((userLanguage) => {
      if (userLanguage) {
        switch (userLanguage) {
          case LANGUAGE_AR:
            this.setState({ userLanguage, toolbarStyle: Styles.toolbarHideRight });
            break;
          case LANGUAGE_EN:
            this.setState({ userLanguage, toolbarStyle: Styles.toolbarHideLeft });
            break;
          default:
            this.setState({ userLanguage, toolbarStyle: Styles.toolbarHideLeft });
            break;
        }
      } else {
        this.setState({ userLanguage: defaultLocale, toolbarStyle: Styles.toolbarHideLeft });
      }
    });
  };

  openPage = (page) => {
    const { navigation } = this.props;
    navigation.navigate(page);
  };

  getPrimaryButton = (page, text) => (
    <Button
      style={Styles.button}
      raised
      primary
      text={text}
      onPress={() => {
        this.openPage(page);
      }}
    />
  );

  getAccentButton = (page, text) => (
    <Button
      style={Styles.button}
      raised
      accent
      text={text}
      onPress={() => {
        this.openPage(page);
      }}
    />
  );

  handleLeftElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_AR) {
      this.openPage('Settings');
    }
  };

  handleRightElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_EN) {
      this.openPage('Settings');
    }
  };

  render() {
    const { toolbarStyle, userLanguage } = this.state;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
        <Toolbar
          style={toolbarStyle}
          leftElement="settings"
          onLeftElementPress={() => this.handleLeftElementPress()}
          centerElement={strings('main_screen')}
          rightElement="settings"
          onRightElementPress={() => this.handleRightElementPress()}
        />
        <Text style={Styles.selectPage}>{strings('select_page')}</Text>
        {this.getPrimaryButton(
          userLanguage === LANGUAGE_AR ? 'DrawerNavigationRight' : 'DrawerNavigationLeft',
          strings('drawer_navigation'),
        )}
        {this.getAccentButton('DrawerMaterial', strings('drawer_material'))}
        {this.getPrimaryButton(
          userLanguage === LANGUAGE_AR ? 'TabsNavigationAr' : 'TabsNavigationEn',
          strings('tabs_navigation'),
        )}
        {this.getAccentButton('TabsNavigationMaterial', strings('tabs_navigation_material'))}
        {this.getPrimaryButton('TabsMaterial', strings('tabs_material'))}
      </SafeAreaView>
    );
  }
}

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

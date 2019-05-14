import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLOR, Toolbar } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { strings, defaultLocale } from '../../../locales/i18n';
import { getData, LANGUAGE_KEY } from '../../utils/AsyncStorageUtils';
import { LANGUAGE_AR, LANGUAGE_EN } from '../../utils/Languages';
import Styles from './Styles';

export default class DrawerScreen1 extends Component {
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
            this.setState({ userLanguage, toolbarStyle: Styles.toolbarHideLeft });
            break;
          case LANGUAGE_EN:
            this.setState({ userLanguage, toolbarStyle: Styles.toolbarHideRight });
            break;
          default:
            this.setState({ userLanguage, toolbarStyle: Styles.toolbarHideRight });
            break;
        }
      } else {
        this.setState({ userLanguage: defaultLocale, toolbarStyle: Styles.toolbarHideRight });
      }
    });
  };

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  handleLeftElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_EN) {
      this.openDrawer();
    }
  };

  handleRightElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_AR) {
      this.openDrawer();
    }
  };

  render() {
    const { toolbarStyle } = this.state;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
        <Toolbar
          style={toolbarStyle}
          leftElement="menu"
          onLeftElementPress={() => this.handleLeftElementPress()}
          centerElement={strings('drawer_item_1')}
          rightElement="menu"
          onRightElementPress={() => this.handleRightElementPress()}
        />
      </SafeAreaView>
    );
  }
}

DrawerScreen1.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

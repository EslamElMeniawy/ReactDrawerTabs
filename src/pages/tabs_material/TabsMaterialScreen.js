import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { COLOR, Toolbar } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import { strings } from '../../../locales/i18n';
import { getData, LANGUAGE_KEY } from '../../utils/AsyncStorageUtils';
import { LANGUAGE_AR, LANGUAGE_EN } from '../../utils/Languages';
import Styles from './Styles';

export default class TabsMaterialScreen extends Component {
  state = {
    userLanguage: LANGUAGE_EN,
    toolbarStyle: Styles.toolbarHideRight,
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
        this.setState({ userLanguage: LANGUAGE_EN, toolbarStyle: Styles.toolbarHideRight });
      }
    });
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  handleLeftElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_EN) {
      this.goBack();
    }
  };

  handleRightElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_AR) {
      this.goBack();
    }
  };

  render() {
    const { toolbarStyle } = this.state;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
        <Toolbar
          style={toolbarStyle}
          leftElement="arrow-back"
          onLeftElementPress={() => this.handleLeftElementPress()}
          centerElement={strings('tabs_material')}
          rightElement="arrow-forward"
          onRightElementPress={() => this.handleRightElementPress()}
        />
      </SafeAreaView>
    );
  }
}

TabsMaterialScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

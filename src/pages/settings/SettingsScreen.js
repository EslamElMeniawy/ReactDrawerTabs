import React, { Component } from 'react';
import {
  SafeAreaView, StatusBar, Text, View,
} from 'react-native';
import { COLOR, Toolbar, RadioButton } from 'react-native-material-ui';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import { strings, setLocale } from '../../../locales/i18n';
import { getData, LANGUAGE_KEY, setData } from '../../utils/AsyncStorageUtils';
import { LANGUAGE_AR, LANGUAGE_EN } from '../../utils/Languages';
import Styles from './Styles';

export default class SettingsScreen extends Component {
  state = {
    userLanguage: LANGUAGE_EN,
    toolbarStyle: Styles.toolbarHideRight,
    radioStyle: Styles.radio,
    arabicChecked: false,
    englishChecked: false,
  };

  componentDidMount() {
    this.getToolbarStyle();
  }

  getToolbarStyle = () => {
    getData(LANGUAGE_KEY).then((userLanguage) => {
      if (userLanguage) {
        switch (userLanguage) {
          case LANGUAGE_AR:
            this.setState({
              userLanguage,
              toolbarStyle: Styles.toolbarHideLeft,
              radioStyle: Styles.radioRtl,
              arabicChecked: true,
              englishChecked: false,
            });
            break;
          case LANGUAGE_EN:
            this.setState({
              userLanguage,
              toolbarStyle: Styles.toolbarHideRight,
              radioStyle: Styles.radio,
              arabicChecked: false,
              englishChecked: true,
            });
            break;
          default:
            this.setState({
              userLanguage,
              toolbarStyle: Styles.toolbarHideRight,
              radioStyle: Styles.radio,
              arabicChecked: false,
              englishChecked: true,
            });
            break;
        }
      } else {
        this.setState({
          userLanguage,
          toolbarStyle: Styles.toolbarHideRight,
          radioStyle: Styles.radio,
          arabicChecked: false,
          englishChecked: true,
        });
      }
    });
  };

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  saveLanguage = (userLanguage) => {
    const { navigation } = this.props;

    setData(LANGUAGE_KEY, userLanguage).then((success) => {
      if (success) {
        setLocale(userLanguage);
        navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0);
      } else if (userLanguage === LANGUAGE_AR) {
        this.setState({
          arabicChecked: false,
          englishChecked: true,
        });
      } else {
        this.setState({
          arabicChecked: true,
          englishChecked: false,
        });
      }
    });
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
    const {
      toolbarStyle, radioStyle, arabicChecked, englishChecked, userLanguage,
    } = this.state;

    return (
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
        <Toolbar
          style={toolbarStyle}
          leftElement="arrow-back"
          onLeftElementPress={() => this.handleLeftElementPress()}
          centerElement={strings('settings')}
          rightElement="arrow-forward"
          onRightElementPress={() => this.handleRightElementPress()}
        />
        <Text style={Styles.languageText}>{strings('language')}</Text>
        <View style={Styles.radioContainer}>
          <RadioButton
            style={radioStyle}
            label={strings('arabic')}
            value={LANGUAGE_AR}
            checked={arabicChecked}
            onSelect={() => {
              if (userLanguage !== LANGUAGE_AR) {
                this.setState({
                  arabicChecked: true,
                  englishChecked: false,
                });

                this.saveLanguage(LANGUAGE_AR);
              }
            }}
          />
        </View>
        <View style={Styles.radioContainer}>
          <RadioButton
            style={radioStyle}
            label={strings('english')}
            value={LANGUAGE_EN}
            checked={englishChecked}
            onSelect={() => {
              if (userLanguage !== LANGUAGE_EN) {
                this.setState({
                  arabicChecked: false,
                  englishChecked: true,
                });

                this.saveLanguage(LANGUAGE_EN);
              }
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
};

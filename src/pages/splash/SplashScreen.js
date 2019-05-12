import React, { Component } from 'react';
import {
  SafeAreaView, StatusBar, View, Text,
} from 'react-native';
import { COLOR, Button } from 'react-native-material-ui';
import PropTypes from 'prop-types';

import Styles from './Styles';
import { getData, setData, LANGUAGE_KEY } from '../../utils/AsyncStorageUtils';
import { LANGUAGE_AR, LANGUAGE_EN } from '../../utils/Languages';
import { setLocale, strings } from '../../../locales/i18n';

export default class SplashScreen extends Component {
  state = {
    languageSet: true,
    error: null,
  };

  componentDidMount() {
    getData(LANGUAGE_KEY).then((userLanguage) => {
      if (userLanguage) {
        this.setLang(userLanguage);
      } else {
        this.setState({ languageSet: false });
      }
    });
  }

  setLang(lang) {
    const { navigation } = this.props;

    setData(LANGUAGE_KEY, lang).then((success) => {
      if (success) {
        setLocale(lang);
        navigation.navigate('App');
      } else {
        this.setState({
          error: strings('error_save_language'),
        });
      }
    });
  }

  getErrorView = () => {
    const { error } = this.state;

    if (error) {
      return <Text style={Styles.error}>{error}</Text>;
    }

    return null;
  };

  getLanguageSelect = () => (
    <View style={Styles.languageView}>
      <Text style={Styles.selectLanguage}>{strings('select_lang')}</Text>
      <View style={Styles.buttonContainer}>
        <Button
          raised
          primary
          text={strings('arabic')}
          onPress={() => {
            this.setLang(LANGUAGE_AR);
          }}
        />
        <Button
          raised
          primary
          text={strings('english')}
          onPress={() => {
            this.setLang(LANGUAGE_EN);
          }}
        />
      </View>
      {this.getErrorView()}
    </View>
  );

  getContent = () => {
    const { languageSet } = this.state;

    if (languageSet) {
      return null;
    }

    return this.getLanguageSelect();
  };

  render() {
    return (
      <SafeAreaView style={Styles.safeAreaView}>
        <StatusBar barStyle="light-content" backgroundColor={COLOR.blueGrey900} />
        {this.getContent()}
      </SafeAreaView>
    );
  }
}

SplashScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

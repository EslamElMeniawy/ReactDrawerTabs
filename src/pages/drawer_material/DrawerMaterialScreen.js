import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import {
  COLOR, Toolbar, Drawer, Avatar,
} from 'react-native-material-ui';

import { strings } from '../../../locales/i18n';
import { getData, LANGUAGE_KEY } from '../../utils/AsyncStorageUtils';
import { LANGUAGE_AR, LANGUAGE_EN } from '../../utils/Languages';
import Styles from './Styles';

export default class DrawerMaterial extends Component {
  state = {
    userLanguage: LANGUAGE_EN,
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
        this.setState({ userLanguage: LANGUAGE_EN, toolbarStyle: Styles.toolbarHideRight });
      }
    });
  };

  toggleDrawer = () => {};

  handleLeftElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_EN) {
      this.toggleDrawer();
    }
  };

  handleRightElementPress = () => {
    const { userLanguage } = this.state;

    if (userLanguage === LANGUAGE_AR) {
      this.toggleDrawer();
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
          centerElement={strings('drawer_material')}
          rightElement="menu"
          onRightElementPress={() => this.handleRightElementPress()}
        />
        <View
          style={{
            flex: 1,
            width: 260,
            elevation: 4,
            backgroundColor: 'white',
          }}
        >
          <Drawer>
            <Drawer.Section
              key="key1"
              divider
              items={[
                { icon: 'bookmark-border', value: 'Notifications' },
                { icon: 'today', value: 'Calendar', active: true },
                { icon: 'people', value: 'Clients' },
              ]}
            />
            <Drawer.Section
              key="key2"
              title="Personal"
              items={[{ icon: 'info', value: 'Info' }, { icon: 'settings', value: 'Settings' }]}
            />
          </Drawer>
        </View>
      </SafeAreaView>
    );
  }
}

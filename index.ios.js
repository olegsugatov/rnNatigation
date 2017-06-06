import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import App from './src/App';
import SecondScreen from './src/SecondScreen';

export default class rnNavigation extends Component {
  render() {
    const { navigation } = this.props;
    // const { navigate } = this.props.navigation;
    return (
      <App navigation = { navigation }/>
    );
  }
}

const SimpleApp = DrawerNavigator ({
  Home: { screen: App},
  SecondScreen: { screen: SecondScreen}
});

AppRegistry.registerComponent('rnNavigation', () => SimpleApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { I18nextProvider, translate } from 'react-i18next';
import { createStackNavigator } from 'react-navigation';
import i18n from './i18n';
import Home from './pages/Home';
import Page2 from './pages/Page2';

const Stack = createStackNavigator({
  Home: { screen: Home },
  Page2: { screen: Page2 }
});

const WrappedStack = () => <Stack screenProps={{ t: i18n.getFixedT() }} />; 

const ReloadAppOnLanguageChange = translate([
  'common',
  'home',
  'page2'
], {
  wait: true,
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack);

export default class App extends Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <ReloadAppOnLanguageChange />
      </I18nextProvider>
    );
  }
}
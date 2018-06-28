import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import { StyleSheet, Text, View, Button } from 'react-native';

// using the translation hoc to provie t function in props using home as default namespace
// https://github.com/i18next/react-i18next#translate-hoc
@translate(['home', 'common'], { wait: true })
export default class Home extends PureComponent {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: screenProps.t('home:title')
  });

  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;

    return (
      <View style={styles.container}>
        <Text>{t('common:currentLanguage', { lng: i18n.language })}</Text>
        <Button
          onPress={() => { i18n.changeLanguage('en') }}
          title={t('common:toggleToEnglish')}
        />
        <Button
          onPress={() => { i18n.changeLanguage('de') }}
          title={t('common:toggleToGerman')}
        />
        <Button
          onPress={() => { i18n.changeLanguage('ko') }}
          title={t('common:toggleToKorean')}
        />
        <Text style={styles.separate}>{t('introduction')}</Text>
        <Button
          onPress={() => navigate('Page2')}
          title={t('common:goToPage2')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separate: {
    marginTop: 50
  }
});
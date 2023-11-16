import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {ComponentProps} from '../../models/general';
import generalStyles from '../../utils/styles';

function AppBackgroundView({children, opacity}: ComponentProps): JSX.Element {
  return (
    <View style={[generalStyles.container, styles.bgWhtie]}>
      <SafeAreaView style={[generalStyles.container, {opacity: opacity}]}>
        <StatusBar barStyle="light-content" />
        {children}
      </SafeAreaView>
    </View>
  );
}

export default AppBackgroundView;

const styles = StyleSheet.create({
  bgWhtie: {
    backgroundColor: 'blue',
  },
});

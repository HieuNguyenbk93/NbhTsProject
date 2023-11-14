import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenName} from '../../utils/constant';

const AppIntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>AppIntroScreen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate(ScreenName.authLogin)}
      />
    </View>
  );
};

export default AppIntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

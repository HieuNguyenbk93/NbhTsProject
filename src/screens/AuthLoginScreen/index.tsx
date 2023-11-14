import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AuthLoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AuthLoginScreen</Text>
    </View>
  );
};

export default AuthLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

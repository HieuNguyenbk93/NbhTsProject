import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScreenName} from '../../utils/constant';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate(ScreenName.profile)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

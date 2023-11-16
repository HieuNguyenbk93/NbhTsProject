import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {ScreenName} from '../../utils/constant';
import {AppBackgroundView, AppText} from '../../components';
import generalStyles from '../../utils/styles';

const HomeScreen = ({navigation}) => {
  return (
    <AppBackgroundView>
      <View style={[generalStyles.container, styles.bgWhite]}>
        <AppText>HomeScreen</AppText>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate(ScreenName.profile)}
        />
      </View>
    </AppBackgroundView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgWhite: {
    // flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

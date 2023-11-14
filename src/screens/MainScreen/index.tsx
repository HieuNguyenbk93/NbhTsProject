import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from '../../navigation/homeNavigation';
import AuthNavigation from '../../navigation/authNavigation';

const MainScreen = () => {
  const render = () => {
    if (true) {
      return <HomeNavigation />;
    } else {
      return <AuthNavigation />;
    }
  };
  return <NavigationContainer>{render()}</NavigationContainer>;
};

export default MainScreen;

// const styles = StyleSheet.create({})

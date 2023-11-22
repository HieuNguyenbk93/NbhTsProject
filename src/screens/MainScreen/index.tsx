import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from '../../navigation/homeNavigation';
import AuthNavigation from '../../navigation/authNavigation';
import {GlobalStateProvider} from '../../state/GlobalStateContext';

const MainScreen = () => {
  const render = () => {
    if (true) {
      return <HomeNavigation />;
    } else {
      return <AuthNavigation />;
    }
  };
  return (
    <NavigationContainer>
      <GlobalStateProvider>{render()}</GlobalStateProvider>
    </NavigationContainer>
  );
};

export default MainScreen;

// const styles = StyleSheet.create({})

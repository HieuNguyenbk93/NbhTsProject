/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../utils/constant';
import {AppIntroScreen, AuthLoginScreen, AuthSignUpScreen} from '../screens';

const AuthStackNavigator = createNativeStackNavigator();

const AuthStack = () => (
  <AuthStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStackNavigator.Screen
      name={ScreenName.appIntro}
      component={AppIntroScreen}
    />
    <AuthStackNavigator.Screen
      name={ScreenName.authLogin}
      component={AuthLoginScreen}
    />
    <AuthStackNavigator.Screen
      name={ScreenName.authSignUp}
      component={AuthSignUpScreen}
    />
  </AuthStackNavigator.Navigator>
);

const AuthNavigation = () => {
  return <AuthStack />;
};

export default AuthNavigation;

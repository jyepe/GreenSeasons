/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LoginScreen from './components/Screens/LoginScreen';
import OptionsScreen from './components/Screens/OptionScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
    {
      Login: LoginScreen,
      Options: OptionsScreen
    },
    {
      initialRouteName: "Login"
    }
  );
  
  const AppContainer = createAppContainer(RootStack);



AppRegistry.registerComponent(appName, () => AppContainer);

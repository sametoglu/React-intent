/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation'
import Login from './src/pages/login-page/Login';
import LoginForm from './src/pages/login-page/LoginForm';
import Settings from './src/pages/settings/Settings';
import { createAppContainer } from 'react-navigation';



export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login : Login,
  LoginForm : LoginForm,
  Settings : Settings
});

const AppContainer = createAppContainer(AppStackNavigator);

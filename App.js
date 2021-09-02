import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import FacebookScreen from "./screens/fb.js";
import InstaScreen from './screens/in.js';

export default class App extends React.Component {
  render() {
    return <AppContainer/>
  } 
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Insta: { screen: InstaScreen }
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({

});

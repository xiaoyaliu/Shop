/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './Component/Main/XMGMain'
//var Main=require('./Component/Main/XMGMain')


AppRegistry.registerComponent('Shop', () => Main);

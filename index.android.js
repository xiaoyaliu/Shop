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
        View,
        Navigator
        } from 'react-native';

import LaunchImage from './Component/Main/XMGLauchimage'
//var Main=require('./Component/Main/XMGMain')
class XMGBuy extends Component{
      render(){
            return(
                    <Navigator
                            initialRoute={{name: "启动页", component: LaunchImage}}
                            configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
                            renderScene={(route, navigator) =>{
                               let Component=route.component;
                               return <Component {...route.passProps} navigator={navigator}/>
                            }
                           }
                            />
            )
      }

}

AppRegistry.registerComponent('Shop', () => XMGBuy);

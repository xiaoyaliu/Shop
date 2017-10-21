/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		Navigator,
		Platform //判断当前系统
		} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

var Home=require('../Home/XMGHome');
var Shop=require('../Shop/XMGShop');
var Mine=require('../Mine/XMGMine');
var More=require('../More/XMGMore');
export default class Main extends Component {
	  constructor(props){
			super(props);
			this.state={
				  selectedTab:'home'
			}
	  }
	  render() {
			return (
					<TabNavigator>
						  {this.renderTabBarItem("首页",'icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
						  {this.renderTabBarItem("商家",'icon_tabbar_mine','icon_tabbar_merchant_selected','shop','商家',Shop)}
						  {this.renderTabBarItem("我的",'icon_tabbar_homepage','icon_tabbar_homepage_selected','mine','我的',Mine)}
						  {this.renderTabBarItem("更多",'icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
					</TabNavigator>
			);
	  }
	  renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,component){
			return(
					<TabNavigator.Item
							selected={this.state.selectedTab === selectedTab}
							title={title}
							renderIcon={() => <Image style={styles.iconStyle} source={{uri:iconName}} />}
							renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:selectedIconName}} />}
							onPress={()=>{this.setState({selectedTab:selectedTab})}}
							>
						  <Navigator
								  initialRoute={{name: componentName, component: component}}
								  configureScene={()=>{return Navigator.SceneConfigs.PushFromRight}}
								  renderScene={(route, navigator) =>{
										    let Component=route.component;
										    return <Component {...route.passProps} navigator={navigator}/>
										}
										}
								  />
					</TabNavigator.Item>
			)
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			flexDirection:'column',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: '#F5FCFF',
	  },
	  iconStyle:{
			width:Platform.OS==='ios'?30:24,
			height:Platform.OS==='ios'?30:24
	  },
	  welcome: {
			fontSize: 20,
			textAlign: 'center',
			margin: 10,
	  },a1:{
			backgroundColor:'red',
			height:100
	  },a2:{
			backgroundColor:'green',
			  height:100
       },a3:{
			backgroundColor:'blue',
			height:100
	  }
});
/**
 * Created by liuxiaoya��
 *date 2017/2/6 0006.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		TextInput,
		Alert,
		Platform,
		ToastAndroid,
		BackAndroid
		} from 'react-native';
import TWebView from './../webview';
class CommonMyCell extends Component {
	  constructor(props){
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
						  {this.renderNavBar()}
						  <TWebView url={this.props.url}/>
					</View>
			);
	  }
	  renderNavBar(){
			return(
					<View style={styles.navOutViewStyle}>
						  <TouchableOpacity onPress={()=>{this.onBackAndroid()}} style={styles.leftViewStyle}>
								<Image source={{uri:'icon_camera_back_normal'}} style={styles.navLeftImageStyle}  tintColor="#fff"/>
						  </TouchableOpacity>
						  <Text style={{color:"#fff",fontSize:16}}>详情页</Text>
						  <TouchableOpacity style={styles.rightViewStyle}>
								<Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
						  </TouchableOpacity>
					</View>
			)
	  }
	  componentWillMount() {
			if (Platform.OS === 'android') {
				  BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
			}
	  }
	  componentWillUnmount() {
			if (Platform.OS === 'android') {
				  BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
			}
	  }
	  onBackAndroid = () => {
			if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
				  //最近2秒内按过back键，可以退出应用。
				  this.props.navigator.pop();
				  //return false;
			}
			this.lastBackPressed = Date.now();

			ToastAndroid.show('This is a toast with long duration', ToastAndroid.LONG)
			return true;
	  };

}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
	  },
	  navOutViewStyle:{
			flexDirection:'row',
			justifyContent: 'center',
			alignItems:'center',
			height:Platform.OS==='ios'?44:44,
			backgroundColor:'rgba(255,96,0,1.0)'
	  },
	  leftViewStyle:{
			position:'absolute',
			left:10,
			bottom:Platform.OS==='ios'?22:12
	  },
	  navLeftImageStyle:{
			width:20,
			height:20,
	  },
	  rightViewStyle:{
			position:'absolute',
			right:10,
			bottom:Platform.OS==='ios'?18:10
	  },
	  navImageStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			tintColor:"#fff"

	  }

});
module.exports=CommonMyCell;
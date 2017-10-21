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
		ScrollView,
		Image,
		TouchableOpacity,
		Platform
		} from 'react-native';
import CommonCell from './XMGComponentCell'
class More extends Component {

	  render() {
			return (
					<View style={styles.container}>
						  {this.renderNavBar()}
						  <ScrollView>
							  <View style={{marginTop:10}}>
						         <CommonCell title="扫一扫"/>
                              </View>
								<View style={{marginTop:10}}>
									  <CommonCell title="省流量模式" isSwitch={true}/>
									  <CommonCell title="消息提醒"/>
									  <CommonCell title="邀请好友使用"/>
									  <CommonCell title="清空缓存" rightTitle="1.99M"/>
								</View>
								<View style={{marginTop:10}}>
									  <CommonCell title="意见反馈"/>
									  <CommonCell title="问卷调查"/>
									  <CommonCell title="支付帮助"/>
									  <CommonCell title="网络诊断"/>
									  <CommonCell title="关于我们"/>
									  <CommonCell title="我要应聘"/>
								</View>
								<View style={{marginTop:10}}>
									  <CommonCell title="精品应用"/>
									  </View>
						  </ScrollView>
					</View>
			);
	  }

	  //导航条
	  renderNavBar() {
			return (
					<View style={styles.navOutViewStyle}>
						  <Text style={{color:"#fff",fontSize:16}}>更多</Text>
						  <TouchableOpacity style={styles.rightViewStyle}>
						  <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
							</TouchableOpacity>
					</View>
			)


	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			flexDirection:'column',
			backgroundColor: '#ededef',
	  },
	  navOutViewStyle:{
			flexDirection:'row',
			justifyContent: 'center',
			alignItems:'center',
			height:Platform.OS==='ios'?64:44,
			backgroundColor:'rgba(255,96,0,1.0)'
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
module.exports=More
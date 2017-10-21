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
		TextInput,
		Image,
		Dimensions,
		Platform, //判断当前系统,
		TouchableOpacity,
		ScrollView,
        Alert
		} from 'react-native';
var {width,height}=Dimensions.get('window');
var HomeDetail = require('./XMGHomeDetail');
var TopView=require('./XMGTopView');
var MiddleView=require('./XMGHomeMiddleView');
var MiddleBottomView=require('./XMGHomeMiddleBottomView');
var ShopCenter=require('./XMGShopCenter');
var ShopCenterDetail=require('./XMGShopCenterDetail')
var GuestLike=require('./XMGGuestYouLike')
class Home extends Component {

	  render() {
			return (
					<View style={styles.container}>
						  {this.renderNavBar()}
						  <ScrollView  style={{height:160}}>
								{/*头部view**/}
								<TopView />
								{/*中间view**/}
								<MiddleView/>
								{/*中间下半部分view**/}
								<MiddleBottomView popTopHome={(data)=>{this.pushToDetail(data)}}/>
								{/*购物中心view**/}
								<ShopCenter popToHomeView={(url)=>this.pushToShopCenter(url)}/>
								{/*猜你喜欢view**/}
								<GuestLike api_url='http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
										/>
						  </ScrollView>

					</View>
			);
	  }
	  pushToShopCenter(url){

			this.props.navigator.push({
				  component:ShopCenterDetail,
				  title:'详情页',
				  passProps:{'url':this.dealWithUrl(url)}
			})
	  }
	  dealWithUrl(url){
			if(url==null)
			return;
			else{
				  return url.replace('imeituan://www.meituan.com/web/?url=','');
			}
	  }
	  // 跳转到二级界面
	  pushToDetail(data){

			// alert(data);

			this.props.navigator.push(
					{
						  component: HomeDetail, // 要跳转的版块
						  title:'详情页'
					}
			);
	  }
	  renderNavBar(){
			return(
				  <View style={styles.topView}>
					<TouchableOpacity onPress={()=>{Alert.alert("点击了")}}>
				     <Text style={styles.topInput}>郑州</Text>
					</TouchableOpacity>
					 <TextInput style={styles.topTextInput} placeholder="输入商家，品类，商圈" underlineColorAndroid='transparent'/>
				      <View style={styles.navRight}>
					    <Image style={styles.navRightImgStyle} source={{uri:'icon_homepage_message'}}/>
						<Image style={styles.navRightImgStyle} source={{uri:'icon_homepage_scan'}}/>
					  </View>
				  </View>
			)
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			backgroundColor: '#e8e8e8',
	  },
	  topView:{
			flexDirection:'row',
			height:Platform.OS==='ios'?48:44,
			alignItems:'center',
			backgroundColor:'rgba(255,96,0,1.0)'
	  },
	  topInput:{
           paddingLeft:10,
			paddingRight:10,
			color:"#fff"
	  },
	  topTextInput:{
            flex:1,
			backgroundColor:'#fff',
			height:Platform.OS==='ios'?30:26,
			borderRadius:15,
			paddingTop:0,
			paddingBottom:0,
			paddingLeft:15,
			marginRight:6
     },
	  navRight:{
			flexDirection:'row',
	  },
	  navRightImgStyle:{
			marginRight:2,
			width:Platform.OS==='ios'?30:24,
			height:Platform.OS==='ios'?30:24
	  }

});
module.exports=Home
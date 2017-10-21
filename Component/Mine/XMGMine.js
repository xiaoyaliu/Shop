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
		Platform,
		TouchableOpacity,
		Dimensions
		} from 'react-native';
import CommonMyCell from './XMGCommonMyCell'
import MiddleView from './XMLMineMiddleView'
class Mine extends Component {
collect
	  render() {
			return (
					 <View style={styles.container}>
						   <View style={styles.mineTop}>
								 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
								 <View style={{flexDirection:'row',alignItems:'center',marginLeft:6}}>
									   <Image source={{uri:'see'}} style={styles.leftIconStyle}/>
								     <Text style={{color:"#fff",fontSize:15}}>小马哥电商</Text>
									   <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}}/>
								 </View>
								 <Image source={{uri:'icon_cell_rightarrow'}} style={{width:8,height:13,tintColor:"#fff",marginRight:6}}/>
									   </View>
								 <View style={styles.topItem}>

								 {this.renderTopItem()}
								 </View>
						   </View>

						   <ScrollView>
						   <View styel={{marginTop:10}}>
								 <CommonMyCell leftIconName="collect" leftTitle="我的订单" rightTitle="全部订单"/>
						         <MiddleView/>
						   </View>
						  <View style={{marginTop:10}}>
						  <CommonMyCell leftIconName="draft" leftTitle="小马哥" rightTitle="账户余额：￥100"/>
						  <CommonMyCell leftIconName="like" leftTitle="抵用券" rightTitle="10张"/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonMyCell leftIconName="card" leftTitle="积分商城" />
						  </View>
						  <View style={{marginTop:10}}>
								<CommonMyCell leftIconName="new_friend" leftTitle="今日推荐" rightIconName="me_new"/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonMyCell leftIconName="pay" leftTitle="我要合作" rightTitle="轻松开店招财进宝"/>
						  </View>
						</ScrollView>
					</View>
			);
	  }
	  renderTopItem(){
             var itemArr=[];
			 var data=[{'number':'100','title':'马哥券'},{'number':'12','title':'评价'},{'number':'50','title':'收藏'}]
	         for(var i=0;i<data.length;i++){
				   itemArr.push(
						   <TouchableOpacity key={i} style={[styles.topViewItem,i==data.length-1?styles.topViewItemBottom:styles.topViewItemBorder]}>
						         <Text style={{fontSize:12,color:"#fff"}}>{data[i].number}</Text>
								 <Text style={{fontSize:12,color:"#fff"}}>{data[i].title}</Text>
						   </TouchableOpacity>
				   )
			 }
			return itemArr;

	   }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			flexDirection:'column',
			backgroundColor: '#e8e8e8',
	  },
	  leftIconStyle:{
			width:40,
			height:40,
			borderRadius:20,
			marginRight:5
	  },
	  mineTop:{
			paddingTop:Platform.OS=='ios'?30:20,
			paddingBottom:Platform.OS=='ios'?56:48,
			backgroundColor:"#ff521b",

	  },
	  topItem:{
			flexDirection:'row',
			position:'absolute',
			bottom:0,
			backgroundColor:'rgba(255,255,255,0.3)'
	  },
	  topViewItem:{

			height:Platform.OS=='ios'?48:40,
			width:Dimensions.get('window').width/3,
			flexDirection:'column',
			justifyContent:'center',
			alignItems:'center',

	  },

	  topViewItemBorder:{
			borderRightWidth:1,
			borderRightColor:'#fff'
	  }

});
module.exports=Mine
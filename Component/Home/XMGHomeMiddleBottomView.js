/**
 * Created by liuxiaoya；
 *date 2017/2/8 0008.
 *description
 */
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
		Dimensions,
		TouchableOpacity
		} from 'react-native';
// 引入外部的json数据
var CommonView=require('./XMGMiddleCommonView');
var BottomMiddleData=require('./../../LocalData/XMG_Home_D4.json')
var width=Dimensions.get('window').width*0.5;
class MiddleBottomView extends Component {
	  constructor(props){
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
						  {/*上*/}
						  {this.renderLeftView()}
						  {/*下*/}
						  <View style={styles.BottomView}>
								{/*左*/}
								{this.renderBottomView()}
								{/*右*/}
						  </View>
					</View>
			);
	  }
	  renderLeftView(){
			/*var leftData=BottomMiddleData.dataLeft[0];
			return(
					<TouchableOpacity style={styles.leftView}>
						  <Image source={{uri:leftData.img1}} style={styles.leftImageStyle}/>
						  <Image source={{uri:leftData.img2}} style={styles.leftImageStyle}/>
						  <Text style={{color:'#999'}}>{leftData.title}</Text>
						  <View style={{flexDirection:'row',marginTop:2}}>
								<Text style={{color:'blue',marginRight:3,fontSize:10}}>{leftData.price}</Text>
								<Text style={{color:'orange',paddingLeft:2,paddingRight:2,backgroundColor:'yellow',fontSize:10}}>{leftData.sale}</Text>
						  </View>
					</TouchableOpacity>
			)*/
	  }
	  renderBottomView(){
			var itemArr=[];
			//拿到对应数据
			var bottomData=BottomMiddleData.data;

			for(var i=0;i<bottomData.length;i++){
				  var data={
						titleColor:bottomData[i].typeface_color,
						subTitle:bottomData[i].deputytitle,
						title:bottomData[i].maintitle,
						rightImage:this.dealWithUrl(bottomData[i].imageurl)
				  };
				  itemArr.push(
						  <CommonView key={i} data={data} callBackClickCell={(data)=>this.popToTopView(data)}/>
				  )
			}
			return itemArr;
	  }
	  dealWithUrl(url){
			if(url.search('w.h')==-1){
				  return url;
			}else{
				  return url.replace('w.h','100.80')
			}
	  }
	  // 继续往父级界面传递数据
	  popToTopView(data){
			// 继续执行回调函数
			this.props.popTopHome(data);
	  }
}
const styles = StyleSheet.create({
	  container:{
			marginTop:10
	  },

	  BottomView:{
			flexDirection:'row',
			flexWrap:'wrap',
	  }

});
module.exports=MiddleBottomView
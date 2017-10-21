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
var TopMiddleData=require('./../../LocalData/HomeTopMiddleLeft.json')
var width=Dimensions.get('window').width*0.5;
class MiddleView extends Component {
	  constructor(props){
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
						  {/*左*/}
						 {this.renderLeftView()}
						  {/*右*/}
						  <View style={styles.rightView}>
								{this.renderRightView()}
						  </View>
					</View>
			);
	  }
	  renderLeftView(){
			var leftData=TopMiddleData.dataLeft[0];
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
		   )
	  }
	  renderRightView(){
			var itemArr=[];
			var rightData=TopMiddleData.dataRight;
          for(var i=0;i<rightData.length;i++){
				itemArr.push(
						<CommonView key={i} data={rightData[i]} />
				)
		  }
			return itemArr;
	  }


}
const styles = StyleSheet.create({
	  container:{
			flexDirection:'row',
			marginTop:10
	  },
	  leftView:{
			width:width-1,
			marginRight:1,
			height:119,
			justifyContent:'center',
			alignItems:'center',
			backgroundColor:'#fff'
	  },
	  leftImageStyle:{
          width:64,
			height:22
	  },

});
module.exports=MiddleView
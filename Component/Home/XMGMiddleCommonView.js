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
var width=Dimensions.get('window').width*0.5;
class MiddleView extends Component {
	  constructor(props){
			super(props);

	  }
	  render() {
			return (
					<TouchableOpacity style={styles.container} onPress={()=>this.clickCell(this.props.data.tplurl)}>
						  <View>
						      <Text style={[{color:this.props.data.titleColor},styles.titleText]}>{this.props.data.title}</Text>
								<Text style={styles.subTitle}>{this.props.data.subTitle}</Text>
						  </View>
						  <Image source={{uri:this.props.data.rightImage}} style={{width:64,height:43}} resizeMode='contain'/>
					</TouchableOpacity>
			);
	  }
	  clickCell(data){
			// 判断处理
			if (this.props.callBackClickCell == null) return;
			// 执行回调函数
			this.props.callBackClickCell(data);
	  }

}
const styles = StyleSheet.create({
	  container:{
			flexDirection:'row',
			width:width-1,
			height:59,
			justifyContent:'space-around',
			backgroundColor:'#fff',
			alignItems:'center',
			marginBottom:1,
			marginRight:1
	  },
	  titleText:{
			fontSize:18,
			fontWeight:'bold'
	  },
	  subTitle:{
          fontSize:13
	  }
});
module.exports=MiddleView
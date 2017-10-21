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
		TouchableOpacity,
		RefreshControl,
		ScrollView
		} from 'react-native';
// 引入外部的json数据
var TopMenu = require('../../LocalData/TopMenu.json');
var TopListView = require('./XMGTopListView');
var screenWidth=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
class TopView extends Component {
     constructor(props){
		   super(props);
		   this.state={
				 activePage:0
		   }
	 }
	  render() {
			return (
					<View style={{backgroundColor:"#fff"}}>
						  <ScrollView
								  horizontal={true}
								  showsHorizontalScrollIndicator={false}
								  pagingEnabled={true}
								  onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}
								  >
								{/*头部view*/}
								{this.RenderScrollItem()}



						  </ScrollView>
						  <View style={styles.indicator}>
								{this.RenderScrollPage()}
						  </View>
	                </View>
			);
	  }
	  onAnimationEnd(e){
			var offsetLeft=Math.round(e.nativeEvent.contentOffset.x);
			var screenWidthZ=Math.round(screenWidth)
			var currentPage=Math.floor(offsetLeft/screenWidthZ);
			this.setState({
				  activePage:currentPage
			})
	  }
	  RenderScrollItem(){

			var itemArr=[];
			var dataArr=TopMenu.data;

			for(var i=0;i<dataArr.length;i++){
						itemArr.push(

								<TopListView key={i} dataArr={dataArr[i]}/>
						)
			}
			return itemArr;
	  }
	  RenderScrollPage(){
			var itemArr=[];

			for(var i=0;i<2;i++){
				  var style=(i===this.state.activePage)?{color:'orange'}:{color:'gray'};
				  itemArr.push(
						  <Text key={i} style={[{fontSize:22},style]}>&bull;</Text>
				  )
			}
			return itemArr;
	  }

}
const styles = StyleSheet.create({

	  indicator:{
			height:20,
			flexDirection:'row',
			justifyContent:'center',
			marginTop:10,
			marginBottom:10
	  },
});
module.exports=TopView
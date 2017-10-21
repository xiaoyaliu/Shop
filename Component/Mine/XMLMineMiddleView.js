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
		Alert,
		Switch,
		Platform,
		Dimensions
		} from 'react-native';
var MiddleData=require('./MiddleData.json')
class MiddleView extends Component {
	  constructor(props){
			super(props);
	  }
	  render() {
			return (
					<View style={styles.container}>
						  {this.renderAllItem()}
					</View>
			);
	  }
	  renderAllItem(){
                var itemArr=[];
			for(var i=0;i<MiddleData.length;i++){
				  var data=MiddleData[i]
				  itemArr.push(
						  <InnerView key={i} iconName={data.iconName} title={data.title}/>
				  )
			}
			return itemArr;
	  }
}
class InnerView extends Component {
	  constructor(props){
			super(props);
	  }
	  render() {
			return (
					<View style={styles.tab}>
                          <Image source={{uri:this.props.iconName}} style={{width:30,height:20}}/>
						  <Text>{this.props.title}</Text>
					</View>
			);
	  }
}
const styles = StyleSheet.create({
	  container: {
			height: Platform.OS==='ios'?64:60,
			backgroundColor:"#fff",
			borderBottomColor: '#dddddd',
			borderBottomWidth:0.5,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center'
	  },
     tab:{
		   width:Dimensions.get('window').width/4,
		   alignItems:'center',
     }
});
module.exports=MiddleView;
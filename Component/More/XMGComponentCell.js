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
		Platform
		} from 'react-native';

class CommonCell extends Component {
     constructor(props){
		   super(props);
		   this.state={
				 isOn:false
		   }
	 }
	  render() {
			return (
					<TouchableOpacity style={styles.container} onPress={()=>{Alert.alert("点击了")}}>
						  {/*左边*/}
						  <Text style={{marginLeft:8}}>{this.props.title}</Text>
						  {/*右边*/}
						  {this.renderRightView()}
					</TouchableOpacity>
			);
	  }
	  renderRightView(){
			if(this.props.isSwitch){
			return(
					<Switch value={this.state.isOn==true} onValueChange={()=>{
						  this.setState({
							  isOn:!this.state.isOn
						  })
					}} style={{marginRight:6}}/>
			)
			}else{
				  return(
						  <View style={{flexDirection:'row',alignItems:'center'}}>
								{this.rightTitle()}
						  <Image source={{uri:'icon_cell_rightarrow'}} style={styles.arrowImg}/>
				         </View>
				   )
			}
	  }
	  rightTitle(){
			if(this.props.rightTitle&&this.props.rightTitle.length>0){
				  return(
						  <Text style={{marginRight:2,fontSize:12,color:'gray'}}>{this.props.rightTitle}</Text>
				  )
			}
	  }
}
const styles = StyleSheet.create({
	  container: {
			height: Platform.OS==='ios'?40:36,
			backgroundColor:"#fff",
			borderBottomColor: '#dddddd',
			borderBottomWidth:0.5,
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center'
	  },
	  arrowImg:{
			width:8,
			height:13,
			marginRight:8
	  }

});
module.exports=CommonCell;
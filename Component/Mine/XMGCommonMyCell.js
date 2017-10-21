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
		Platform
		} from 'react-native';

class CommonMyCell extends Component {
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
						  <View style={styles.leftView}>
							<Image source={{uri:this.props.leftIconName}} style={styles.leftImg}/>
						     <Text style={{marginLeft:8}}>{this.props.leftTitle}</Text>
						  </View>
						  {/*右边*/}
						  {this.renderRightView()}
					</TouchableOpacity>
			);
	  }
	  renderRightView(){
			return(
					<View style={{flexDirection:'row',alignItems:'center'}}>
						  {this.rightTitle()}
						  <Image source={{uri:'icon_cell_rightarrow'}} style={styles.arrowImg}/>
					</View>
				   )
			}
	  rightTitle(){
			if(this.props.rightTitle&&this.props.rightTitle.length>0){
				  return(
						  <Text style={{marginRight:2,fontSize:12,color:'gray'}}>{this.props.rightTitle}</Text>
				  )
			}else if(this.props.rightIconName&&this.props.rightIconName.length>0){
				  return(
						  <Image source={{uri:this.props.rightIconName}} style={{width:24,height:13}}/>
				  )
			}
	  }
}
const styles = StyleSheet.create({
	  container: {
			height: Platform.OS==='ios'?40:36,
			backgroundColor:"#fff",
			borderBottomColor: '#dddddd',
			borderBottomWidth:1,
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center'
	  },
	  leftView:{
			flexDirection:'row',
			alignItems:'center'
	  },
	  arrowImg:{
			width:8,
			height:13,
			marginRight:8
	  },
	  leftImg:{
            width:20,
			height:20,
			marginRight:2,
			marginLeft:8,
			borderRadius:10
	  }

});
module.exports=CommonMyCell;
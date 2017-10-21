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
		ScrollView,
		Dimensions
		} from 'react-native';
var CommonCell=require('./XMGCommonMyCell')
var Home_D5=require('./../../LocalData/XMG_Home_D5.json')
class ShopCenter extends Component {
	  constructor(props){
			super(props);
			this.state={
				  isOn:false
			}
	  }
	  render() {
			return (
						  <View style={styles.container}>
								<CommonCell leftIconName="gw" leftTitle="购物中心" rightTitle={Home_D5.tips}/>
								<ScrollView
										horizontal ={true}
										showsHorizontalScrollIndicator={false}
										style={styles.scrollViewStyle}
										>
									  {this.renderView()}
								</ScrollView>
						  </View>
			);
	  }
	  renderView(){
			var itemArr=[];
			var data=Home_D5.data;
			for(var i=0;i<data.length;i++){
				  itemArr.push(
						  <CommonMyCell key={i} data={data[i]} popTopShopCenter={(url)=>this.popToHome(url)}/>
				  )
			}
			return itemArr;
	  }
	  popToHome(url){
			if(this.props.popToHomeView==null)
				  return;
			else{
				  this.props.popToHomeView(url);
			}
	  }

}
class CommonMyCell extends Component{
	  constructor(props) {
			super(props);
	  }
	  render(){
			return(
					<TouchableOpacity onPress={()=>this.clickItem(this.props.data.detailurl)} style={styles.ShopItems}>
						  <Image source={{uri:this.props.data.img}} style={styles.shopImage}/>
						  <Text style={styles.showtext}>{this.props.data.showtext.text}</Text>
						  <Text style={{marginTop:5}}>{this.props.data.name}</Text>
					</TouchableOpacity>
			)
	  }
	  clickItem(url){
			if(this.props.data.detailurl==null)
			return;
			else{
				  this.props.popTopShopCenter(url);
			}
	  }

}
const styles = StyleSheet.create({
	  container:{
	         marginTop:10,
			backgroundColor:"#fff",
			paddingBottom:4
         },
	  ShopItems:{
			marginLeft:10,
			marginRight:10,
			width:Dimensions.get('window').width/3-20,
			alignItems:'center',
			paddingBottom:5
	  },
	  showtext:{
			color:"#fff",
			fontSize:10,
			backgroundColor:'orange',
			position:'absolute',
			left:0,
			bottom:38
	  },
	  shopImage:{
			width:Dimensions.get('window').width/3-20,
			height:Dimensions.get('window').width/3-20
	  },
	  scrollViewStyle:{
           flexDirection:'row',
			marginTop:10
	  }

});
module.exports=ShopCenter;
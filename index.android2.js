/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
        AppRegistry,
        ScrollView,
        StyleSheet,
        Text,
        TouchableOpacity,
        View,
        Image
        } from 'react-native';
import Dimensions from 'Dimensions';
class Thumb extends Component{

  render(){
    return(
            <View>
              <ScrollView horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          pagingEnabled={true}
                      >
                {this.renderAll()}
              </ScrollView>
              {/*
               <ScrollView
               ref='scrollView'
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               pagingEnabled={true}
               onScrollEndDrag={this.onEndDrag}
               onScrollBeginDrag={this.onStartDrag}
               onMomentumScrollEnd={this.onAnimationEnd}
               >
               {this.renderAllImage(this.state.dataSource)}
               </ScrollView>
               <View>{this.renderPageCircle()}</View>*/}

            </View>
    )
  }
  renderAll(){
    var allChild=[];
    var colors=['red','green','blue','yellow','purple'];
    for(var i=0;i<colors.length;i++){
      allChild.push(
              <View key={i} style={{backgroundColor:colors[i],width:Dimensions.get('window').width,height:180}}>
                <Text>{i}</Text>
              </View>
      )
    }
    return allChild;
  }
  /*renderAllImage(data){
   return data.map(function(item,i){
   var imageName=item.img;
   return(
   <Image key={i} source={{uri:imageName}} style={{width:screenWidth,height:imageHeight}} />
   )
   })
   }*/
}

var styles = StyleSheet.create({

});
AppRegistry.registerComponent('Shop', () => Thumb);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';


var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

// 全局的变量
var cols = 5;
var cellW = ScreenWidth/5;
var cellH = 70;

var TopListView = React.createClass({
    getDefaultProps(){
       return{
           dataArr: []
       }
    },

    getInitialState(){
        // 创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(row1, row2) => row1 !== row2});

       return{
          dataSource: ds.cloneWithRows(this.props.dataArr)
       }
    },

    render() {
        return (
                <View style={styles.contentStyle}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            />
                    </View>
        );
    },

    // 具体的cell
    renderRow(rowdata){
        return(
          <TouchableOpacity  style={styles.cellStyle}  onPress={()=>{alert('0')}}>

                <Image source={{uri: rowdata.image}} style={{width:52, height:52}}/>
                <Text style={styles.titleStyle}>{rowdata.title}</Text>

          </TouchableOpacity>
        );
    }
});


const styles = StyleSheet.create({
    contentStyle:{
        width:ScreenWidth
    },
    contentViewStyle:{
        // 设置主轴的方向
        flexDirection:'row',
        // 多个cell在同一行显示
        flexWrap:'wrap',
        // 宽度
        width:ScreenWidth,
        height:160
    },

    cellStyle:{
        // backgroundColor:'red',
        width:cellW,
        height:cellH,
        // 水平居中和垂直居中
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
    },

    titleStyle:{
        fontSize:12,
        color:'gray'
    }
});

// 输出组件类
module.exports = TopListView;

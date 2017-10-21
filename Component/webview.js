import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
  } from 'react-native';

export default class TWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: this.props.url,
      isShowErrorPage: false
    };
  }
  render(){

    return(

            <WebView
              startInLoadingState={true}
              onError={this._loadError.bind(this)}
              source={{uri: this.state.url}}>
            </WebView>

    );
  }

  _loadError(){
    this.setState({
      isShowErrorPage: true
    });
  }
}


const styles = StyleSheet.create({
  text:{
    fontSize:16,
    fontWeight:'300'
  },
  textView:{
    justifyContent:'center',
    alignItems: 'center'
  }
});

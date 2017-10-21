/**
 * Created by liuxiaoya£»
 *date 2017/2/6 0006.
 *description
 */
/**
 * Created by liuxiaoya£»
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image
		} from 'react-native';

import Main from './XMGMain';

export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			this.state={}
	  }
	  render() {
			return (
				<Image source={{uri:'launchimage'}} style={styles.launchImage}/>
			);
	  }
	  componentDidMount(){
			const navigator = this.props.navigator;
          setTimeout(function(){
				navigator.replace({
					  component:Main
				});
		  },1000)
	  }

}
const styles = StyleSheet.create({
	  launchImage:{
			flex:1
	  }
});
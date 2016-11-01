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
  Image 
} from 'react-native';

export default class TestProject extends Component {
	render() {
        let pic = {
      		uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
    	return (
    		<View>
      			<Image source={pic} style={{width: 193, height: 110}}/>
      			<Text style = {styles.welcome}> Hello World! </Text>
      			<Text style={styles.red}>just red</Text>
        		<Text style={styles.bigblue}>just bigblue</Text>
        		<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        		<Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      		</View>
    	);
	}
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('TestProject', () => TestProject);
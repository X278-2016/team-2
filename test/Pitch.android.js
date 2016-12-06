import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import * as firebase from 'firebase';
import background from './background-gradient-final.png';

const firebaseconfig = {
  apiKey: "AIzaSyCukG4JK4ejGue0oPlomMXNXIMn96mvbIo",
  authDomain: "mobile-bulletin-board.firebaseapp.com",
  databaseURL: "https://mobile-bulletin-board.firebaseio.com",
  storageBucket: "mobile-bulletin-board.appspot.com",
  messagingSenderId: "1002875644736"
};

export default class Pitch extends Component {
	render() {
		return(
			<Image
				style={styles.backgroundImage}
				source={background}>
				<View style={styles.layout}>
					<Text style={styles.title}>
						Pitch!
					</Text>
					<View style={{flexDirection: 'row'}}>
						<View style={{flex:0.20}}>
							<Text style={styles.buttonText}>
								Title:
							</Text> 
						</View>
						<TextInput style={styles.input}/>
						<TouchableHighlight onPress={this.props.onPress}>
							<Text style={styles.buttonText}> New </Text>
						</TouchableHighlight>
						<TouchableHighlight onPress={this.props.onPress}>
							<Text style={styles.buttonText}> Existing </Text>
						</TouchableHighlight>
					</View>
          <Text style={styles.instructions}>
            Enter short summary for a new or existing project
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
					  <TextInput 
					   	style={styles.multilineInput}
						  multiline={true}
						  numberOfLines={5}>
            </TextInput>
            <View style={{flex:0.15}}></View>
          </View>
          <Text style={styles.buttonText}>
            Category
          </Text>
          <Text style={styles.instructions}>
            Classify your project by specifying personal tags here
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
            <TextInput 
              style={styles.multilineInput}
              multiline={true}
              numberOfLines={5}>
            </TextInput>
            <View style={{flex:0.15}}></View>
          </View>
				</View> 
			</Image>
		);
	}
}


const styles = StyleSheet.create({
	layout: {
		flex: 1, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'sans-serif',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'firebrick',
    textAlign: 'center',
    marginBottom: 45,
	},
	label: {
		fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: 5,
    color: 'firebrick',
	},
	 multilineInput: {
    borderStyle: 'solid',
    backgroundColor: 'whitesmoke',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#87cefa',
    borderWidth: 1,
    flex:1
  },
	input: {
    flex:0.5,
    height: 35,
    marginBottom: 5,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
    borderColor: '#87cefa',
    borderWidth: 1,
  },
	button: {
    marginTop: 5,
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'sans-serif',
    color: 'firebrick',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
	backgroundImage: {
 		flex: 1,
    width: null,
    height: null,
    alignItems:'center',
    justifyContent:'center',
	},
  instructions: {
    textAlign: 'center',
    marginBottom: 10,
    color: 'darkgray',
  },
});
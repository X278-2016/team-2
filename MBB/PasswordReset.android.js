import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import background from './background-gradient-final.png';

import * as firebase from 'firebase';
const firebaseconfig = {
  apiKey: "AIzaSyCukG4JK4ejGue0oPlomMXNXIMn96mvbIo",
  authDomain: "mobile-bulletin-board.firebaseapp.com",
  databaseURL: "https://mobile-bulletin-board.firebaseio.com",
  storageBucket: "mobile-bulletin-board.appspot.com",
  messagingSenderId: "1002875644736"
};

export default class passwordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <Image 
        style={styles.backgroundImage}
        source = {background}>
        <View style={styles.layout}>
          <Text style={styles.title}>
            Password Reset
          </Text>
          <Text style={styles.label}>
            Email
          </Text>
          <View style = {{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
            <TextInput
              style={styles.input}
              selectTextOnFocus={true}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />  
            <View style={{flex:0.15}}></View>
          </View>
          <TouchableHighlight style={styles.button} onPress={this.sendResetEmail.bind(this)}>
            <Text style={styles.buttonText}>Send Reset Email</Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }
  sendResetEmail(){
    //send reset email and take them back to login
    //Not sure what features firebase offers but they probably have something
    firebase.auth().sendPasswordResetEmail(this.state.email).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      // Handle errors here
    });
    //Shouldn't need to log the user out
    //Unless we allow them to reset password from the profile page
    this.props.navigator.popToTop();
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
    fontSize: 28,
    fontWeight: 'bold',
    color: 'firebrick',
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: 5,
    color: 'firebrick',
  },
  label: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: 5,
    color: 'firebrick',
  },
  input: {
    flex:0.7,
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
  imageContainer: {
    flexShrink: 1,
    height: 180,
    //alignSelf: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems:'center',
    justifyContent:'center',
  },
});
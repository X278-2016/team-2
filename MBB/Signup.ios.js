import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  Alert,
  View
} from 'react-native';

import Home from './Home.ios.js';

import * as firebase from 'firebase';
const firebaseconfig = {
  apiKey: "AIzaSyCukG4JK4ejGue0oPlomMXNXIMn96mvbIo",
  authDomain: "mobile-bulletin-board.firebaseapp.com",
  databaseURL: "https://mobile-bulletin-board.firebaseio.com",
  storageBucket: "mobile-bulletin-board.appspot.com",
  messagingSenderId: "1002875644736"
};

//firebase.initializeApp(firebaseconfig);


export default class Signup extends Component {
constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          confirmEmail: '',
          password: '',
          confirmPassword: '',
          invalid: false,
      };
  }
  render() {
    let pic = {
      uri: 'https://image.freepik.com/free-icon/thumbs-up_318-31579.jpg'
    };
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>
          Sign up below!
        </Text>
        <Text style={styles.instructions}>
          Required fields are marked with an asterisk*
        </Text>
        <Text style={styles.label}>
          Name*
        </Text>
        <View style = {{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
            <TextInput
              style={styles.input}
              selectTextOnFocus={true}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
            <View style={{flex:0.15}}></View>
        </View>
        <Text style={styles.label}>
          Email*
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
        <Text style={styles.label}>
          Confirm Email*
        </Text>
        <View style = {{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
            <TextInput
              style={styles.input}
              selectTextOnFocus={true}
              onChangeText={(confirmEmail) => this.setState({confirmEmail})}
              value={this.state.confirmEmail}
            />
            <View style={{flex:0.15}}></View>
        </View>
        <Text style={styles.label}>
          Password*
        </Text>
        <View style = {{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
            <TextInput
              style={styles.input}
              selectTextOnFocus={true}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
            />
            <View style={{flex:0.15}}></View>
        </View>
        <Text style={styles.label}>
          Confirm Password*
        </Text>
        <View style = {{flexDirection: 'row'}}>
            <View style={{flex:0.15}}></View>
            <TextInput
              style={styles.input}
              selectTextOnFocus={true}
              secureTextEntry={true}
              onChangeText={(confirmPassword) => this.setState({confirmPassword})}
              value={this.state.confirmPassword}
            />
            <View style={{flex:0.15}}></View>
        </View>
        
        <TouchableHighlight style={styles.button} onPress={this.onSignup.bind(this)}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
          {/*<Image source={pic} style={{width: 200, height: 200}}/> */}
      </View>
    );
  }
  
  onSignup(){
    if(this.state.name == '') {
        this.setState({invalid: true})
    }
    if(this.state.email != this.state.confirmEmail){
      this.setState({invalid: true})
      //find some way to show the emails don't match
    };
    if(this.state.password != this.state.confirmPassword){
      this.setState({invalid:true})
      //find some way to show the passwords don't match
    };
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      switch (errorCode) {
        case 'auth/email-already-in-use':
          Alert.alert('Email In Use','There is already an account with that email.');
          break;
        case 'auth/invalid-email':
          Alert.alert('Invalid Email','The email address you entered is not a valid email.');
          break;
        case 'auth/weak-password':
          Alert.alert('Weak Password','Your password is too weak. Try a stronger password.');
          break;
        case 'auth/operation-not-allowed':
          Alert.alert('Operation Not Allowed','Email/password accounts are not enabled.');
      }
    });
    this.props.navigator.push({
      component: Home
    });
  }
  onBack(){
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 25,
    color: 'white',
  },
  label: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
  input: {
    flex:0.7,
    height: 35,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'darkblue',
    backgroundColor: 'red',
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import Home from './Home.ios.js';
import Profile from './Profile.ios.js';

import * as firebase from 'firebase';
const firebaseconfig = {
  apiKey: "AIzaSyCukG4JK4ejGue0oPlomMXNXIMn96mvbIo",
  authDomain: "mobile-bulletin-board.firebaseapp.com",
  databaseURL: "https://mobile-bulletin-board.firebaseio.com",
  storageBucket: "mobile-bulletin-board.appspot.com",
  messagingSenderId: "1002875644736"
};


export default class Signup extends Component {
constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
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
          All fields are required
        </Text>
        <Text style={styles.label}>
          Name
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text style={styles.label}>
          Email
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.label}>
          Password
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text style={styles.label}>
          Confirm Password
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <TouchableHighlight style={styles.button} onPress={this.onSignup.bind(this)}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableHighlight>
          {/*<Image source={pic} style={{width: 200, height: 200}}/> */}
      </View>
    );
  }
  
  onSignup(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
      name: this.state.name,
    });
    this.props.navigator.push({
      component: Profile
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
    borderStyle: 'solid',
    backgroundColor: 'whitesmoke',
    height: 25,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
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

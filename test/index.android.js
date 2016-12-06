/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

import Login from './Login.android.js';
import Profile from './Profile.android.js';
//import Signup from './Signup.android.js';
//import SignupSuccess from './SignupSuccess.android.js';

  const firebaseconfig = {
    apiKey: "AIzaSyCukG4JK4ejGue0oPlomMXNXIMn96mvbIo",
    authDomain: "mobile-bulletin-board.firebaseapp.com",
    databaseURL: "https://mobile-bulletin-board.firebaseio.com",
    storageBucket: "mobile-bulletin-board.appspot.com",
    messagingSenderId: "1002875644736"
  };

firebase.initializeApp(firebaseconfig);

export default class test extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    };
  }

  render(){
    //Using code snippet from https://www.sitepoint.com/authentication-in-react-native-with-firebase/
    if(firebase.auth().currentUser){
      return (
        <Navigator
          initialRoute={{component: Profile}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }
    else{
      return (
        <Navigator
          initialRoute={{component: Login}}
          configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            if(route.component){
              return React.createElement(route.component, { navigator });
            }
          }}
        />
      );
    }
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
});

AppRegistry.registerComponent('test', () => test);

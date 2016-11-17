import React, { Component } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

import Signup from './Signup.ios.js';
export default class SignupSuccess extends Component {
  render() {
    return (
      <View>
        <Text>You successfully signed up!</Text>
        <Text>^Someday, that will be true</Text>
      
        <TouchableHighlight onPress={this.onBack.bind(this)}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
  onBack(){
    this.props.navigator.pop()
  }
}
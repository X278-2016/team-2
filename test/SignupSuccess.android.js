import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Navigator, 
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import Signup from './Signup.android.js';
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

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
});
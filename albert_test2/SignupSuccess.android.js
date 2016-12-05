import React, { Component } from 'react';
import { View, Text, Navigator, TouchableHighlight } from 'react-native';

export default class SignupSuccess extends Component {
  render() {
    return (
      <View>
        <Text>You successfully signed up!</Text>
        <Text>^Someday, that will be true</Text>
      
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
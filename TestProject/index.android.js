/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default class TestProject extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          email: 'Email',
          confirmEmail: 'Confirm',
          password: '',
          confirmPassword: ''
      };
  }
  render() {
    let pic = {
      uri: 'https://image.freepik.com/free-icon/thumbs-up_318-31579.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Sign up below!
        </Text>
        <Text style={styles.instructions}>
          Please fill in all required fields
        </Text>
        <Text style={styles.instructions}>
          Email*
        </Text>
        <TextInput 
          style={{flex:0.1, textAlign: 'center', color: 'darkgray', borderColor: 'black'}}
          selectTextOnFocus={true}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.instructions}>
          Confirm Email*
        </Text>
        <TextInput 
          style={{flex: 0.1, textAlign: 'center', color: 'darkgray', borderColor: 'black'}}
          selectTextOnFocus={true}
          onChangeText={(confirmEmail) => this.setState({confirmEmail})}
          value={this.state.confirmEmail}
        />
        <Text style={styles.instructions}>
          Password*
        </Text>
        <TextInput 
          style={{flex: 0.1, textAlign: 'center', color: 'darkgray', borderColor: 'black'}}
          selectTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text style={styles.instructions}>
          Confirm Password*
        </Text>
        <TextInput 
          style={{flex: 0.1, textAlign: 'center', color: 'darkgray', borderColor: 'black'}}
          selectTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          value={this.state.confirmPassword}
        />
        <Image source={pic} style={{width: 200, height: 200}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
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

AppRegistry.registerComponent('TestProject', () => TestProject);

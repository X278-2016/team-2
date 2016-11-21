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
import Signup from './Signup.ios.js';
import pwReset from './PasswordReset.ios.js';

export default class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
      };
  }
  render() {
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>
          Login
        </Text>
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
        <TouchableHighlight style={styles.loginButton}
        onPress={this.onLogin.bind(this)}>
          <Text style={styles.loginText}>
            Enter
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.helpButton}
        onPress={this.pwReset.bind(this)}>
          <Text style={styles.helpText}>
            Forgot your password?
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.helpButton}
        onPress={this.onSignup.bind(this)}>
          <Text style={styles.helpText}>
            New to Hub? Sign up here!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
  
  onLogin(){
    //Login logic goes here
    //If login successful, push the home component
    this.props.navigator.push({
      component: Home
    });
    //Else fail them and retry, not entirely sure how
  }
  
  onSignup(){
    this.props.navigator.push({
      component: Signup
    });
  }
  pwReset(){
    this.props.navigator.push({
      component: pwReset
    });
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
  label: {
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
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
  loginButton: {
    borderStyle: 'solid',
    borderColor: 'darkblue',
    backgroundColor: 'red',
    height: 50,
    width: 250,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  helpButton: {
    height: 30,
    width: 200,
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  helpText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
  }
});
import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import SignupSuccess from './SignupSuccess.ios.js';

export default class Signup extends Component {
constructor(props) {
      super(props);
      this.state = {
          name: '',
          email: '',
          confirmEmail: '',
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
        <Text style={styles.title}>
          Sign up below!
        </Text>
        <Text style={styles.instructions}>
          Required fields are marked with an asterisk*
        </Text>
        <Text style={styles.label}>
          Name*
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
        />
        <Text style={styles.label}>
          Email*
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <Text style={styles.label}>
          Confirm Email*
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(confirmEmail) => this.setState({confirmEmail})}
          value={this.state.confirmEmail}
        />
        <Text style={styles.label}>
          Password*
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Text style={styles.label}>
          Confirm Password*
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
    this.props.navigator.push({
      component: SignupSuccess
    });
  }
  onBack(){
    this.props.navigator.pop()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    //backgroundColor: 'darkblue',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor: 'white',
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

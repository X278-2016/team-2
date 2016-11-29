import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import * as firebase from 'firebase';
const firebaseconfig = {
  apiKey: "AIzaSyCukG4JK4ejGue0oPlomMXNXIMn96mvbIo",
  authDomain: "mobile-bulletin-board.firebaseapp.com",
  databaseURL: "https://mobile-bulletin-board.firebaseio.com",
  storageBucket: "mobile-bulletin-board.appspot.com",
  messagingSenderId: "1002875644736"
};


export default class Profile extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: firebase.database().ref('users/' + firebase.auth().currentUser.uid).once('value').resolve,
      };
  }
  
  render() {
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>
          Your Profile
        </Text>
        <Text style={styles.label}>
          Email
        </Text>
        <Text style={styles.label}>
          {firebase.auth().currentUser.email}
        </Text>
        <Text style={styles.label}>
          Name
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(data) => this.setState({name})}
          value={this.state.name}
        />
        <TouchableHighlight style={styles.button}
        onPress={this.writeToFirebase.bind(this)}>
          <Text style={styles.buttonText}>
            Send that junk to firebase
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
        onPress={this.onLogout.bind(this)}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
  onLogout(){
    firebase.auth().signOut()
    this.props.navigator.popToTop()
  }
  writeToFirebase(){
    firebase.database().ref('users/' + this.state.currentUser.email).set({
      email: this.state.currentUser.email,
      bio: this.state.data,
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
    marginBottom: 40,
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
    width: 250,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
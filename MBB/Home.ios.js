import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.layout}>
        <Text style={styles.title}>
          Insert Home Page Here.
        </Text>      
        <TouchableHighlight style={styles.button}
        onPress={this.onBack.bind(this)}>
          <Text style={styles.buttonText}>
            Go Back
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
  onBack(){
    this.props.navigator.popToTop();
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
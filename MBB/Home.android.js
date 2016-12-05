import React, { Component } from 'react';
import {
  Image,
  ListView,
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


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = firebase.database().ref('projects/');
    this.state = {
      dbref: firebase.database().ref('users/' + firebase.auth().currentUser.uid),
      name: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.state.dbref.once('value', snapshot => {
      this.setState({name: snapshot.val().name});
    });
  }
  
  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  
  render() {
    return (
      <View style={styles.layout}>
        <TouchableHighlight style={styles.pitchButton}
        onPress={this.onLogout.bind(this)}>
          <Text style={styles.pitchButtonText}>
            Pitch!
          </Text>
        </TouchableHighlight>
        <Text style={styles.title}>
          This will be a list of stuff to look at!
        </Text>
          {/*<ListView datasource={this.state.dataSource}
        renderRow={this._renderItem.bind(this)}
        style={styles.list}/>*/}
        <Text style={styles.label}>
          This reference returns {this.state.dataSource}
        </Text>
      
        <Text style={styles.label}>
          Enter data to send to firebase
        </Text>
        <TextInput 
          style={styles.input}
          selectTextOnFocus={true}
          onChangeText={(data) => this.setState({data})}
          value={this.state.data}
        />
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

_renderItem(item){
  return (
    <ListItem item={item} onPress={() => this.setState({name: "buttonpresser"})}/>
  );
}

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

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
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pitchButton: {
    borderStyle: 'solid',
    borderColor: 'darkblue',
    backgroundColor: 'red',
    height: 75,
    width: 350,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pitchButtonText: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
});
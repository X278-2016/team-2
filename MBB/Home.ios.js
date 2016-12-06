import React, { Component } from 'react';
import {
  Image,
  ListView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

import Login from './Login.ios.js';
import Profile from './Profile.ios.js';


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
    const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
    
    super(props);
    this.projectsRef = firebase.database().ref('projects/').orderByKey();
    this.state = {
      dataSource: ds.cloneWithRows([]),
      searchString: '',
      modalVisible: false,
      mProjectName: '',
      mProjectDesc: '',
    };
  }
  
  componentWillMount() {
    this.listenForProjects(this.projectsRef);
  }
  
  render() {
    return (
      <View style={styles.layout}>
        <Modal
          animationType={"none"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.modalLayout}>
          <View>
            <Text style={styles.modalLabel}>Project Name: </Text>
            <Text style={styles.modalSingleLine}> {this.state.mProjectName} </Text>
            
            
            <Text style={styles.modalLabel}> Description: </Text>
            <Text style={styles.modalMultiLine}>  {this.state.mProjectDesc}</Text>

            <TouchableHighlight style={styles.button} onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text style={styles.buttonText}>Back</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>
        <TouchableHighlight style={styles.pitchButton}
        onPress={this.onLogout.bind(this)}>
          <Text style={styles.pitchButtonText}>
            Pitch!
          </Text>
        </TouchableHighlight>
        <View style={styles.searchBar}>
          <Text style={styles.label}>
            Search
          </Text>
          <TextInput 
            style={styles.input}
            selectTextOnFocus={true}
            onChangeText={(searchString) => this.setState({searchString})}
            value={this.state.searchString}
          />
        </View>
          
        {/*this one works
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <Text style={styles.label}>
              Project Name: {rowData.pname} 
            </Text>
          }
          enableEmptySections={true}
        />  */}
        
        
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
          <TouchableHighlight style={styles.button}
          onPress={()=>this.onViewProject(rowData)}>
            <Text style={styles.label}>
              Project Name: {rowData.pname} 
            </Text>
          </TouchableHighlight>
          }
          enableEmptySections={true}
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
    this.props.navigator.resetTo({
      component: Login
    });
  }
  onViewProject(rowData){
    this.setState({
      mProjectName: rowData.pname,
      mProjectDesc: rowData.pinfo.description,
    });
    this.setModalVisible(true);
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  listenForProjects(projectsRef) {
    projectsRef.on('value', snap => {
      // get children as an array
      var projects = [];
      snap.forEach((child) => {
        projects.push({
          pinfo: child.val(),
          pname: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(projects)
      });

    });
  }
  goToProfile(){
    this.props.navigator.push({
      component: Profile
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
  searchBar: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'gray',
  },
  searchButton: {
    //stuff
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
  modalLayout: {
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  modalLabel: {
    fontFamily: 'AvenirNext-UltraLight',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'firebrick',
  },
  modalSingleLine: {
    fontFamily: 'AvenirNext-UltraLight',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
    color: 'black'
  },
  modalMultiLine: {
    flex: 0.7,
    borderStyle: 'solid',
    backgroundColor: 'whitesmoke',
    fontFamily: 'AvenirNext-UltraLight',
    fontSize: 12,
    height: 110,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#87cefa',
    borderWidth: 1,
  },
});
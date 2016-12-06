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

import Login from './Login.android.js';
import Profile from './Profile.android.js';
import background from './background-gradient-final.png';
import searchButtonImage from './searchbutton.png';

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
      searchString: 'Search',
    };
  }
  
  componentWillMount() {
    this.listenForProjects(this.projectsRef);
  }
  
  render() {
    return (
      <Image 
        style={styles.backgroundImage}
        source = {background}>
        <View style={styles.layout}>
          <TouchableHighlight style={styles.pitchButton}
            onPress={this.onPitch.bind(this)}>
            <Text style={styles.pitchButtonText}>
              Pitch!
            </Text>
          </TouchableHighlight>
          <View style={styles.searchContainer}>
            <View style={{flex:0.1}}></View>
            <View style={styles.searchBar}>
              <TextInput 
                style={styles.input}
                selectTextOnFocus={true}
                onChangeText={(searchString) => this.setState({searchString})}
                value={this.state.searchString}
              />
            </View>
            <TouchableHighlight style= {styles.searchButton}
              onPress = {this.onSearch.bind(this)}>
              <Image
                resizeMode={Image.resizeMode.contain}
                style={styles.searchButtonImage}
                source={searchButtonImage}>
              </Image>
            </TouchableHighlight>
            <View style={{flex:0.1}}></View>
          </View>

          <ListView 
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <TouchableHighlight style={styles.button}
              onPress={this.onViewProject.bind(this)}>
                <Text style={styles.label}>
                  Project Name: {rowData.pname} 
                </Text>
              </TouchableHighlight>
            }
            enableEmptySections={true}
          />
          <View style={styles.bottomBar}>
            <TouchableHighlight style={styles.navButton}
              onPress={this.goToProfile.bind(this)}>
              <Text style={styles.buttonText}>
                Profile
              </Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.navButton}
              onPress={this.onLogout.bind(this)}>
              <Text style={styles.buttonText}>
                Logout
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Image>
    )
  }
  onSearch() {

  }
  onPitch() {

  }
  goToProfile() {
    this.props.navigator.push({
      component: Profile
    });
  }
  onLogout(){
    firebase.auth().signOut()
    this.props.navigator.resetTo({
      component: Login
    });
  }
  onViewProject(){
    
  }

renderItem(project){
  return (
    <ListItem project={project} />
  );
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
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue',
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'firebrick',
    textAlign: 'center',
    marginBottom: 5,
  },
  instructions: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: 5,
    color: 'firebrick',
  },
  label: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginBottom: 5,
    color: 'firebrick',
  },
  input: {
    height: 35,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'whitesmoke',
    borderStyle: 'solid',
    borderColor: '#87cefa',
    borderWidth: 1,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    height: 35,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'sans-serif',
    color: 'firebrick',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },  
  multilineInput: {
    flex: 0.7,
    borderStyle: 'solid',
    backgroundColor: 'whitesmoke',
    height: 110,
    marginBottom: 10,
    alignItems: 'center',
    textAlign: 'center',
    borderStyle: 'solid',
    borderColor: '#87cefa',
    borderWidth: 1,
  },
  imageContainer: {
    flexShrink: 1,
    height: 180,
    //alignSelf: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    alignItems:'center',
    justifyContent:'center',
  },
  pitchButtonText: {
    color: 'firebrick',
    fontSize: 60,
    fontWeight: 'bold',
  },
  pitchButton: {
    height: 75,
    width: 350,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flex: 0.7,
    alignItems: 'stretch',
    justifyContent: 'center',
    height: 35,
  },
  searchButton: {
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButtonImage: {
    flexShrink: 1,
    width: 35,
    height: 35,
    justifyContent: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 35,
  },
  searchLabel: {
    flex: 0.15,
    height: 35,
    fontFamily: 'sans-serif',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    color: 'firebrick',
  },
  navButton: {
    flex: 0.5,
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 10,
  },
});
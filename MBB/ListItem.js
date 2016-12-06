import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../styles.js')
const { View, TouchableHighlight, Text } = ReactNative;

class ListItem extends Component {
  render() {
    return (
<<<<<<< HEAD
      <TouchableHighlight>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.project}</Text>
=======
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
>>>>>>> 4d4b3e5ad0d6145251b03667296f1353e877ae68
        </View>
      </TouchableHighlight>
    );
  }
}

<<<<<<< HEAD
const styles = StyleSheet.create({
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },

=======
>>>>>>> 4d4b3e5ad0d6145251b03667296f1353e877ae68
module.exports = ListItem;
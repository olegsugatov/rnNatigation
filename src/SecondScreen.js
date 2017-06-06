import React, { Component } from 'react';

import {
  Image,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './App';

class SecondScreen extends Component {

  static navigationOptions = {
    title: 'Second Screen'
  };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
         <Text style={styles.welcome}>
           Second Screen!
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default SecondScreen;

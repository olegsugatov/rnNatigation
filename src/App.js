import React, { Component } from 'react';

import {
  Image,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SecondScreen from './SecondScreen';

class App extends Component {

  static navigationOptions = {
    title: 'Home Screen'
  };
  
  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
         <Text style={styles.welcome}>
           Welcome to React Native Navigation!
         </Text>
         <Button
          onPress={() => navigate('SecondScreen')}
          title="Go to Second Screen"
         />
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5 
  }
});

export default App;

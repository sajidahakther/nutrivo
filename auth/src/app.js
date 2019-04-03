import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // imported before any custom components
import { Header } from './components/common';
import LoginForm from './components/loginform';

class App extends Component {
  componentWillMount() { // life cycle methods are automatically invoked
    firebase.initializeApp({
    apiKey: 'AIzaSyCVqGWaMw6MAxoautqPcPJIy5G7-XCbTpY',
    authDomain: 'nutrivo-health.firebaseapp.com',
    databaseURL: 'https://nutrivo-health.firebaseio.com',
    projectId: 'nutrivo-health',
    storageBucket: 'nutrivo-health.appspot.com',
    messagingSenderId: '504943005646'
  });
}

  render() {
    return (
      <View>
        <Header screenTitle="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

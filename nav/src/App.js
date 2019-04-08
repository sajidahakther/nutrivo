import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCujrGQplVcb-CNmOnDBrfBJZfrn5yQNko',
      authDomain: 'nutrivoapp.firebaseapp.com',
      databaseURL: 'https://nutrivoapp.firebaseio.com',
      projectId: 'nutrivoapp',
      storageBucket: 'nutrivoapp.appspot.com',
      messagingSenderId: '915474295629'
    };
    firebase.initializeApp(config);
}

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;

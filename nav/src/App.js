import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginform';

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
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'process.env.REACT_APP_API_KEY',
      authDomain: 'process.env.REACT_APP_AUTH_DOMAIN’,
      databaseURL: 'process.env.REACT_APP_DATABASE_URL,
      projectId: 'process.env.REACT_APP_PROJECT_ID,
      storageBucket: 'process.env.REACT_APP_S’TORAGE_BUCKET,
      messagingSenderId: 'process.env.REACT_APP_MESSAGING’_SENDER_ID
    };
  firebase.initializeApp(config);
}


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

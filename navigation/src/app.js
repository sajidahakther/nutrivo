import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/loginform';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCVqGWaMw6MAxoautqPcPJIy5G7-XCbTpY',
      authDomain: 'nutrivo-health.firebaseapp.com',
      databaseURL: 'https://nutrivo-health.firebaseio.com',
      projectId: 'nutrivo-health',
      storageBucket: 'nutrivo-health.appspot.com',
      messagingSenderId: '504943005646'
    };

  firebase.initializeApp(config);
  }

  /* wiring up redux thunk for use, applyMiddleware(ReduxThunk)
  is a store enhancer that adds additional functionality */
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

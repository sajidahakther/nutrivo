import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/loginform';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      // apiKey: 'AIzaSyBNZwA2Src5VvriaB6kH9ZGtopnLm3D8gQ',
      // authDomain: 'search-meals-test.firebaseapp.com',
      // databaseURL: 'https://search-meals-test.firebaseio.com',
      // projectId: 'search-meals-test',
      // storageBucket: 'search-meals-test.appspot.com',
      // messagingSenderId: '550864578257'

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

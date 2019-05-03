import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; // import before any custom components
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/loginform';

class App extends Component {
  // by default user is not logged in
  state = { loggedIn: null };

  // integrating firebase to app using a life cycle method as they are automatically invoked
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCVqGWaMw6MAxoautqPcPJIy5G7-XCbTpY',
    authDomain: 'nutrivo-health.firebaseapp.com',
    databaseURL: 'https://nutrivo-health.firebaseio.com',
    projectId: 'nutrivo-health',
    storageBucket: 'nutrivo-health.appspot.com',
    messagingSenderId: '504943005646'
    });

    /* when the user signs in (the authentication state changes), this function is called
    'user' is an object representing the user as signed in, else it is 'null' when signed out */
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
              <CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                  Sign Out
                </Button>
              </CardSection>
          </View>
        );

      case false:
        return <LoginForm />;

      default:
        return <View style={styles.positioning}><Spinner size="large" /></View>;
    }
  }

  render() {
    return (
      <View>
        <Header screenTitle="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  positioning: {
    paddingTop: 300
  }
};

export default App;

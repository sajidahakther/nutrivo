import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  // singing user in, authenticate user with firebase
  onButtonPress() {
    const { email, password } = this.state;
    /* re-setting error message to null when user tries to sign in again
    showing loading sign (spinner) for user feedback when users press 'login'*/
    this.setState({ error: '', loading: true });
    // using asynchronous methods to return a promise
    firebase.auth().signInWithEmailAndPassword(email, password)
      // if the sign in process fails, create an account
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          // if user fails to sign in AND create account, throw error
          .catch(() => {
            // update the state and error message
            this.setState({ error: 'Authentication failed.' });
          });
      });
  }

  // show spinner when button is pressed and auth process is loading, else show the 'login' button
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    // login button is shown by default
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@googlemail.com"
            label="Email"
            value={this.state.text}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        {/*  when authentication fails, show error message here */}
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;

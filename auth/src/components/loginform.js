import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  // adding error and spinner to state to provide user feedback
  state = { email: '', password: '', error: '', loading: false };

  // singing user in, authenticate user with firebase
  onButtonPress() {
    const { email, password } = this.state;
    /* re-setting error message to null when user tries to sign in again
    showing loading sign (spinner) for user feedback when users press 'login'*/
    this.setState({ error: '', loading: true });
    // using asynchronous methods to return a promise
    firebase.auth().signInWithEmailAndPassword(email, password)
      // execute this method if the user successfully signs in
      .then(this.loginSuccess.bind(this))
      // if the sign in process fails, create a new account
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          // execute this method if the user successfully creates an account
          .then(this.loginSuccess.bind(this))
          // execute this method if the user fails to login AND create new account
          .catch(this.loginFail.bind(this));
      });
  }

  loginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false, // clear spinner
      error: '' // clear pending error message
    });
  }

  loginFail() {
    this.setState({
      loading: false, // clear spinner
      error: 'Authentication failed.' // show error message
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
        Sign In
      </Button>
    );
  }

  // creating controlled components, using state to tell object what it's value should be
  // using conditional rendering to render different content inside of components like spinner
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@googlemail.com"
            label="Email"
            value={this.state.email}
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

import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  // singing user in, authenticate user with firebase
  onButtonPress() {
    const { email, password } = this.state;
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
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

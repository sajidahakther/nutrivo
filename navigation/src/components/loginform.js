import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailHasChanged, passHasChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  whenEmailChanges(text) {
    this.props.emailHasChanged(text);
  }

  whenPassChanges(text) {
    this.props.passHasChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
          placeholder="user@googlemail.com"
          onChangeText={this.whenEmailChanges.bind(this)}
          value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          label="password"
          placeholder="password"
          onChangeText={this.whenPassChanges.bind(this)}
          value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Sign In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.authentication.email,
    password: state.authentication.password
  };
};

export default connect(mapStateToProps, {
  emailHasChanged, passHasChanged, loginUser
})(LoginForm);

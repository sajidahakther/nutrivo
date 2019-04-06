import React, { Component } from 'react';
import { View, Text } from 'react-native';
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

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
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

        {this.renderError()}

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Sign In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error
  };
};

export default connect(mapStateToProps, {
  emailHasChanged, passHasChanged, loginUser
})(LoginForm);

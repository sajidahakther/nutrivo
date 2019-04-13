import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

// backgroung image is free to use and originally from unsplash: https://unsplash.com/photos/nTZOILVZuOg, edited by me.
const nutrivobg = require('./assets/mainbg.png');

// redux will be in charge of the value of the email and pass
class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
      Sign In
      </Button>
    );
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <ImageBackground
        source={nutrivobg}
        style={{ width: '100%', height: '100%' }}
      >
      <View
        style={{ paddingTop: 620 }}
      >
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@nutrivo.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  errorView: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
    paddingTop: 10,
    paddingBottom: 10
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FF0000'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

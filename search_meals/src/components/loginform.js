import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { SubSection, Input, Button, Spinner, FormSection, FormCard } from './common';

const nutrivobg = require('./assets/testbg.png');

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
      LOGIN
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
      <View style={styles.container}>
        <FormCard>
          <FormSection>
            <Input
              placeholder="Email"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </FormSection>

          <FormSection>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
          </FormSection>
          </FormCard>

          {this.renderError()}

          <SubSection>
            {this.renderButton()}
          </SubSection>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  errorView: {
    paddingTop: 10,
    paddingBottom: 5
  },
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FA2133'
  },
  container: {
    paddingTop: 590
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

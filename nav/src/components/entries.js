import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { entriesFetch } from '../actions';

class Entries extends Component {
componentWillMount() {
  this.props.entriesFetch();
}

  render() {
    return (
      <View>
        <Text>apple</Text>
        <Text>water</Text>
        <Text>sandwich</Text>
        <Text>banana</Text>
        <Text>coffee</Text>
        <Text>cake</Text>
      </View>
    );
  }
}

export default connect(null, { entriesFetch })(Entries);

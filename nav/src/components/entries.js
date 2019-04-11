import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { entriesFetch } from '../actions';

class Entries extends Component {
  componentWillMount() {
    this.props.entriesFetch(); // loads up list of entries
    this.createDataSource(this.props);
    }

  // nextProps is the next set of props that the component is rendered with
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ entries }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(entries);
  }

  render() {
    console.log(this.props);
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

/* state.entries is an object that has many key value pairs
for each key value pair '_.map' run the function. Takes all
the returned objects (entries) and put it in an array */
const mapStateToProps = state => {
  const entries = _.map(state.entries, (val, uid) => {
      return { ...val, uid };
  });
  return { entries };
};

export default connect(mapStateToProps, { entriesFetch })(Entries);

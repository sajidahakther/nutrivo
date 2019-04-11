import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class EntryListItem extends Component {
  render() {
    const { food } = this.props.entry;

    return (
      <CardSection>
        <Text style={styles.titleSyle}>
         {food}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EntryListItem;

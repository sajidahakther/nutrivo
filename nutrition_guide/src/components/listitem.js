import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { nutrientName } = styles;
    const { nutrient } = this.props.library;

    return (
      <CardSection>
        <Text style={nutrientName}>
          {nutrient}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  nutrientName: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;

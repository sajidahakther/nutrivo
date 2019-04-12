import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EntryListItem extends Component {
  onRowPress() {
    Actions.editentry({ entry: this.props.entry });
  }

  render() {
    const { food, serving } = this.props.entry;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <View style={{ flex: 1, flexDirection: 'row' }}>

              <View style={{ flex: 1 }}>
                <Text style={styles.food}>
                 {food}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.serving}>
                 {serving}
                </Text>
              </View>

            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  food: {
    paddingLeft: 15,
    color: '#3399ff',
    fontSize: 18
  },
  serving: {
    textAlign: 'right',
    paddingRight: 15,
    color: '#585858',
    fontSize: 18
  }
};

export default EntryListItem;

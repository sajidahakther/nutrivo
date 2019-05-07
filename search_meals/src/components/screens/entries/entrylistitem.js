import React, { Component } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../../common';

class EntryListItem extends Component {
  onRowPress() {
    Actions.editentry({ entry: this.props.entry });
  }

  render() {
    const { food, serving } = this.props.entry;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection style={{ paddingTop: 20 }}>
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
    color: '#383838',
  },
  serving: {
    textAlign: 'right',
    color: '#7E7E7E',
  }
};

export default EntryListItem;

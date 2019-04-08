import React, { Component } from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { entryupdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class AddEntry extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Food"
            placeholder="Rice"
            value={this.props.food}
            onChangeText={value => this.props.entryupdate({ prop: 'food', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Serving Size"
            placeholder="100 g"
            value={this.props.serving}
            onChangeText={value => this.props.entryupdate({ prop: 'serving', value })}
          />
        </CardSection>

        <CardSection>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.duration}
            onValueChange={value => this.props.entryupdate({ prop: 'duration', value })}
          >
            <Picker.Item label="Breakfast" value="Breakfast" />
            <Picker.Item label="Lunch" value="Lunch" />
            <Picker.Item label="Snack" value="Snack" />
            <Picker.Item label="Dinner" value="Dinner" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>
            Add
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate })(AddEntry);

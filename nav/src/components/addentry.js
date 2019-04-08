import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { entryupdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class AddEntry extends Component {
  render() {
    return (
      <Card>

        {/* Enter food name */}
        <CardSection>
          <Input
            label="Food"
            placeholder="Rice"
            value={this.props.food}
            onChangeText={value => this.props.entryupdate({ prop: 'food', value })}
          />
        </CardSection>

        {/* Enter serving size */}
        <CardSection>
          <Input
            label="Serving Size"
            placeholder="100 g"
            value={this.props.serving}
            onChangeText={value => this.props.entryupdate({ prop: 'serving', value })}
          />
        </CardSection>

        {/* Select meal duration */}
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTitle}>
            Select a Meal
          </Text>
          <Picker
            // style={{ flex: 1 }}
            selectedValue={this.props.duration}
            onValueChange={value => this.props.entryupdate({ prop: 'duration', value })}
          >
            <Picker.Item label="Breakfast" value="Breakfast" />
            <Picker.Item label="Lunch" value="Lunch" />
            <Picker.Item label="Snack" value="Snack" />
            <Picker.Item label="Dinner" value="Dinner" />
          </Picker>
        </CardSection>

        {/* Press to add food entry */}
        <CardSection>
          <Button>
            Add
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTitle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 9
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate })(AddEntry);

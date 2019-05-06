import React, { Component } from 'react';
import { Picker, ScrollView } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import { connect } from 'react-redux';
import { entryupdate } from '../../../actions';
import { Input } from '../../common';

class EntryForm extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card style={{ flexDirection: 'column' }}>
          <CardItem header bordered>
           <Text style={styles.textColour}>Select a Meal</Text>
          </CardItem>
          <Picker
            selectedValue={this.props.duration}
            onValueChange={value => this.props.entryupdate({ prop: 'duration', value })}
          >
            <Picker.Item label="Breakfast" value="Breakfast" />
            <Picker.Item label="Lunch" value="Lunch" />
            <Picker.Item label="Snack" value="Snack" />
            <Picker.Item label="Dinner" value="Dinner" />
          </Picker>
        </Card>

        <Card style={{ flexDirection: 'column' }}>
          <CardItem header bordered>
           <Text style={styles.textColour}>Search Food</Text>
          </CardItem>
          <CardItem>
            <Text> Add search bar here </Text>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
           <Text style={styles.textColour}>Manually Enter Food</Text>
          </CardItem>
          <CardItem>
            <Input
              placeholder="Enter food (vegetable pasta)"
              value={this.props.food}
              onChangeText={value => this.props.entryupdate({ prop: 'food', value })}
            />
          </CardItem>
          <CardItem>
            <Input
              placeholder="Enter calorie amount (100 kcal)"
              value={this.props.serving}
              onChangeText={value => this.props.entryupdate({ prop: 'serving', value })}
            />
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  textColour: {
    color: '#383838'
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate })(EntryForm);
